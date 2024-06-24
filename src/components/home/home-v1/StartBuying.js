import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartBuying = () => {
  return (
    <div
      className="container d-flex justify-content-between"
      style={{
        marginTop: "90px",
        // marginBottom: "90px",
      }}
    >
      <div>
        <h2
          className=""
          style={{
            fontSize: "36px",
          }}
        >
          Are you ready to invest now ?
        </h2>
        <p>We only work with the best Investors</p>
        <Link href="/marketplace">
          <button
            style={{
              borderRadius: "12px",
              border: "1px solid #00C194",
              background: " #00C194",
              color: "white",
              padding: "5px 20px",
            }}
          >
            Explore here
          </button>
        </Link>
      </div>
      <div
        style={{
          marginTop: "-150px",
          zIndex: 2,
        }}
      >
        {" "}
        <Image
          width={255}
          height={415}
          src="/images/home/man-person.png"
          alt="scroll image"
        />
      </div>
    </div>
  );
};

export default StartBuying;
