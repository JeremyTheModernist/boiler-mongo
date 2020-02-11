const mongoose = require("mongoose");

module.exports = () => {
	console.log("working on connecting your mongoose database", process.env);
	return mongoose
		.connect(`${process.env.DATABASE_URL}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => console.log("up and running your mongoose connection"))
		.catch(() => "hit an error trying to connect!");
};
