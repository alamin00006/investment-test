import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v1/Header";
import InvestmentSummary from "@/components/pages/dashboard/Investment/InvestmentSummary";
import SidebarDashboard from "@/components/common/navigarion-bar/SidebarDashboard";
import { serverBaseUrl } from "@/serverAPI/BaseUrl";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardInvestment = async ({ params }) => {
  const res = await fetch(`${serverBaseUrl}/project/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const projectData = data?.data;

  return (
    <div className="dashboard_investement">
      <Header />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className=" pt-5 px-2 mt-5">
          <div className="row pb40">
            <div className="col-lg-12 ">
              <InvestmentSummary projectData={projectData} />
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

export default DashboardInvestment;
