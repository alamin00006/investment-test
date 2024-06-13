import DashboardHeader from "@/components/common/DashboardHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import AssetsOverview from "@/components/property/dashboard/dashboard-home/AssetsOverview";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardHome = () => {
  return (
    <div className="assets_overview">
      <DashboardHeader />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
            <div className="col-lg-12">
              <DboardMobileNavigation />
            </div>

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
