export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_NAME: string;
      DATABASE_PORT: number;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
    }
  }
}
