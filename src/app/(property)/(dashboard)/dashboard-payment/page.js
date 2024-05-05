import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import InvestmentSummary from "@/components/property/dashboard/Investment/InvestmentSummary";
import PaymentSummary from "@/components/property/dashboard/Payment/PaymentSummary";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import { MdKeyboardBackspace } from "react-icons/md";
import Referal from "@/components/property/dashboard/dashboard-referal/Referal";
import Image from "next/image";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardPayment = () => {
  return (
    <div className="dashboard_payment">
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

            {/* <Footer /> */}
          </div>
          {/* End .dashboard__main */}
        </div>
      </div>
      {/* dashboard_content_wrapper */}
    </div>
  );
};

export default DashboardPayment;
