import { User } from "../models/user.model.js";
import { aiRoute } from "../constant.js";
import axios from 'axios'

export const getUserProfile = async (req, res) => {
  try {
    const { userId, claims } = req.auth;
    const email = claims?.email_addresses?.[0]?.email_address;
    const name = claims?.first_name + " " + claims?.last_name;

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({ clerkId: userId, email, name });
    }

    res.json({ message: "User authenticated", user });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const helloWorld = async (req, res) => {
  try {
    const response = await axios.get(`${aiRoute}/api/hello`);

    res.json({ message: response.data.response });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};