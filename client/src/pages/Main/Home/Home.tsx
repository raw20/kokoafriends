import { Outlet, useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import ScrollTopButton from "../../../components/Button/ScrollTopButton";
import Loading from "../../../components/Loading/Loading";
import useGetHomeProducts from "../../../services/products/hooks/queries/useGetHomeProducts";
import useCountView from "../../../services/products/hooks/mutations/useCountView";
import { MainContainer } from "./styles/Home.style";
import BannerSlide from "./BannerSlide";
import NewProducts from "./NewProducts";
import Category from "./Category";

function Home() {
  const state = useLocation();
  const { data, loading } = useGetHomeProducts();
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
