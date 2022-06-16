import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  country: '',
  email: '',
  firstName: '',
  lastName: '',
  preferredLocale: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    setProfile: (state, action) => {
      state = _.pick(action.payload, Object.keys(initialState));
    },
  },
});

export const { setProfile } = profileSlice.actions;

export const selectProfile = (state) => state.locale.localization;

export default profileSlice;
