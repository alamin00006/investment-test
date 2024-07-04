import React from "react";
import ProjectAddress from "./ProjectAddress";
const ProjectLocationLink = ({ projectData }) => {
  return (
    <div className="col-md-12">
      <div className="ps-widget bgc-white bdrs12 default-box-shadow2 overflow-hidden position-relative">
        <ProjectAddress projectData={projectData} />
      </div>
      <iframe
        className="position-relative bdrs12 mt30 h250"
        loading="lazy"
        src={projectData?.googleMapLink ? projectData?.googleMapLink : ""}
        // title={addresses[0].address}
        // aria-label={addresses[0].address}
      />
    </div>
  );
};

export default ProjectLocationLink;
