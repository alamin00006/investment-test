"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const PropertyGallery = ({ id, projectData }) => {
  return (
    <>
      <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={projectData?.projectPicture[0]}
                thumbnail={projectData?.projectPicture[0]}
                width={591}
                height={400}
              >
                {({ ref, open }) => (
                  <Image
                    src={projectData?.projectPicture[0]}
                    width={591}
                    height={400}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6">
          <div className="row">
            {projectData?.projectPicture.map((image, index) => (
              <div
                className="col-lg-12 col-md-12 col-sm-12 ps-sm-0"
                key={index}
              >
                <div className="sp-img-content">
                  <div
                    className={`popup-img preview-img-${index + 2} sp-img mb10`}
                  >
                    <Item
                      original={image}
                      thumbnail={image}
                      width={600}
                      height={500}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={274}
                          className="cover"
                          style={{
                            width: "100%",
                            height: "274px",
                          }}
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={image}
                          alt="Project Picture"
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
