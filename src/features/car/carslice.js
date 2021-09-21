import { createSlice } from "@reduxjs/toolkit";

const initState = {
  cars: ["Model S", "Model X", "Model Y", "Model 3"],
};

const carSlice = createSlice({
  name: "car",
  initState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducers;
