module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/all", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/put/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/delete/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/delete", tutorials.deleteAll);

  app.use('/api/tutorials', router);
};
