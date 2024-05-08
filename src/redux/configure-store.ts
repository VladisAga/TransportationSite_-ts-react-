import { configureStore } from '@reduxjs/toolkit';
import langReducer from './languageSlice';

export const store = configureStore({
    reducer: {
        isRuLang: langReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
