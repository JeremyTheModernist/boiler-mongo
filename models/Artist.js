const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Artist = Schema({
	name: {
		type: String,
		required: true
	},
	born: Number,
	home: String,
	works: [String]
});

module.exports = mongoose.model("Artist", Artist);
