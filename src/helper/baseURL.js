const baseURL =process.env.NODE_ENV === "production"
    ? "https://dynamic-sunflower-844e8b.netlify.app"
    : "http://localhost:3000";

export default baseURL;
