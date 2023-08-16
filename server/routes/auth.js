const router = require("express").Router();
const User = require("../models/User");

router.get("/register", async (req, res) => {
    try {
        const user = new User({
            username: "john",
            email: "john@gmail.com",
            password: "1234"
        });
        await user.save();
        res.send("ok");
    } catch (error) {
        console.error("Error while registering user:", error);
        res.status(500).send("An error occurred while registering.");
    }
});

module.exports = router;
