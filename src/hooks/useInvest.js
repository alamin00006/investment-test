import { serverBaseUrl } from "@/serverAPI/BaseUrl";
import { useState, useEffect } from "react";
import useUser from "./useUser";

const useInvest = () => {
  const [investData, setLastInvestData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      if (!user?.data?._id) {
        setLoading(false);
        setError("No token provided");
        return;
      }

      try {
        const res = await fetch(`${serverBaseUrl}/invest/${user?.data?._id}`, {
          next: {
            revalidate: 2,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        setLastInvestData(data?.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [user?.data?._id]);

  return { investData, error, loading };
};

export default useInvest;
