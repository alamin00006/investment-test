"use client";
// import useUser from "@/hooks/useUser";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const SignIn = ({ setIsModalOpen, setSignIn }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passWordError: "",
  });

  const emailCheck = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, emailError: "" });
    } else {
      setError({ ...error, emailError: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const passwordCheck = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassWord = passwordRegex.test(e.target.value);
    if (validPassWord) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setError({ ...error, passWordError: "" });
    } else {
      setError({ ...error, passWordError: "Invalid Password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: userInfo?.email,
      password: userInfo?.password,
    };
    try {
      const data = await axios.post(
        "https://investment-server-a1qr.onrender.com/api/v1/users/login",
        userData
      );

      localStorage.setItem("token", data.data?.data?.token);
      toast.success("Login Success");
      setTimeout(() => setIsModalOpen(false), 500);
      window.location.reload();
      // router.push("/");
    } catch (error) {
      // console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  //  if(isLoading){
  //   return(<Loading></Loading>)
  //  }
  // useEffect(() => {
  //   if (!user?.email) {
  //     refetch();
  //   } else {
  //     // navigate("/");
  //   }
  // }, [refetch, token, user, isLoading, navigate]);
  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          onChange={emailCheck}
          className="form-control"
          placeholder="Enter Your Email"
          type="email"
          name="email"
          required
        />
        {error?.emailError && <p className="text-danger">{error.emailError}</p>}
      </div>
      {/* End email */}

      <div className="mb15">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          onChange={passwordCheck}
          className="form-control"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          required
        />
        {error?.passWordError && (
          <p className="text-danger">{error.passWordError}</p>
        )}
      </div>
      {/* End Password */}

      <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        <label className="custom_checkbox fz14 ff-heading">
          Remember me
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </label>
        <a className="fz14 ff-heading" href="#">
          Lost your password?
        </a>
      </div>
      {/* End  Lost your password? */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Sign in <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      {/* End submit */}

      <div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">OR</span>
      </div>

      <p
        className="dark-color text-center mb0 mt10"
        onClick={() => setSignIn(false)}
      >
        Not signed up?{" "}
        <span
          className="dark-color fw600"
          style={{
            cursor: "pointer",
            color: "#00C194",
          }}
        >
          Create an account
        </span>
      </p>
    </form>
  );
};

export default SignIn;
