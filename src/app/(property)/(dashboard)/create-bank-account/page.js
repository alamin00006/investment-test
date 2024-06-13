import React from "react";
import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";

import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import CreateBankAccount from "@/components/property/dashboard/bank-account/CreateBankAccount";

import "./CreateBAccount.css"; // Import your CSS file for styling
import Footer from "@/components/common/default-footer";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const CreateBAccount = () => {
  return (
    <div className="buy_propertys">
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
              <div className="my-3">
                <h2 className="text-center">Bank Account</h2>
              </div>
              <CreateBankAccount />
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

export default CreateBAccount;
