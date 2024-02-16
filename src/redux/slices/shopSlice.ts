import { createSlice } from "@reduxjs/toolkit"
import db from "../../data/db"

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: [
      "Столи обідні",
      "Журнальні столи",
      "Стільці",
      "Крісла",
      "Дивани",
      "Акції",
      "Для вітальні",
    ],
    shop: db,
  },

  reducers: {
    // changeMainCategory: (state: any, action: any) => {
    //   state.mainCategory = action.payload
    // },
    // changeDishCategory: (state: any, action: any) => {
    //   state.dishCategory = action.payload
    // },
  },
})

export const {} = shopSlice.actions

export default shopSlice.reducer
