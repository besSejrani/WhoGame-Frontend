declare namespace NodeJS {
  export interface ProcessEnv {
    // ==================================
    // CONFIGURATION
    // ==================================
    NODE_ENV: "production" | "development" | "test";
    APP_ENV: "production" | "development" | "staging";

    // ==================================
    // CLIENT URL
    // ==================================
    NEXT_PUBLIC_DEVELOPMENT_CLIENT: string;
    NEXT_PUBLIC_STAGING_CLIENT: string;
    NEXT_PUBLIC_PRODUCTION_CLIENT: string;

    // ==================================
    // SERVER URL
    // ==================================
    NEXT_PUBLIC_DEVELOPMENT_SERVER: string;
    NEXT_PUBLIC_STAGING_SERVER: string;
    NEXT_PUBLIC_PRODUCTION_SERVER: string;
  }
}
