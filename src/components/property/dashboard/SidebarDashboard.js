"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const SidebarDashboard = () => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      // title: "MAIN",
      items: [
        {
          href: "/dashboard-home",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Assets Overview",
        },
        {
          href: "/buy-property",
          icon: (
            <AiOutlineHome
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Buy Properties",
        },
        {
          href: "/dashboard-referal",
          icon: (
            <IoShareSocialOutline
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Referrals",
        },
        {
          href: "/dashboard-transaction",
          icon: (
            <GrTransaction
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Transactions",
        },

        {
          href: "/rental-income-reports",
          icon: (
            <AiOutlineDollarCircle
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Rental Income Reports",
        },

        {
          href: "/withdraw-history",
          icon: (
            <MdOutlinePayments
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Withdrawal History",
        },
        {
          href: "/dashboard-bank",
          icon: (
            <HiOutlineBanknotes
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Bank Account",
        },
        {
          href: "/profile",
          icon: (
            <MdOutlineAccountCircle
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "My Account",
        },
        {
          href: "/login",
          icon: (
            <IoMdLogOut
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Logout",
        },
        // {
        //   href: "/pagination",

        //   text: "pagination",
        // },
      ],
    },
  ];

  return (
    <div
      className="dashboard__sidebar d-none d-lg-block"
      style={{
        backgroundColor: "#E7F6F6",
      }}
    >
      <div className="dashboard_sidebar_list ">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading ${
                sectionIndex === 0 ? "mt-0" : "mt30"
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item ">
                <Link
                  href={item.href}
                  className={`items-center   ${
                    pathname == item.href ? "-is-active" : ""
                  } `}
                >
                  {/* <i className={`${item.icon} mr15`} /> */}
                  <span className="mr15">{item.icon}</span>
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
