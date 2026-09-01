const getBaseUrl = () => {
  // Configurable per environment; falls back to local dev.
  return import.meta.env.VITE_API_URL || "http://localhost:5000";
};
export default getBaseUrl;
