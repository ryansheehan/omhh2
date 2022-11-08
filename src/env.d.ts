/// <reference types="vite/client" />

interface ImportMetaEnv {
    // add environment variables here
    CMS_PROJECT_ID: string;
    CMS_DATASET: string;
    CMS_API_VERSION: string;
    CMS_USE_CDN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
