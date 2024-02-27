const { Secret, sign, verify } = require("jsonwebtoken");

const secret_code = "banane";

class Middleware {
    async checkToken(req, token, res) {
      if (req.originalUrl !== "/login" &&
        req.originalUrl !== "/registration" && 
        req.originalUrl !== "/login.employe")
      {
          if (!token) {
              res.status(401).json({ message: "Session expired" });
          } else {
              try {
                const check = verify(token, secret_code);
              } catch (error) {
                throw error;
              }
          }
        } else {
            console.log("next function");
        }
    }

  createToken(user) {
    try {
      const token = sign({ data: user }, secret_code, { expiresIn: 2400 });
      return token;
    } catch (error) {
      throw error;
    }
  }

  checking(req, res, next) {
    if (
      req.method !== "OPTIONS"
    ) {
      try {
        console.log("url called " + req.originalUrl + " " + req.method);
        new Middleware().checkToken(req, req.headers.token, res);
        next();
      } catch (error) {
        console.log(error);
        console.log("CATCH " + error);
        res.status(401).json({ message: "Session expired" });
      }
    } else {
      console.log("mbola m next " + req.originalUrl);
      next();
    }
  }
}

module.exports = { secret_code, Middleware };