import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  // const userId = req.query.userId;
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("User not logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Access Token");

    const actualUserId = userInfo.id.id; //TODO fix this

    console.log("User ID from token: ", userInfo.id);

    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
    LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ?
    ORDER BY p.createdAt DESC`;

    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json("Database error: " + err.message); // More specific error message
      }
      return res.status(200).json(data);
    });
  });
};
