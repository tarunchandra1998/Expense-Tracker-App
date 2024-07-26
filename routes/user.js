import express from "express";

const userRoutes = (user) => {
  const router = express.Router();

  // Get user profile
  router.get("/", (req, res) => {
    res.json(user);
  });

  // Update user profile
  router.put("/", (req, res) => {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.profilePicture = req.body.profilePicture || user.profilePicture;

    res.json(user);
  });

  return router;
};

export default userRoutes;
