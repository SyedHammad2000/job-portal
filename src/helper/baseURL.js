const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://bestfinder.netlify.app"
    : "http://localhost:3000";

export default baseURL;
