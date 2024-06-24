import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v1/Header";
import MarketBanner from "@/components/home/home-v1/MarketBanner";
import ProperteyFiltering from "@/components/listing/PropertyFiltering";
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

      {/* Breadcumb Sections */}

      <div
        className="mb-3"
        style={{
          marginTop: "100px",
        }}
      >
        <MarketBanner />
      </div>

      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <ProperteyFiltering projecAllData={projecAllData} />

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Market;
