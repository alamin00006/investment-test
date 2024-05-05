import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import AssetsOverview from "@/components/property/dashboard/dashboard-home/AssetsOverview";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardHome = () => {
  return (
    <div className="assets_overview">
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* dashboard_content_wrapper */}
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr30 pr0-xl">
          <SidebarDashboard />
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
            <div className="dashboard__content ">
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

            {/* <Footer /> */}
          </div>
          {/* End .dashboard__main */}
        </div>
      </div>
      {/* dashboard_content_wrapper */}
    </div>
  );
};

export default DashboardHome;
