import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v1/Header";
import SidebarDashboard from "@/components/common/navigarion-bar/SidebarDashboard";

import Referal from "@/components/pages/dashboard/dashboard-referal/Referal";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardReferal = () => {
  return (
    <div className="">
      <Header />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
            <div className="col-lg-12 ">
              <div className="dashboard_title_area">
                <h1 className="text">Refer and Earn!</h1>
                <h5>
                  Refer a friend and earn 3% cashback when they make their first
                  token purchase.
                </h5>
                <h5>Share your unique referral code now</h5>
              </div>
              <Referal />
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

export default DashboardReferal;
