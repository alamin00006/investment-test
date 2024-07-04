import { serverBaseUrl } from "@/serverAPI/BaseUrl";
import { useState, useEffect } from "react";
import useUser from "./useUser";

const useUserAllInvest = () => {
  const [userAllInvestment, setUserAllInvestment] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchInvestmentData = async () => {
      try {
        const res = await fetch(
          `${serverBaseUrl}/investment/${user?.data?._id}/all`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch investment data");
        }
        const data = await res.json();
        setUserAllInvestment(data?.investments);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentData();
  }, [user?.data?._id]);

  return { userAllInvestment, error, loading };
};

export default useUserAllInvest;
