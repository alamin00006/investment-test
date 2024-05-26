import React from "react";

const ProjectManageInfo = ({ projectData }) => {
  return (
    <>
      <div className="row">
        <div className={`col-md-6 col-xl-12`}>
          <h4 className="title fz17 ">Management: </h4>
          <p
            style={{
              color: "black",
            }}
          >
            To optimize the returns, a professional management company has been
            appointed to manage the villa.
          </p>
        </div>
        <div className={`col-md-6 col-xl-12`}>
          <h4 className="title fz17">Exit Strategy: </h4>
          <p
            style={{
              color: "black",
            }}
          >
            To optimize the returns, a professional management company has been
            appointed to manage the villa.
          </p>
        </div>
      </div>

      {/* End col */}

      {/* End col */}
    </>
  );
};

export default ProjectManageInfo;
