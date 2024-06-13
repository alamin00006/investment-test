"use client";
import { Toaster } from "react-hot-toast";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const LoginSignupModal = ({ setIsModalOpen, isModalOpen }) => {
  const handleClose = () => setIsModalOpen(false);
  const [singIn, setSignIn] = useState(true);

  return (
    <>
      <Modal
        show={isModalOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Welcome to Sharikan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="log-reg-form">
            <div className="">
              <nav>
                <div className="mb20 d-flex gap-2">
                  <button
                    className="nav-link active fw600"
                    onClick={() => setSignIn(true)}
                    style={{
                      border: "1px solid #00C194",
                      backgroundColor: singIn ? "#00C194" : "transparent",
                      color: singIn ? "white" : "black",
                      fontSize: "1rem",
                      borderRadius: "5px",
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    className="nav-link fw600"
                    style={{
                      border: "1px solid #00C194",
                      backgroundColor: !singIn ? "#00C194" : "transparent",
                      color: !singIn ? "white" : "black",
                      fontSize: "1rem",
                      borderRadius: "5px",
                    }}
                    onClick={() => setSignIn(false)}
                  >
                    New Account
                  </button>
                </div>
              </nav>
              {/* End nav tab items */}

              <div>
                {singIn ? (
                  <SignIn
                    setSignIn={setSignIn}
                    setIsModalOpen={setIsModalOpen}
                  />
                ) : (
                  <SignUp setSignIn={setSignIn} />
                )}

                {/* End signin content */}

                {/* End signup content */}
              </div>
            </div>
          </div>
        </Modal.Body>

        <Toaster position="top-center" reverseOrder={false} />
      </Modal>

      {/* End header */}
    </>
  );
};

export default LoginSignupModal;
