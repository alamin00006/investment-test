import { serverBaseUrl } from "@/serverAPI/BaseUrl";
import { useState, useEffect } from "react";
import useUser from "./useUser";

const useTransaction = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const res = await fetch(
          `${serverBaseUrl}/transaction/${user?.data?._id}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch transaction data");
        }
        const data = await res.json();
        setTransactionData(data?.transaction);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactionData();
  }, [user?.data?._id]);

  return { transactionData, error, loading };
};

export default useTransaction;
