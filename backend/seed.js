const mongoose = require("mongoose");
require("dotenv").config();

const Assignment = require("./models/Assignment");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("MongoDB connected for seeding");

  await Assignment.deleteMany();

  await Assignment.insertMany([
    {
      title: "Select All Users",
      description: "Fetch all users from users table",
      difficulty: "Easy",
      question: "Write SQL query to fetch all records from users table.",
      relatedTables: ["users"]
    },
    {
      title: "Find Expensive Products",
      description: "Get products with price greater than 30000",
      difficulty: "Medium",
      question: "Write SQL query to get products where price > 30000.",
      relatedTables: ["products"]
    },
    {
      title: "Join Users and Orders",
      description: "Show user name with their order details",
      difficulty: "Hard",
      question: "Write SQL query using JOIN to show user name with product ordered.",
      relatedTables: ["users", "orders", "products"]
    }
  ]);

  console.log("Assignments inserted");
  process.exit();
});