import express from "express"
import {
  editProfile,
  followOrUnfollow,
  getProfile,
  getSuggestedUsers,
  login,
  logout,
  register,
  checkFollowing,
  getUsersForMessaging,
  searchUser,
  getRecruiters,
} from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"
import upload from "../middlewares/multer.js"

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/:id/profile").get(isAuthenticated, getProfile)
router
  .route("/profile/edit")
  .post(isAuthenticated, upload.single("profilePhoto"), editProfile)
router.route("/suggested").get(isAuthenticated, getSuggestedUsers)
router.route("/followorunfollow/:id").post(isAuthenticated, followOrUnfollow)
router.get("/isfollowing/:id", isAuthenticated, checkFollowing)
router.route("/userForMessaging").get(isAuthenticated, getUsersForMessaging)
router.get("/search", isAuthenticated, searchUser)
router.get("/getRecruiters", isAuthenticated, getRecruiters)

export default router
