const Artist = require("../../models/Artist.js");

module.exports = {
	createArtist: (req, res, next) => {
		console.log(req.body.name);
		const newArtist = new Artist(req.body);
		newArtist.save((err, product) =>
			console.log("saved a new artist", product)
		);
		res.send(`successfuly saved new artist ${newArtist.name}`);
	},
	findAllArtists: (req, res, next) => {
		Artist.find({}, (err, docs) => {
			console.log("found artists", docs);
			docs ? res.send(docs) : res.send(err);
		});
	},
	findArtist: (req, res, next) => {
		Artist.find({ name: req.params.name }, (err, doc) => {
			console.log(`found your user ${doc.name}`);
			doc ? res.send(doc) : res.send(err);
		});
	},
	deleteArtist: (req, res, next) => {
		console.log("deleting artist");
		Artist.deleteOne({ name: req.params.name }, (err, doc) => {
			console.log("succesfully deleted your user", doc);
			doc ? res.send(doc) : res.send(err);
		});
	}
};
