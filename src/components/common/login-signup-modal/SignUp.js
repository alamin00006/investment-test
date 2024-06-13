import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import toast from "react-hot-toast";

const SignUp = ({ setSignIn }) => {
  const router = useRouter();
  // const [user, refetch, isLoading] = useUser();
  // const token = localStorage.getItem("token");
  const [name, setName] = useState();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passWordError: "",
  });

  //   const [token] = useToken(user)
  // const navigate = useNavigate();
  // const location = useLocation();

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

  const confirmPasswordCheck = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setError({ ...error, passWordError: "" });
    } else {
      setError({ ...error, passWordError: "dont Match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: userInfo?.email,
      password: userInfo?.password,
    };
    try {
      await axios.post("http://localhost:5000/api/v1/users/signup", userData);
      // router.push("/login");
      toast.success("Succefully Account Created");
      setSignIn(true);
    } catch (error) {
      return toast.error(error?.response?.data?.message);
    }
  };

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
        <label className="form-label fw600 dark-color">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Enter Your Name"
          type="text"
          name="name"
          required
        />
      </div>
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
      {/* End Email */}

      <div className="mb20">
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
      <div className="mb20">
        <label className="form-label fw600 dark-color">Confirm Password</label>
        <input
          onChange={confirmPasswordCheck}
          className="form-control"
          type="password"
          placeholder="Enter Your Password"
          name="confirmPassword"
          required
        />
      </div>
      {/* End Password */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Create account <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      <div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">OR</span>
      </div>

      <p
        className="dark-color text-center mb0 mt10"
        onClick={() => setSignIn(true)}
      >
        Already Have an Account?{" "}
        <span
          className="dark-color fw600"
          style={{
            cursor: "pointer",
            color: "#00C194",
          }}
        >
          Login
        </span>
      </p>
    </form>
  );
};

export default SignUp;
