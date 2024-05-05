import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import CreateBankAccount from "@/components/property/dashboard/bank-account/CreateBankAccount";

import Referal from "@/components/property/dashboard/dashboard-referal/Referal";
import Withdraw from "@/components/property/dashboard/withdraw/Withdraw";
import WithdrawHistory from "@/components/property/dashboard/withdraw/WithdrawHistory";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const CreateBAccount = () => {
  return (
    <div className="create_bank_account">
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
                    <h2 className="text">Bank Account</h2>
                  </div>
                  <CreateBankAccount />
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

export default CreateBAccount;
