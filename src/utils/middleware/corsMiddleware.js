const allowedOrigins = [
  "https://job-portal-chi-taupe.vercel.app",
  "https://job-portal-davj.vercel.app",
  "https://job-portal-management.netlify.app",
];

export const corsMiddleware = (handler) => async (req, res) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // Handle preflight requests
  }

  return handler(req, res); // Continue to the next handler
};
