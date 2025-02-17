const mongoose = require('mongoose');

const LayoutSchema = new mongoose.Schema({
    userId: String,
    layout: Array
});

module.exports = mongoose.model('Layout', LayoutSchema);
