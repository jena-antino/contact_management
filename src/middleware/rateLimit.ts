import rateLimit from "express-rate-limit";

export const expressRateLimiter = rateLimit({
  windowMs: 1000 * 60, // 1 mins in milliseconds
  max: 30,
  handler: function (req, res, next) {
    res.status(429).json({ message: "You have exceeded the 175 requests in 1 minute!", status: 429 });
  },
  standardHeaders: true,
  legacyHeaders: false,
});
