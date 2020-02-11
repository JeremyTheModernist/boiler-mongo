const resolvers = require("../resolvers");

module.exports = app => {
	app.post("/api/artist", resolvers.createArtist);
	app.get("/api/artist", resolvers.findAllArtists);
	app.get("/api/artist/:name", resolvers.findArtist);
	app.delete("/api/artist/:name", resolvers.deleteArtist);
};
