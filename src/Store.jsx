import {configureStore} from '@reduxjs/toolkit'
import carReducer from './Slice/carsSlice'
import userReducer from './Slice/userSlice'
import holidayReducer from './Slice/holidaySlice'
import tourReducer from './Slice/toursSlice'


export const Store = configureStore({
    reducer:{
        Cabs:carReducer,
        users:userReducer,
        holidays:holidayReducer,
        tours:tourReducer
    }
   
})