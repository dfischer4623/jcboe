try {
    console.log("Loading db...");
    const db = require("./app/models");
    console.log("DB loaded successfully.");
    console.log("Models in db:", Object.keys(db));
    process.exit(0);
} catch (err) {
    console.error("Error loading DB:", err);
    process.exit(1);
}
