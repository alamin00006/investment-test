import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v1/Header";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";

import WithdrawHistory from "@/components/property/dashboard/withdraw/WithdrawHistory";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const WithdrawHistoryPage = () => {
  return (
    <div className="withdrawal_history_page">
      <Header />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
            <div className="col-lg-12 ">
              <WithdrawHistory />
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

export default WithdrawHistoryPage;
