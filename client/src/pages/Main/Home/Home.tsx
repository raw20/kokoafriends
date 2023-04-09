import { Outlet, useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import ScrollTopButton from "../../../components/Button/ScrollTopButton";
import Loading from "../../../components/Loading/Loading";
import useGetProducts from "./hooks/queries/useGetProducts";
import useCountView from "./hooks/mutations/useCountView";
import { MainContainer } from "./styles/Home.style";
import BannerSlide from "./BannerSlide";
import NewProducts from "./NewProducts";
import Category from "./Category";

function Home() {
  const state = useLocation();
  const { data, loading } = useGetProducts();
  const countViews = useCountView();
  if (loading) return <Loading />;

  return (
    <>
      <Header />
      {state.pathname === "/" ? (
        <MainContainer>
          <BannerSlide data={data} countViews={countViews} />
          <Category />
          <NewProducts data={data} countViews={countViews} />
        </MainContainer>
      ) : (
        <Outlet />
      )}

      <ScrollTopButton />
      <Footer />
    </>
  );
}

export default Home;
