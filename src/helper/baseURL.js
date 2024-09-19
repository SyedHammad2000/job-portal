const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://job-portal-management.netlify.app" ||
      "https://bestfinder.netlify.app"
    : "http://localhost:3000";

export default baseURL;
