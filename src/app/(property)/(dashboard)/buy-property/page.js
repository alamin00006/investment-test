import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v1/Header";
import MarketBanner from "@/components/home/home-v1/MarketBanner";
import ProperteyFiltering from "@/components/listing/PropertyFiltering";

import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import { getData } from "@/serverAPI/Property";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const BuyProperty = async () => {
  const projecAllData = await getData();
  return (
    <div className="buy_propertys">
      <Header />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
            <div className="col-lg-12 ">
              <div className="my-3">
                <MarketBanner />
              </div>

              {/* End Breadcumb Sections */}

              {/* Property Filtering */}
              <ProperteyFiltering projecAllData={projecAllData} />
            </div>
          </div>
        </div>
      </div>
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </div>
  );
};

export default BuyProperty;
