import React from "react";
import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import Profile from "@/components/property/dashboard/profile/Profile";
import Footer from "@/components/common/default-footer";

const ProfilePage = () => {
  return (
    <div className="profile_page">
      <DashboardHeader />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
            <div className="col-lg-12">
              <DboardMobileNavigation />
            </div>

            <div className="pb-4">
              <div className="dashboard_title_area">
                <h2 className="text">My Profile</h2>
              </div>
            </div>

            <div>
              <Profile />
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

export default ProfilePage;
