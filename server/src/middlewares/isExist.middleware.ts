import { Request, Response, NextFunction } from 'express';

import { ModelType } from '../types/todos.type';
import { ApiErrors } from '../utils';

export const isExistMiddleware = (model: ModelType) => {
	return async (
		req: Request,
		_res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const reqId = req.params.id || req.body.id;

			if (!reqId) {
				return next(ApiErrors.BadRequest('ID is required'));
			}

			const record = await model.findUnique({ where: { id: reqId } });

			if (!record) {
				return next(
					ApiErrors.NotFound('Record with the given id not found'),
				);
			}

			next();
		} catch (err) {
			next(err);
		}
	};
};
