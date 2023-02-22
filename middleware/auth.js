const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "randoeee");
    const userId = decodedToken.userId;
    req.auth = {
      userdId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
