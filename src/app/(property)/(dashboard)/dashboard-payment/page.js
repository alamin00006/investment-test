import DashboardHeader from "@/components/common/DashboardHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import PaymentSummary from "@/components/property/dashboard/Payment/PaymentSummary";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import { MdKeyboardBackspace } from "react-icons/md";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardPayment = () => {
  return (
    <div className="dashboard_payment">
      <DashboardHeader />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
            <div className="col-lg-12">
              <DboardMobileNavigation />
            </div>
            <div className="col-lg-12 ">
              <div className="dashboard_title_area">
                <p
                  className="text mb-5"
                  style={{
                    color: "#066",
                  }}
                >
                  <MdKeyboardBackspace
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                  Back
                </p>
              </div>

              <PaymentSummary />
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

export default DashboardPayment;
