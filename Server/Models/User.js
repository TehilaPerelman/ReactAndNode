const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    UserName: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }, 
    ListProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }] 
});

module.exports = mongoose.model('User', UserSchema);
