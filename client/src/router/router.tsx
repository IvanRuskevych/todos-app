import * as React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from 'react-router-dom';

import { TodosModule } from '~modules/todos/todos.module';
import { TodoForm } from '~modules/todos/TodoForm/TodoForm';
import App from '~modules/app/app.module';
import { ROUTER_KEYS } from '~shared/keys';
import { MainPage } from '~modules/MainPage/MainPage';
import { RegisterForm } from '~modules/AuthForms/RegisterForm';
import { VerifyEmail } from '~shared/components/VerifyEmail/VerifyEmail';
import { LoginForm } from '~modules/AuthForms/LoginForm';
import { ForgetPasswordForm } from '~modules/AuthForms/ForgetPassword';
import { ResetPasswordForm } from '~modules/AuthForms/ResetPasswordForm';
import { PrivateRoutes, PublicRoutes } from '~router/routes';
import { Profile } from '~modules/Profile/Profile';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={ROUTER_KEYS.MAIN} element={<App />}>
			<Route element={<PublicRoutes />}>
				<Route index element={<MainPage />} />
				<Route
					path={`${ROUTER_KEYS.LOGIN}`}
					element={<LoginForm />}
				/>{' '}
				<Route
					path={`${ROUTER_KEYS.REGISTER}`}
					element={<RegisterForm />}
				/>
				<Route
					path={`${ROUTER_KEYS.FORGET_PSW}`}
					element={<ForgetPasswordForm />}
				/>
				<Route
					path={`${ROUTER_KEYS.RESET_PSW}`}
					element={<ResetPasswordForm />}
				/>
				<Route
					path={ROUTER_KEYS.VERIFY_EMAIL}
					element={<VerifyEmail />}
				/>
			</Route>
			<Route element={<PrivateRoutes />}>
				<Route path={ROUTER_KEYS.DASHBOARD} element={<TodosModule />} />
				<Route path={ROUTER_KEYS.ADD_NEW} element={<TodoForm />} />
				<Route path={`${ROUTER_KEYS.VIEW}`} element={<TodoForm />} />
				<Route path={`${ROUTER_KEYS.PROFILE}`} element={<Profile />} />
			</Route>
			<Route
				path={ROUTER_KEYS.ALL_MATCH}
				element={<Navigate to={ROUTER_KEYS.MAIN} replace />}
			/>
		</Route>,
	),
);

const Router: React.FunctionComponent = () => {
	return <RouterProvider router={router} />;
};

export default Router;
