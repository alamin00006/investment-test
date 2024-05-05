import React from "react";
import PropertyAddress from "./PropertyAddress";
import AllReviews from "./reviews";
import Test from "./Test";

const ProperytyDescriptions = () => {
  return (
    <>
      <div className="col-md-12">
        <div className="navtab-style1">
          <nav>
            <div className="nav nav-tabs mb20" id="nav-tab2" role="tablist">
              <button
                className="nav-link fw600 active"
                id="nav-item1-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item1"
                type="button"
                role="tab"
                aria-controls="nav-item1"
                aria-selected="true"
              >
                Details
              </button>
              <button
                className="nav-link fw600"
                id="nav-item2-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item2"
                type="button"
                role="tab"
                aria-controls="nav-item2"
                aria-selected="false"
              >
                Financials
              </button>
              <button
                className="nav-link fw600"
                id="nav-item3-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item3"
                type="button"
                role="tab"
                aria-controls="nav-item3"
                aria-selected="false"
              >
                Documents
              </button>
              <button
                className="nav-link fw600"
                id="nav-item4-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item4"
                type="button"
                role="tab"
                aria-controls="nav-item4"
                aria-selected="false"
              >
                Market
              </button>
              <button
                className="nav-link fw600"
                id="nav-item5-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item5"
                type="button"
                role="tab"
                aria-controls="nav-item5"
                aria-selected="false"
              >
                Timeline
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-item1"
              role="tabpanel"
              aria-labelledby="nav-item1-tab"
            >
              <h6>About the Property</h6>

              <p className="text">
                This property is set on 1,500 sqm of land and offers 1,000 sqm
                of living space with 500 sqm of private jungle. The enclosed &
                fully air-conditioned living area is light-flooded with large
                glass panel windows and sliding doors and offers adjacent dining
                to a fully equipped western kitchen. All 4 bedrooms enjoy a
                spacious layout with inbuilt wardrobes and private en-suite
                bathrooms. The highlight is a 16-meter-long infinity swimming
                pool with a sunken poolside lounge and terrace with sun
                loungers. Villa The Kayu was completed in April 2023. The villa
                is built on 1,500 sqm of land with a leasehold that expires on
                the 1st of May 2053 (~30 years). This new modern 4-bedroom villa
                is conveniently located in a quiet residential area, centrally
                located north of Ubud palace, which is only a short 5 minute
                drive away from Ubud’s cultural centre and many cafes and
                restaurants are nearby. This property is set on 1,500 sqm of
                land and offers 1,000 sqm of living space with 500 sqm of
                private jungle. The enclosed & fully air-conditioned living area
                is light-flooded with large glass panel windows and sliding
                doors and offers adjacent dining to a fully equipped western
                kitchen. All 4 bedrooms enjoy a spacious layout with inbuilt
                wardrobes and private en-suite bathrooms. The highlight is a
                16-meter-long infinity swimming pool with a sunken poolside
                lounge and terrace with sun loungers. This villa is a
                commercially viable property with amenities and design features
                that maximize rental yields while also possessing the
                functionality and comforts of a home. It is perfectly suitable
                for short-term rentals and people looking for longer-term stays.
                Management: To optimize the returns, a professional management
                company has been appointed to manage the villa. Exit strategy:
                The villa will be sold once the leasehold reaches 25 years (May
                2028)
              </p>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Address</h4>
                <div className="row">
                  <PropertyAddress />
                </div>
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  {/* <AllComments /> */}
                  <AllReviews />
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-item2"
              role="tabpanel"
              aria-labelledby="nav-item2-tab"
            >
              <h5>Asset Value</h5>
              <hr />
              <div className="row">
                <div className="col-lg-4">
                  <h6>Total Investment value :</h6>
                </div>
                <div className="col-lg-4">
                  <h6>BDT</h6>
                </div>
                <div className="col-lg-4">
                  <h6>6,924510,000</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-4">
                  <h6>Underlying asset price :</h6>
                </div>
                <div className="col-lg-4">
                  <h6>BDT</h6>
                </div>
                <div className="col-lg-4">
                  <h6>6,924510,000</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-4">
                  <h6>Notary fee (0.75%) :</h6>
                </div>
                <div className="col-lg-4">
                  <h6>BDT</h6>
                </div>
                <div className="col-lg-4">
                  <h6>6,924510,000</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-4">
                  <h6>Rtemis fee (5%):</h6>
                </div>
                <div className="col-lg-4">
                  <h6>BDT</h6>
                </div>
                <div className="col-lg-4">
                  <h6>6,924510,000</h6>
                </div>
              </div>
              <h5>Annual Return</h5>
              <hr />
              <div className="row">
                <div className="col-lg-7">
                  <h6>Total annual return :</h6>
                </div>
                <div className="col-lg-5">
                  <h6>13%</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-7">
                  <h6>Project annual rental yield :</h6>
                </div>
                <div className="col-lg-5">
                  <h6>11%</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-7">
                  <h6>Project annual capital appreciation :</h6>
                </div>
                <div className="col-lg-5">
                  <h6>2%</h6>
                </div>
              </div>
              <hr />
            </div>
            <div
              className="tab-pane fade"
              id="nav-item3"
              role="tabpanel"
              aria-labelledby="nav-item3-tab"
            >
              {" "}
              Villa The Kayu was completed in April 2023. The villa is built on
              1,500 sqm of land with a leasehold that expires on the 1st of May
              2053 (~30 years). This new modern 4-bedroom villa is conveniently
              located in a quiet residential area, centrally located north of
              Ubud palace, which is only a short 5 minute drive away from Ubud’s
              cultural centre and many cafes and restaurants are nearby.
            </div>
            <div
              className="tab-pane fade"
              id="nav-item4"
              role="tabpanel"
              aria-labelledby="nav-item4-tab"
            >
              <h6>About the market:</h6>
              <p>
                The Bali property market is one of the most sought-after when it
                comes to property investment. Now that the pandemic is well
                behind us, property investors can look forward to increasing
                demand, which will continue to grow along with the number of
                tourists that visit the island.
              </p>
              <h6>About Ubud:</h6>
              <p>
                The Ubud property market in Bali, has been an attractive
                destination for property investment for many years. Ubud is
                known for its stunning natural beauty, rich cultural heritage,
                and serene environment, which has drawn both local and
                international tourists to the area. Ubud has experienced a
                steady demand for properties due to its popularity among
                tourists, artists, and those seeking a tranquil lifestyle
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-item5"
              role="tabpanel"
              aria-labelledby="nav-item5-tab"
            >
              <Test />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
