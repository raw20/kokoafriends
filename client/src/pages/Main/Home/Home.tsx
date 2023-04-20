import { Outlet, useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import ScrollTopButton from "../../../components/Button/ScrollTopButton";
import useGetHomeProducts from "../../../services/products/hooks/queries/useGetHomeProducts";
import useCountView from "../../../services/products/hooks/mutations/useCountView";
import { MainContainer } from "./styles/Home.style";
import BannerSlide from "./BannerSlide";
import NewProducts from "./NewProducts";
import Category from "./Category";
import FeedBack from "../../../components/SnackBar/FeedBack";
import { useEffect } from "react";
import { DIRECT_PRODUCT } from "../../../constant/storageKey";

function Home() {
  const state = useLocation();
  const { data } = useGetHomeProducts();
  const countViews = useCountView();

  useEffect(() => {
    if (state.pathname !== "/checkout") {
      localStorage.removeItem(DIRECT_PRODUCT);
    }
  }, [state.pathname]);

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
        <Outlet context={{ data }} />
      )}
      <FeedBack />
      <ScrollTopButton />
      <Footer />
    </>
  );
}

export default Home;
