const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    text: {
        type: "String",
        required: true
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;