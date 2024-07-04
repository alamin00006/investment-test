import { serverBaseUrl } from "./BaseUrl";

export const getData = async () => {
  const res = await fetch(`${serverBaseUrl}/project`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Property");
  }

  return res.json();
};
