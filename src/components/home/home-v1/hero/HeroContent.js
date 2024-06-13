"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import "./heroContent.css"; // Import the custom CSS file

const HeroContent = () => {
  const router = useRouter();

  return (
    <div className="advance-search-tab animate-up-3">
      <Container fluid>
        <Row>
          <Col lg={6} style={{ textAlign: "left" }}>
            <h3
              className="text-white"
              style={{
                marginTop: "70px",
              }}
            >
              Earn up to 10% per year by investing in rental Projects.
            </h3>
            <Button>Get Started</Button>
          </Col>
          <Col lg={6} className="banner_left_part d-none d-md-block d-lg-block">
            <Row>
              <Col lg={6} className="slide_1">
                <Marquee direction="down" autoFill={true}>
                  <div className="mt-2 rounded-lg">
                    <Image
                      width={230}
                      height={80}
                      src="/images/home/slideImg1.png"
                      alt="Pic"
                    />
                  </div>
                  <div className="mt-2 rounded-lg">
                    <Image
                      width={230}
                      height={340}
                      src="/images/home/slideImg2.png"
                      alt="Pic"
                    />
                  </div>
                </Marquee>
              </Col>
              <Col lg={6} className="slide_2" style={{ paddingLeft: "24px" }}>
                <Marquee direction="up" autoFill={true}>
                  <div className="mb-2 rounded-lg">
                    <Image
                      width={230}
                      height={80}
                      src="/images/home/slideImg1.png"
                      alt="Pic"
                    />
                  </div>
                  <div className="mb-2 rounded-lg">
                    <Image
                      width={230}
                      height={340}
                      src="/images/home/slideImg2.png"
                      alt="Pic"
                    />
                  </div>
                </Marquee>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroContent;
