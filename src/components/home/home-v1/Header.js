"use client";

import MainMenu from "@/components/common/navigarion-bar/MainMenu";
// import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { user, error, loading } = useUser();
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/");
    // window.location.reload();
  };
  return (
    <>
      <header
        className={`header-nav nav-homepage-style main-menu   ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
        style={{
          backgroundColor: "white",
        }}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={246}
                        height={44}
                        src="/images/home/Sharikana-logo.png"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        width={246}
                        height={44}
                        src="/images/home/Sharikana-logo.png"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <MainMenu />
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                {user?.data?.name ? (
                  <Dropdown>
                    <Dropdown.Toggle variant="#fff" id="dropdown-basic">
                      <CgProfile
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link href="/profile">{user?.data?.name}</Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <div
                    className="d-flex align-items-center"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <a
                      href="#"
                      className="login-info d-flex align-items-cente ud-btn"
                      role="button"
                      style={{
                        color: "white",
                        backgroundColor: "#00C194",
                      }}
                    >
                      <i
                        className="far fa-user-circle fz16 me-2"
                        style={{
                          color: "white",
                        }}
                      />{" "}
                      <span className="d-none d-xl-block">
                        Login / Register
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="signup-modal">
        <div className="modal fade">
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <LoginSignupModal
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
