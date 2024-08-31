const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://job-portal-2024.vercel.app"
    : "http://localhost:3000";

export default baseURL;
