import styled from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";
import { AllItem } from "../interface/dataType";
import Header from "../components/header/Header";
import { ItemName, ItemPrice } from "../components/gnb/BestProductItem";
import Slider from "react-slick";
import { useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../auth/OAuth";
import Footer from "../components/footer/Footer";

const ALL_ITEM = gql`
  query {
    item {
      id
      title
      slideImg
      mainBottomImg
      contents
      name
      price
      view
    }
    allUser {
      kakaoId
      name
    }
    aboutMe {
      kakaoId
      name
    }
  }
`;

const ADD_USER = gql`
  mutation Mutation($kakaoId: String!, $name: String!) {
    addUser(kakaoId: $kakaoId, name: $name) {
      kakaoId
      name
    }
  }
`;
const Main = styled.div`
  width: 100%;
  height: auto;
`;
const Banner = styled.div`
  width: 50%;
  height: auto;
  margin: 1.5rem auto;
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
`;
const Title = styled.h1`
  width: 100%;
  height: auto;
  line-height: auto;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.bgColor};
`;
const Contents = styled.p`
  width: 100%;
  height: auto;
  line-height: auto;
  font-size: 1.3rem;
  color: ${(props) => props.theme.bgColor};
  font-weight: 600;
  margin-top: 15px;
`;
const NewItem = styled(Banner)`
  margin: 4.5rem auto;
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
  width: 350px;
  height: 350px;
`;

const ItemImgSlider = styled(Slider)`
  width: 100%;
  height: auto;
  .slick-list {
    width: 100%;
    box-sizing: border-box;
  }
`;
const settings = {
  dots: true,
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "3rem",
  slidesToShow: 2,
  speed: 500,
};

function Home() {
  const state = useLocation();
  const [addUser] = useMutation(ADD_USER);
  const { data } = useQuery<AllItem>(ALL_ITEM);
  const mainBannerItem = data?.item.filter((ele) => ele.id < 6);
  const token: string = window.localStorage.getItem("token") as string;
  const newItem = data?.item.filter((ele) => ele.id > data?.item.length - 4);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/me`, {
          headers: {
            Authorization: token,
          },
        });
        window.localStorage.setItem("user_data", res.data);

        function AddUser() {
          addUser({
            variables: {
              kakaoId: String(res.data.kakaoId),
              name: res.data.kakaoNickname,
            },
          });
        }
        AddUser();
      } catch (e) {
        console.error(e);
      }
    })();
  }, [addUser, data?.allUser, token]);
  return (
    <>
      <Header />
      {state.pathname === "/" ? (
        <Main>
          <Banner>
            {mainBannerItem?.map((ele) => (
              <BannerImgContentsArea
                to={`/bestProduct/${ele?.id}`}
                key={ele?.id}
              >
                <BannerImg
                  src={`/img/product/${ele?.mainBottomImg[0]}`}
                  alt={ele?.title}
                />
                <ImgText>
                  {ele?.title.split("\n").map((line, index) => (
                    <Title key={index}>
                      {line}
                      <br />
                    </Title>
                  ))}
                  {ele?.contents.split("\n").map((line, index) => (
                    <Contents key={index}>
                      {line}
                      <br />
                    </Contents>
                  ))}
                </ImgText>
              </BannerImgContentsArea>
            ))}
          </Banner>
          <NewItem>
            <NewItemTitle>새로나온 친구들</NewItemTitle>
            <ItemImgSlider {...settings}>
              {newItem?.map((item, index) => (
                <ItemList to={`/bestProduct/${item?.id}`} key={index}>
                  <ItemImg src={`/img/product/${item?.slideImg[0]}`} />
                  <ItemName> {item?.name}</ItemName>
                  <ItemPrice>{item?.price}원</ItemPrice>
                </ItemList>
              ))}
            </ItemImgSlider>
          </NewItem>
        </Main>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
}

export default Home;
