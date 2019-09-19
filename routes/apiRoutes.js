const api = (db, app) => {
    app.get("/api/ranks", function (req, res) {
        // Grab every document in the ranks collection
        db.Rank.find({}).sort({ 'score': -1 })
            .exec(err, function (ranks) {
                if (err) console.log(err);
                // If we were able to successfully find ranks, send them back to the client
                res.json(ranks);
            })
    });

    // Route for saving/updating an Article's associated Note
    app.post("/api/ranks", function (req, res) {
        // Create a new note and pass the req.body to the entry
        let newRank = req.body;
        db.Rank.create(newRank, function (err, rank) {
            if (err) console.log(err);

            // View the added result in the console
            console.log("Saved: " + rank.score)
        })
    });
};

module.exports = api;