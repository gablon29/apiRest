export const errorHandlers = (error, req, res, next) => {
  console.error(error.stack);
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  res.status(status).json({
    success: false,
    message,
  });
};
