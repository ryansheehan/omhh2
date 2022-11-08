/// <reference types="vite/client" />

interface ImportMetaEnv {
    // add environment variables here
    TEST: string;
    VITE_TEST: string;
    OMHH_TEST: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}