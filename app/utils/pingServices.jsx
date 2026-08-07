const RENDER_SERVICES = [
  "https://gym-tracker-frontend-5kdd.onrender.com",
  "https://hotel-reservation-manager-k6p4.onrender.com",
  "https://movie-api-n4si.onrender.com",
];

export const wakeUpServices = () => {
  RENDER_SERVICES.forEach((url) => {
    fetch(url, { method: "GET", mode: "no-cors" })
      .then(() => console.log(`[Warm Up] Ping sent to ${url}`))
      .catch((err) => console.error(`[Warm Up] Failed to ping ${url}`, err));
  });
};
