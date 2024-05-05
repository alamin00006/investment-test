import Explore from "@/components/common/Explore";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import CustomerReviews from "@/components/home/home-v1/CustomerReviews";
import CallToActions from "@/components/common/CallToActions";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import Header from "@/components/home/home-v1/Header";
import Partner from "@/components/common/Partner";
import PopularListings from "@/components/home/home-v1/PopularListings";
import PropertiesByCities from "@/components/home/home-v1/PropertiesByCities";
import Benifits from "@/components/home/home-v1/Benifits";
import Hero from "@/components/home/home-v1/hero";
import Image from "next/image";
import HolderBenifits from "@/components/common/HolderBenifits";
import Link from "next/link";
import TrustedWorld from "@/components/home/home-v1/TrustedWorld";
import ReturnCalculator from "@/components/home/home-v1/ReturnCalculator";
import RealStateCombines from "@/components/home/home-v1/RealStateCombines";
import StartBuying from "@/components/home/home-v1/StartBuying";

export const metadata = {
  title: "Home v1 || Homez - Real Estate NextJS Template",
};

const Home_V1 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V1 */}
      <section className="home-banner-style1 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}

          <a href="#explore-property">
            <div className="mouse_scroll animate-up-4">
              <Image
                width={20}
                height={105}
                src="/images/about/home-scroll.png"
                alt="scroll image"
              />
            </div>
          </a>
        </div>
      </section>
      {/* End Home Banner Style V1 */}

      {/* Explore Apartment */}
      <section
        className="pt0 pb90 pb10-md pt-5"
        style={{
          backgroundColor: "white",
          zIndex: 2,
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title">See How it Works </h2>
                <p className="paragraph">
                  Property ownership has never been easier
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Explore />
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Featured Listings */}
      <section className="bgc-f7">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Featured Properties</h2>
                <p className="paragraph">
                  We only select properties with the highest income potential
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-3-col">
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Featured Listings */}

      {/* Explore property-city */}
      <section className="pb40-md pb90">
        <div className="container investor_calculator">
          <h2 className="text-center mb-4">Return Calculator</h2>
          <ReturnCalculator />
        </div>
      </section>
      {/* End Explore property-city */}

      {/* Our Partners */}
      <section
        className="our-partners pt0"
        style={{ backgroundColor: " #F7F7F7" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h2
                  style={{
                    fontSize: "35px",
                    color: "#00C194",
                    textAlign: "center",
                    paddingTop: "30px",
                  }}
                >
                  Trusted by the world’s best
                </h2>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Our Testimonials */}
      <section className="pb100 pb50-md ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">
                  We are on a mission to democratize property ownership.
                </h2>
                <p className="paragraph">
                  90% of the worlds millionaires made their fortunes through
                  property, but it’s highly inaccessible, illiquid, and
                  complicated - that’s where we come in!
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Benifits />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Testimonials */}

      <section
        className="our-partners pt0"
        style={{ backgroundColor: " #F7F7F7" }}
      >
        <div className="container">
          <HolderBenifits />
        </div>
      </section>
      {/* Customer Review Start*/}
      <section id="explore-property" className="pb90 pb30-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2
                  className="title text-center"
                  style={{
                    color: "#00C194",
                  }}
                >
                  People Love Living with
                </h2>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="explore-apartment-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <CustomerReviews />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Review End */}

      <section
        id="explore-property"
        className="pb90 pb30-md"
        style={{
          backgroundColor: "#F7F7F7",
        }}
      >
        <div className="container">
          <div
            className="  text-center"
            style={
              {
                // margin: "0 200px",
              }
            }
          >
            <div className=" " data-aos="fade-up" data-aos-delay="300">
              <h2
                className=" "
                style={{
                  color: "#00C194",
                  fontSize: "36px",
                }}
              >
                Real estate combines the best of all asset classes
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                }}
              >
                It is one of the most important asset classes for building long-
                term wealth
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="explore-apartment-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <RealStateCombines />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Buying */}
      <StartBuying />
      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V1;
