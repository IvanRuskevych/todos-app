declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TEST: string;
			DATABASE_URL: string;
		}
	}
}

export {};
