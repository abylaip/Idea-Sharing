const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, "./uploads");
  },

  filename: function (request, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("avatar"), async (request, response, next) => {
  const file = request.file;
  console.log(file);
  if (file) {
    response.json({
      url: `http://localhost:3001/${file.path}`,
      path: file.path,
    });
    console.log(`File ${file.path} uploaded successfully`);
    return;
  }
  response.status(500).json({ error: "Failed to upload" });
});

router.get("/:id/avatar", async (request, response, next) => {
  const user = await User.findById(request.params.id);
  const image = user.avatar;
  console.log(user);
  response.json(image);
});

module.exports = router;
