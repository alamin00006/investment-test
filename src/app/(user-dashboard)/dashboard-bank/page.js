import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import SidebarDashboard from "@/components/common/navigarion-bar/SidebarDashboard";
import Header from "@/components/home/home-v1/Header";


import BankAccount from "@/components/pages/dashboard/bank-account/BankAccount";


export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardBank = () => {
  return (
    <div className="bank_account_page">
      <Header />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
            <div className="col-lg-12 ">
              <BankAccount />
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

export default DashboardBank;
