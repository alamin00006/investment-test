import DefaultHeader from "@/components/common/DefaultHeader";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import MarketBanner from "@/components/home/home-v1/MarketBanner";
import ProperteyFiltering from "@/components/listing/PropertyFiltering";

export const metadata = {
  title: "Gird Full 3 Column || Homez - Real Estate NextJS Template",
};

const Market = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}

      <div className="my-3">
        <MarketBanner />
      </div>

      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <ProperteyFiltering />

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Market;
