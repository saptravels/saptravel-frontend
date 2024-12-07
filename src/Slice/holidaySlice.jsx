import { createSlice } from "@reduxjs/toolkit";

const holidaySlice = createSlice({
  name: "holidays",
  initialState: {
    holidays: [],
  },
  reducers: {
    getHoliday: (state, action) => {
      state.holidays = action.payload.map((holiday) => ({
        id: holiday._id,
        name: holiday.name,
        imageUrl: holiday.imageUrl || "",
        services: holiday.services
          ? holiday.services.map((service) => ({
              id: service?._id || null,
              name: service?.name || "",
            }))
          : [],
        category: holiday.category
          ? holiday.category.map((category) => ({
              id: category?._id || null,
              name: category?.name || "",
            }))
          : [],
        pdf: holiday.pdf || "",
      }));
    },

    addHoliday: (state, action) => {
      const newHoliday = {
        id: action.payload._id || null,
        name: action.payload.name || "",
        imageUrl: action.payload.imageUrl || "",
        services: action.payload.services
          ? action.payload.services.map((service) => ({
              id: service?._id || null,
              name: service?.name || "",
            }))
          : [],
        category: action.payload.category
          ? action.payload.category.map((category) => ({
              id: category?._id || null,
              name: category?.name || "",
            }))
          : [],
        pdf: action.payload.pdf || "",
      };

      state.holidays.push(newHoliday);
    },

    updateHoliday: (state, action) => {
      const index = state.holidays.findIndex((x) => x.id === action.payload.id);
      if (index !== -1) {
        state.holidays[index] = {
          ...state.holidays[index],
          name: action.payload.name || state.holidays[index].name,
          category: action.payload.category
            ? action.payload.category.map((category) => ({
                id: category?._id ,
                name: category?.name || "",
              }))
            : state.holidays[index].category,
          services: action.payload.services
            ? action.payload.services.map((service) => ({
                id: service?._id || null,
                name: service?.name || "",
              }))
            : state.holidays[index].services,
          pdf: action.payload.pdf || state.holidays[index].pdf,
          imageUrl: action.payload.imageUrl || state.holidays[index].imageUrl,
        };
      }
    },

    deleteHoliday: (state, action) => {
      state.holidays = state.holidays.filter((u) => u.id !== action.payload.id);
    },
  },
});

export const { getHoliday, addHoliday, updateHoliday, deleteHoliday } =
  holidaySlice.actions;
export default holidaySlice.reducer;
