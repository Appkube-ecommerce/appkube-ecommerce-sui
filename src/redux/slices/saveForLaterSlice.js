import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    saveForLater: [],
  };
  const saveSlice = createSlice({
    name: "saveForLaterSlice",
    initialState,
    reducers: {
      addToSaveForLater: (state, action) => {
        // console.log('dispatching cart items',action.payload)
        state.saveForLater.push(action.payload);
        // console.log('payload',action.payload) 
          },
          remove: (state, action) => {
            state.saveForLater = state.saveForLater.filter(item => item.id !== action.payload);
          }
    },
  });
  
  export const { addToSaveForLater,remove } = saveSlice.actions;
  export default saveSlice.reducer;
  