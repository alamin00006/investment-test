import React from "react";

const ProjectLocationLink = ({ projectData }) => {
  return (
    <div className="col-md-12">
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
