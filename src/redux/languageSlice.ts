import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './configure-store';

const initialState = {
    ruLang: true
};

export const languageSlice = createSlice({
    name: 'ruLang',
    initialState,
    reducers: {
        setStateOfLangTrue: (state) => {
            state.ruLang = true
        },
        setStateOfLangFalse: (state) => {
            state.ruLang = false
        }
    }
});

export const { setStateOfLangTrue, setStateOfLangFalse } = languageSlice.actions;

export default languageSlice.reducer;

export const stateOfLanguage = (state: RootState) => state.isRuLang.ruLang;
