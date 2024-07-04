import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import Header from "@/components/home/home-v1/Header";
import MarketBanner from "@/components/home/home-v1/MarketBanner";
import { getData } from "@/serverAPI/Property";

export const metadata = {
  title: "Gird Full 3 Column || Homez - Real Estate NextJS Template",
};

const Market = async () => {
  const projecAllData = await getData();
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      <div
        className="mb-3"
        style={{
          marginTop: "100px",
        }}
      >
        <MarketBanner />
      </div>

      {/* Property Filtering */}
      <div className="container">
        <div className="row ">
          <FeaturedListings data={projecAllData?.data} />
        </div>
      </div>

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Market;
