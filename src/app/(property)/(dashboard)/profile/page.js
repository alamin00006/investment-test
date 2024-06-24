import React from "react";
import MobileMenu from "@/components/common/mobile-menu";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import Profile from "@/components/property/dashboard/profile/Profile";
import Footer from "@/components/common/default-footer";
import Header from "@/components/home/home-v1/Header";

const ProfilePage = () => {
  return (
    <div className="profile_page">
      <Header />
      <MobileMenu />

      <div className="dashboard pr30 pr0-xl container">
        <SidebarDashboard />

        <div className="dashboard__content mt-5">
          <div className="row pb40">
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
