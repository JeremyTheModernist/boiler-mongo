const ArtistResolvers = require("./Artist");

module.exports = {
	queryAPI: (req, res) => {
		res.send("grabbing the API");
	},
	...ArtistResolvers
};
