import Image from "next/image";
import React from "react";
const Test = () => {
  return (
    <div className="uk-container uk-padding">
      <div className="uk-timeline">
        <div className="uk-timeline-item">
          <div className="uk-timeline-icon">
            <span className="uk-badge">
              <span uk-icon="check" />
            </span>
          </div>
          <div className="uk-timeline-content">
            <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
              <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle">
                  <div className="uk-grid-main-div">
                    <div className="uk-grid-main-div-img">
                      <Image
                        width={50}
                        height={50}
                        src="/images/icon/Group 14.png"
                        alt="Header Logo"
                      />
                    </div>
                    <div>
                      <h3 className="uk-card-title">
                        <time dateTime="2020-07-06">
                          Expected first rental payment
                        </time>
                      </h3>
                      <span className="uk-label uk-label-danger uk-margin-auto-left">
                        The first rental payment for this property is projected
                        to be paid to investors by 21 November 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-timeline-item">
          <div className="uk-timeline-icon">
            <span className="uk-badge">
              <span uk-icon="check" />
            </span>
          </div>
          <div className="uk-timeline-content">
            <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
              <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle">
                  <div className="uk-grid-main-div">
                    <div className="uk-grid-main-div-img">
                      <Image
                        width={50}
                        height={50}
                        src="/images/icon/Group 14.png"
                        alt="Header Logo"
                      />
                    </div>
                    <div>
                      <h3 className="uk-card-title">
                        <time dateTime="2020-07-06">
                          Property available for rental
                        </time>
                      </h3>
                      <span className="uk-label uk-label-danger uk-margin-auto-left">
                        Property will start generation income
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-timeline-item">
          <div className="uk-timeline-icon">
            <span className="uk-badge">
              <span uk-icon="check" />
            </span>
          </div>
          <div className="uk-timeline-content">
            <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
              <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle">
                  <div className="uk-grid-main-div">
                    <div className="uk-grid-main-div-img">
                      <Image
                        width={50}
                        height={50}
                        src="/images/icon/Group 14.png"
                        alt="Header Logo"
                      />
                    </div>
                    <div>
                      <h3 className="uk-card-title">
                        <time dateTime="2020-07-06">
                          Property was acquired by Rtemis
                        </time>
                      </h3>
                      <span className="uk-label uk-label-danger uk-margin-auto-left">
                        PT. Property Gotong Royong acquired the property
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-timeline-item">
          <div className="uk-timeline-icon">
            <span className="uk-badge">
              <span uk-icon="check" />
            </span>
          </div>
          <div className="uk-timeline-content">
            <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
              <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle">
                  <div className="uk-grid-main-div">
                    <div className="uk-grid-main-div-img">
                      <Image
                        width={50}
                        height={50}
                        src="/images/icon/Group 14.png"
                        alt="Header Logo"
                      />
                    </div>
                    <div>
                      <h3 className="uk-card-title">
                        <time dateTime="2020-07-06">
                          Intent to purchase signed
                        </time>
                      </h3>
                      <span className="uk-label uk-label-danger uk-margin-auto-left">
                        Goro signed intent to purchase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
