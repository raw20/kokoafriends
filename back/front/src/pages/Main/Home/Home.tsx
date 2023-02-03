import { Outlet, useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../../components/Footer/Footer";
import ScrollTopButton from "../../../components/Button/ScrollTopButton";
import Loading from "../../../components/Loading/Loading";
import useGetProducts from "./hooks/queries/useGetProducts";
import useCountView from "./hooks/mutations/useCountView";
import { MainContainer } from "./styles/Home.style";
import BannerSlide from "./BannerSlide";
import NewProjuctsSlide from "./NewProjuctsSlide";

//const token: string = window.localStorage.getItem("token") as string;

function Home() {
  const state = useLocation();
  const { data, loading } = useGetProducts();
  const countView = useCountView();
  if (loading) return <Loading />;

  return (
    <>
      <Header />
      {state.pathname === "/" ? (
        <MainContainer>
          <BannerSlide data={data} countView={countView} />
          <NewProjuctsSlide data={data} countView={countView} />
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
