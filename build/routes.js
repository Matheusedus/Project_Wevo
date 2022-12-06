"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const create_1 = __importDefault(require("./validations/UserValidations/create"));
const update_1 = __importDefault(require("./validations/UserValidations/update"));
const router = express_1.default.Router();
router.get("/users", UserController_1.default.allUsers);
router.get("/users/:id", UserController_1.default.getOneUser);
router.post("/users", create_1.default, UserController_1.default.createUser);
router.put("/users/:id", update_1.default, UserController_1.default.updateUser);
router.delete("/users/:id", UserController_1.default.deleteUser);
exports.default = router;
