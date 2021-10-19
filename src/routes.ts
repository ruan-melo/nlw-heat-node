import {Router} from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { GetProfileUserController } from './controllers/GetProfileController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const getLast3Controller = new GetLast3MessagesController();
const getProfileUserController = new GetProfileUserController();

router.post("/authenticate", authenticateUserController.handle);
router.get("/profile", ensureAuthenticated, getProfileUserController.handle);

router.post("/messages", ensureAuthenticated, createMessageController.handle);
router.get("/messages/last3", getLast3Controller.handle);

export {router};