const errorHandler = (err, req, res, next) => {
  if (!err) {
    return res.status(500).json({
      success: false,
      message: "Something went very wrong. Please try again later. Or never.", // if "very", it got stuck here
    });
  }
  console.error(err.stack); // print all for debug

  if (err.statusCode === 404) {
    return res.status(404).json({
      success: false,
      message: err.message || "Resource not found",
    });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message:
      err.message || "Something went wrong. Please try again later. Or never.",
  });
};

module.exports = errorHandler;
