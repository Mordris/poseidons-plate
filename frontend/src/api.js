import axios from "axios";

// Centralized Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000, // Set a timeout for requests
});

const handleError = (error) => {
  // Log error to an external service if needed
  console.error("API call failed:", error);
  throw new Error(error.response?.data?.message || "An error occurred");
};

export const createReservation = async (reservation) => {
  try {
    const response = await api.post("/api/reservations", reservation);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getReservations = async () => {
  try {
    const response = await api.get("/api/reservations");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};