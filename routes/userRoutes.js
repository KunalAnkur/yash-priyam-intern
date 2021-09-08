const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const {
  validateSignupData,
  validateLoginData,
} = require("../util/validator");
const bcrypt = require("bcrypt");
exports.signup = (req, res) => {
    // console.log(req.body);
  const user = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };

  const { valid, errors } = validateSignupData(user);
  if (!valid) return res.status(400).json(errors);

  User.findOne({ email: user.email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(400).json({ error: "Email already exist" });
      }
      bcrypt
        .hash(user.password, 12)
        .then((hashedpassword) => {
          const newUser = new User({
            email: user.email,
            password: hashedpassword,
            userName: user.userName,
          });
          newUser
            .save()
            .then((user) => {
              let secret = Buffer.from(process.env.SECRETE_KEY, "base64");
              jwt.sign(
                { _id: user._id },
                secret,
                { expiresIn: "24h" },
                (err, idToken) => {
                  if (!err) {
                    const {
                      _id,
                      email,
                    } = user;
                    return res.status(201).json({
                      idToken,
                      user: {
                        _id,
                        email,
                      },
                    });
                  } else {
                    return res
                      .status(500)
                      .json({ general: "Something Went Wrong" });
                  }
                }
              );
            })
            .catch((e) => {
              console.log(e, "saving error");
            });
        })
        .catch((e) => {
          console.log(e, "hashing error");
        });
    })
    .catch((e) => {
      return res.status(422).json({ e });
    });
};

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const { valid, errors } = validateLoginData(user);
  if (!valid) return res.status(400).json(errors);

  User.findOne({ email: user.email })
    .then((savedUser) => {
      if (!savedUser) return res.status(422).json({ error: "User not found" });

      bcrypt
        .compare(user.password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            let secret = Buffer.from(process.env.SECRETE_KEY, "base64");
            jwt.sign(
              { _id: savedUser._id },
              secret,
              { expiresIn: "24h" },
              (err, idToken) => {
                if (!err) {
                  const {
                    _id,
                    email,
                  } = savedUser;
                  return res.status(200).json({
                    idToken,
                    user: {
                      _id,
                      email,
                    },
                  });
                } else {
                  return res.status(422).json(err);
                }
              }
            );
          } else {
            return res.status(422).json({ error: "Wrong credentials" });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      return res.status(422).json({ error: e });
    });
};

exports.getUser = (req,res) => {
  User.findById(req.user._id).select("-password").then(user => {
    return res.status(200).json(user)
  }).catch(e => {
    return res.status(422).json(e);
  })
};