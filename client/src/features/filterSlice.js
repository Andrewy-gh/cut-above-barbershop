import { createSlice } from '@reduxjs/toolkit';
import { initialCurrentDate } from '../utils/date';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    date: initialCurrentDate,
    dateDisabled: false,
    employee: 'any',
    holdStatus: false,
    service: { id: 1, name: 'Haircut', duration: 30 },
    savedSelections: {
      slot: null,
      employee: null,
    },
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setDateDisabled: (state, action) => {
      state.dateDisabled = action.payload;
    },
    setService: (state, action) => {
      state.service = action.payload;
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    // ! TODO: implement these if user has selected slots but has not logged in
    setSavedSelections: (state, action) => {
      const { slot, employee } = action.payload;
      state.holdStatus = true;
      state.savedSelections = { slot, employee };
    },
    clearSavedSelections: (state) => {
      state.holdStatus = false;
      state.savedSelections = {
        slot: null,
        employee: null,
      };
    },
    resetFilter: (state) => {
      state.date = initialCurrentDate;
      state.employee = 'any';
      state.service = { id: 1, name: 'Haircut', duration: 30 };
    },
  },
});

export const selectDate = (state) => state.filter.date;
export const selectDateDisabled = (state) => state.filter.dateDisabled;
export const selectEmployee = (state) => state.filter.employee;
export const selectService = (state) => state.filter.service;
export const seklectHoldStatus = (state) => state.filter.holdStatus;
export const selectSavedSelections = (state) => state.filter.savedSelections;
export const {
  setDate,
  setEmployee,
  chooseEmployeePref,
  setDateDisabled,
  setService,
  setSavedSelections,
  clearSavedSelections,
  resetFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
