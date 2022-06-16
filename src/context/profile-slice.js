import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  profile: {
    country: '',
    email: '',
    firstName: '',
    lastName: '',
    preferredLocale: '',
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = _.pick(action.payload, Object.keys(initialState.profile));
    },
  },
});

export const { setProfile } = profileSlice.actions;

export const selectProfile = (state) => state.profile.profile;

export default profileSlice;
