const mongoose = require('mongoose');
const { Schema } =  mongoose;

const userSchema = new Schema ({
    googleId: String,
    facebookId: String,
    name: String,
    age: Number,
    bestFriends: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]
});

mongoose.model("User", userSchema)