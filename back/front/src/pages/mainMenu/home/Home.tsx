import styled from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";
import { AllItem } from "../../../interface/IDBdataType";
import Header from "../../../components/header/Header";
import { ItemName, ItemPrice } from "../best/BestProductItem";
import Slider from "react-slick";
import { useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../../../auth/OAuth";
import Footer from "../../../components/footer/Footer";
import ScrollTopButton from "../../../components/scrollTopButton/ScrollTopButton";
import Loading from "../../../components/loading/Loading";

const ALL_ITEM = gql`
  query Item {
    item {
      sId
      sName
      sTitle
      sContents
      sPrice
      sView
      slideImg
      mainBottomImg
    }
    nowUser {
      kakao_id
    }
  }
`;
const MY_PROFILE = gql`
  mutation LogInUser(
    $userCode: Int!
    $kakaoId: String!
    $kakaoProfileImg: String
    $kakaoNickname: String!
    $kakaoEmail: String!
    $userRole: String!
    $createTime: Date
  ) {
    logInUser(
      user_code: $userCode
      kakao_id: $kakaoId
      kakao_profile_img: $kakaoProfileImg
      kakao_nickname: $kakaoNickname
      kakao_email: $kakaoEmail
      user_role: $userRole
      create_time: $createTime
    ) {
      user_code
      kakao_id
      kakao_profile_img
      kakao_nickname
      kakao_email
      user_role
      create_time
    }
  }
`;
const VIEW_COUNT = gql`
  mutation ViewCount($viewCountId: Int) {
    viewCount(id: $viewCountId) {
      sId
    }
  }
`;
const Main = styled.div`
  width: 100%;
  height: auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Banner = styled.div`
  width: 50%;
  height: auto;
  margin: 1.5rem auto;
  @media ${(props) => props.theme.tablet} {
    width: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 95%;
    margin: 0 auto;
  }
`;
const BannerImgContentsArea = styled(Link)`
  width: 100%;
  height: 20%;
  position: relative;
`;
const BannerImg = styled.img`
  width: 100%;
  height: 30%;
  margin-bottom: 1rem;
  border-radius: 20px;
  position: relative;
`;
const ImgText = styled.div`
  width: 100%;
  height: auto;
  padding: 5.1rem 1.3rem;
  letter-spacing: 0.1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: "Noto Sans KR", sans-serif;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    margin: 0 0 5rem 0;
  }
`;
const Title = styled.h1`
  width: 100%;
  height: auto;
  line-height: auto;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.bgColor};
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
`;
const Contents = styled.p`
  width: 100%;
  height: auto;
  line-height: auto;
  font-size: 1.3rem;
  color: ${(props) => props.theme.bgColor};
  font-weight: 600;
  margin-top: 15px;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
const NewItemWrap = styled.div`
  width: 50%;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
    width: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
const NewItem = styled(Banner)`
  width: 100%;
  margin: 4.5rem auto;
`;
const NewItemInner = styled.div`
  width: 100%;
`;
const NewItemTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
`;
const ItemList = styled(Link)`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    opacity: 0.7;
  }
`;
const ItemImg = styled.img`
  width: 270px;
  height: 270px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const ItemImgSlider = styled(Slider)`
  width: 100%;
  height: auto;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 85%;
    margin: 0 auto;
  }
  .slick-list {
    width: 100%;
    box-sizing: border-box;
    @media ${(props) => props.theme.tablet} {
      width: 100%;
    }
    @media ${(props) => props.theme.mobile} {
      width: 100%;
      margin-right: 1rem;
    }
  }
  .slick-arrow {
    background-color: ${(props) => props.theme.borderColor};
    border-radius: 50%;
  }
`;

const settings = {
  dots: true,
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "3rem",
  slidesToShow: 3,
  speed: 500,
};

function Home() {
  const state = useLocation();
  const { data, loading } = useQuery<AllItem>(ALL_ITEM);
  const [logInUser] = useMutation(MY_PROFILE, {
    refetchQueries: [{ query: ALL_ITEM }, "Item"],
  });
  const [viewCount] = useMutation(VIEW_COUNT, {
    refetchQueries: [{ query: ALL_ITEM }, "Item"],
  });
  const newItem = data?.item.filter((ele) => ele.sId > data?.item.length - 4);
  const mainBannerItem = data?.item.filter((ele) => ele.sId < 6);
  const token: string = window.localStorage.getItem("token") as string;

  function viewCountHandler(id: number) {
    viewCount({
      variables: {
        viewCountId: Number(id),
      },
    });
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/me`, {
          headers: {
            Authorization: token,
          },
        });
        window.localStorage.setItem("user_data", res.data);
        logInUser({
          variables: {
            userCode: res.data.userCode,
            kakaoId: String(res.data.kakaoId),
            kakaoProfileImg: res.data.kakaoProfileImg,
            kakaoNickname: res.data.kakaoNickname,
            kakaoEmail: res.data.kakaoEmail,
            userRole: res.data.userRole,
            createTime: res.data.createTime,
          },
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      {state.pathname === "/" ? (
        loading ? (
          <>
            <Loading />
          </>
        ) : (
          <Main>
            <Banner>
              {mainBannerItem?.map((ele) => (
                <BannerImgContentsArea
                  to={`/bestProduct/${ele?.sId}`}
                  key={ele?.sId}
                  onClick={() => {
                    viewCountHandler(ele?.sId);
                  }}
                >
                  <BannerImg
                    src={`/img/product/${ele?.mainBottomImg[0]}`}
                    alt={ele?.sTitle}
                  />
                  <ImgText>
                    {ele?.sTitle.split("\n").map((line, index: any) => (
                      <Title key={index}>
                        {line}
                        <br />
                      </Title>
                    ))}
                    {ele?.sContents.split("\n").map((line, index: any) => (
                      <Contents key={index}>
                        {line}
                        <br />
                      </Contents>
                    ))}
                  </ImgText>
                </BannerImgContentsArea>
              ))}
            </Banner>
            <NewItemWrap>
              <NewItem>
                <NewItemInner>
                  <NewItemTitle>???????????? ?????????</NewItemTitle>
                  <ItemImgSlider {...settings}>
                    {newItem?.map((item, index) => (
                      <ItemList
                        to={`/bestProduct/${item?.sId}`}
                        key={index}
                        onClick={() => {
                          viewCountHandler(item?.sId);
                        }}
                      >
                        <ItemImg src={`/img/product/${item?.slideImg[0]}`} />
                        <ItemName> {item?.sName}</ItemName>
                        <ItemPrice>{item?.sPrice}???</ItemPrice>
                      </ItemList>
                    ))}
                  </ItemImgSlider>
                </NewItemInner>
              </NewItem>
            </NewItemWrap>
          </Main>
        )
      ) : (
        <Outlet />
      )}
      <ScrollTopButton />
      <Footer />
    </>
  );
}

export default Home;
