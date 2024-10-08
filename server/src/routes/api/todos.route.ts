import { Router } from 'express';

import { prismaClient } from '../../prisma/prismaClient';
import { todoSchema } from '../../schemas';
import {
	genericValidatorMiddleware,
	isExistMiddleware,
	jwtAuth,
} from '../../middlewares';
import {
	ctrAddNewTodo,
	ctrDeleteTodoById,
	ctrGetFilteredTodos,
	ctrGetTodoById,
	ctrPatchTodoById,
	ctrUpdateTodoById,
} from '../../controllers';

const todosRouter: Router = Router();

todosRouter.post(
	'/create',
	genericValidatorMiddleware(todoSchema),
	ctrAddNewTodo,
);

todosRouter.get('/all', jwtAuth, ctrGetFilteredTodos);

todosRouter.get(
	'/todo/:id',
	isExistMiddleware(prismaClient.todo),
	ctrGetTodoById,
);

todosRouter.put(
	'/todo/:id',
	isExistMiddleware(prismaClient.todo),
	genericValidatorMiddleware(todoSchema),
	ctrUpdateTodoById,
);

todosRouter.delete(
	'/todo/:id',
	isExistMiddleware(prismaClient.todo),
	ctrDeleteTodoById,
);

todosRouter.patch(
	'/todo/:id',
	isExistMiddleware(prismaClient.todo),
	ctrPatchTodoById,
);

export default todosRouter;
