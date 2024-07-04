import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v1/Header";

import SidebarDashboard from "@/components/common/navigarion-bar/SidebarDashboard";
import AssetsOverview from "@/components/pages/dashboard/dashboard-home/AssetsOverview";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardHome = () => {
  return (
    <div className="assets_overview">
      <Header />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
            <div className="col-lg-12">
              <div className="dashboard_title_area">
                <p
                  className="text"
                  style={{
                    color: "#066",
                  }}
                >
                  Earn 3% cashback for every referral.{" "}
                  <a
                    href="..."
                    style={{
                      textDecoration: "underline",
                    }}
                  >
                    Copy referral link
                  </a>
                </p>
              </div>
              <AssetsOverview />
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

export default DashboardHome;
