"use client";

import MainMenu from "@/components/common/MainMenu";
import useUser from "@/hooks/useUser";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";

const DashboardHeader = () => {
  const { user, error, loading } = useUser();
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <>
      <header className="header-nav nav-homepage-style light-header position-fixed menu-home4 main-menu">
        <nav className="posr">
          <div className="container pr30 pr15-xs pl30 posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-start d-flex align-items-center">
                  <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                    <Link className="logo" href="/">
                      <Image
                        width={138}
                        height={44}
                        src="/images/home/Sharikana-logo.png"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* End .col-auto */}

              <div className="d-none d-lg-block col-lg-auto">
                <MainMenu />
              </div>

              <div className="col-6 col-lg-auto">
                <div className="">
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
                    ""
                  )}
                </div>
              </div>
              {/* End .col-6 */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}
    </>
  );
};

export default DashboardHeader;
