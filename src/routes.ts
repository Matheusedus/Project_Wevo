import express from "express";
import UserController from "./controllers/UserController";
import validateCreateUser from "./validations/UserValidations/create";
import validateUpdateUser from "./validations/UserValidations/update";
const router = express.Router();

router.get("/users", UserController.allUsers);
router.get("/users/:id", UserController.getOneUser);
router.post("/users", validateCreateUser, UserController.createUser);
router.put("/users/:id", validateUpdateUser, UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

export default router;
