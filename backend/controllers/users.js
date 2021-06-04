const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/info", async (request, response, next) => {
  console.log(request.user);
  response.json(
    Object.assign(
      {
        avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
      },
      request.user.toObject()
    )
  );
});

usersRouter.put("/:id", async (request, response, next) => {
  const { body } = request;
  console.log(request.params);
  console.log(request.body);

  const user = await User.findById(request.params.id);

  if (!user) {
    next(new Error("Object not found!"));
    return;
  }
  console.log("update user");
  console.log(user);
  console.log(body);
  user.set({
    id: user.id,
    location: body.location,
    avatar: body.avatar,
    /// ...
  });
  await user.save();
  response.json(user);
});

usersRouter.get("/:id/avatar", async (request, response, next) => {
  const user = await User.findById(request.params.id);
  const image = user.avatar;
  console.log(user);
  response.json(image);
});

usersRouter.put("/password/:id", async (request, response, next) => {
  const { body } = request;

  const user = await User.findById(request.params.id);

  if (!user) {
    next(new Error("Object not found!"));
    return;
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);
  body.password = passwordHash;
  user.set(body);
  await user.save();
  response.json(user);
});

// usersRouter.get("/info/:id", async (request, reponse, next) => {
//   try {
//     const user = await User.findById(request.params.id);
//     if (user) {
//       response.json(user);
//     } else {
//       response.status(404).end();
//     }
//   } catch (error) {
//     response.json("error", error);
//   }
// });

module.exports = usersRouter;
