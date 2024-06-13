// components/CustomFileInput.js
import { serverBaseUrl } from "@/serverAPI/BaseUrl";
import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaCamera } from "react-icons/fa";
const CustomFileUpload = ({ investData }) => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };
  const handlePaymentProof = async () => {
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "rtemis");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dzakjyd9w/image/upload",
            data
          );

          const { secure_url } = uploadRes.data;
          return secure_url;
        })
      );

      const data = await axios.patch(
        `${serverBaseUrl}/invest/${investData?._id}`,
        list,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        onClick={handleButtonClick}
        style={customButtonStyle}
        className="ms-3"
      >
        <FaCamera
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      </button>
      <br />
      <div className="mt-3">
        <button
          onClick={handlePaymentProof}
          style={{
            border: "none",
            backgroundColor: "#00c194",
            color: "white",
            fontSize: "1rem",
            borderRadius: "5px",
            padding: "0 30px",
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

const customButtonStyle = {
  backgroundColor: "white",
  color: "#00c194",
  border: "1px dashed red",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default CustomFileUpload;
