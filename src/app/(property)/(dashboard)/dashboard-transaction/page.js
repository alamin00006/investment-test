import DashboardHeader from "@/components/common/DashboardHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";

import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";

import Transaction from "@/components/property/dashboard/transaction/Transaction";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardTransaction = () => {
  return (
    <div className="dahsboard_transaction">
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
                <h3
                  style={{
                    color: "#00A47E",
                  }}
                >
                  Transaction
                </h3>
              </div>
              <Transaction />
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

export default DashboardTransaction;
