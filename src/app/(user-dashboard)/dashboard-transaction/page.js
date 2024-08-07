import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v1/Header";

import SidebarDashboard from "@/components/common/navigarion-bar/SidebarDashboard";

import Transaction from "@/components/pages/dashboard/transaction/Transaction";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardTransaction = async () => {
  // const res = await fetch(`${serverBaseUrl}/transaction`, {
  //   cache: "no-store",
  // });
  // const data = await res.json();
  // console.log(data);

  return (
    <div className="dahsboard_transaction">
      <Header />
      <MobileMenu />
      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />
        <div className="dashboard__content mt-5">
          <div className="row pb40">
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
