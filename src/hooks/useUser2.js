import { useState, useEffect } from "react";
import { serverBaseUrl } from "./BaseUrl";

export const getUserData = async () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setToken(token ? token : null);
  }, []);

  try {
    const res = await fetch(`${serverBaseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }

    return res.json();
  } catch (error) {
    // console.error("Error fetching data:", error.message);
    throw error;
  }
};
