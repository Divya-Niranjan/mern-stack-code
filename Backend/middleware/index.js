const jwt = require("jsonwebtoken");


exports.requireSignin = (req, res, next) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization) {
    const auth = req.headers.authorization.split(" ");
    if (auth[0] == "Bearer") {
      const user = jwt.verify(auth[1], "my-secret-key" );
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(400).json({ message: "Not authorized" });
      }
    }
  } else {
    return res.status(400).json({ message: "Not authorized" });
  }
};

  