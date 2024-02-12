const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Files will be stored in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Add a unique timestamp to the filename
  },
});

const upload = multer({ storage: storage });

// Serve static files (uploaded images)
app.use("/uploads", express.static("uploads"));

// Define a route for uploading multiple images
app.post("/upload", upload.array("images", 5), (req, res) => {
  // 'images' in upload.array('images', 5) corresponds to the input field name in your HTML form

  const files = req.files; // Access the uploaded files
  if (!files) {
    return res.status(400).send("No files were uploaded.");
  }

  // Process the uploaded files (e.g., save file paths to a database)
  const filePaths = files.map((file) => file.path);

  res.send("Files uploaded successfully.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
