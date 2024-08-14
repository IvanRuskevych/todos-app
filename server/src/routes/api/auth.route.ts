import { Router } from 'express';

import { genericValidatorMiddleware, localAuth } from '../../middlewares';
import {
	forgotPasswordSchema,
	resetPasswordSchema,
	userSchema,
} from '../../schemas';
import {
	ctrForgotPassword,
	ctrLogin,
	ctrRegister,
	ctrResetPassword,
	ctrVerifyEmail,
} from '../../controllers';

const authRouter: Router = Router();

authRouter.post(
	'/register',
	genericValidatorMiddleware(userSchema),
	ctrRegister,
);
authRouter.post('/verify-email', ctrVerifyEmail);

authRouter.post('/login', localAuth, ctrLogin);
authRouter.post(
	'/forgot-password',
	genericValidatorMiddleware(forgotPasswordSchema),
	ctrForgotPassword,
);
authRouter.post(
	'/reset-password',
	genericValidatorMiddleware(resetPasswordSchema),
	ctrResetPassword,
);

export default authRouter;
