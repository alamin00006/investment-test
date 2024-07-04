import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import PropertyHeader from "@/components/pages/projectDetails/PropertyHeader";

import ProjectMonthlyReturnChart from "@/components/pages/projectDetails/projectMonthlyReturnChart/ProjectMonthlyReturnChart";
import ProperytyDescriptions from "@/components/pages/projectDetails/ProperytyDescriptions";

import PropertyGallery from "@/components/pages/projectDetails/PropertyGallery";

import { serverBaseUrl } from "@/serverAPI/BaseUrl";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import { getData } from "@/serverAPI/Property";
import DetailsRightSide from "@/components/pages/projectDetails/DetailsRightSide";
import Header from "@/components/home/home-v1/Header";

export const metadata = {
  title: "Property Single V1 || Homez - Real Estate NextJS Template",
};

const ProjectDetails = async ({ params }) => {
  const res = await fetch(`${serverBaseUrl}/project/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const projectData = data?.data;

  const projecAllData = await getData();

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Property All Single V1 */}
      <section className="pt60 pb90 bgc-f7">
        <div className="container">
          {/* End .row */}

          <div className="row mb30 mt30">
            <PropertyGallery id={params.id} projectData={projectData} />
          </div>
          {/* End .row */}

          <div className="row">
            <PropertyHeader id={params.id} projectData={projectData} />
          </div>

          <div className="row wrap mt-3">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  <ProjectMonthlyReturnChart />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <ProperytyDescriptions projectData={projectData} />

                {/* End property description */}
              </div>
            </div>
            {/* End .col-8 */}

            <div className="col-lg-4">
              <div className="column">
                <div
                  style={{
                    background: "#E6EBEF",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                >
                  <div className="row p-2">
                    <meter value={0} max={projectData?.totalProjectValue} />

                    <div className="col-lg-4">
                      <span className="fs-5 text-thm">10%</span>
                    </div>
                    <div className="col-lg-8 text-end">
                      {" "}
                      <span>
                        {projectData?.totalProjectValue?.toLocaleString()}/
                        {projectData?.totalProjectValue} left
                      </span>
                    </div>
                  </div>
                </div>
                <div className="default-box-shadow1 bdrs12  p30 mb30-md bgc-white position-relative">
                  <DetailsRightSide projectData={projectData} />
                </div>
                {/* End .Schedule a tour */}
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="mb-4">
                <h3 className="">Discover Our Other Projects</h3>
              </div>
            </div>
            {/* End header */}

            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <FeaturedListings data={projecAllData?.data} />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default ProjectDetails;
