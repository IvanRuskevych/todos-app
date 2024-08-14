import { Router } from 'express';

import { jwtAuth } from '../../middlewares';
import { ctrGetCurrentUser, ctrUpdateUser } from '../../controllers';

const router: Router = Router();

router.get('/current', jwtAuth, ctrGetCurrentUser);
router.post('/update', jwtAuth, ctrUpdateUser);

export default router;
