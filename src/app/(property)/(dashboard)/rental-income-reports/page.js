import DashboardHeader from "@/components/common/DashboardHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import RentalIncome from "@/components/property/dashboard/RentalIncome/RentalIncome";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const RentalIncomeReports = () => {
  return (
    <div className="withdrawal_history_page">
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
              <RentalIncome />
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

export default RentalIncomeReports;
