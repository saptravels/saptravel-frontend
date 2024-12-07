import { createSlice } from "@reduxjs/toolkit";

const toursSlice = createSlice({
    name:"tours",
    initialState:{
        tours:[]
    },
    reducers:{
        getTour : (state,action)=>{
            state.tours = action.payload.map(tour=>{
                return{
                    id : tour._id,
                    name:tour.name,
                    numberOfPersons:tour.numberOfPersons,
                    services:tour.services.map(service=>({
                        id:service?._id,
                        name:service?.name
                    })),
                    category:tour.category,
                    imageUrl:tour.imageUrl,
                    pdf:tour.pdf

                }
            })
        },
        addTour:(state,action)=>{
           state.tours.push({
            id:action.payload._id,
            name:action.payload.name,
            services:action.payload.services.map(service=>(
                {
                    id:service._id,
                    name:service.name
                }
            )),
            imageUrl:action.payload.imageUrl,
            pdf:action.payload.pdf,
            category:action.payload.category,
            numberOfPersons:action.payload.numberOfPersons
           })
        },
        updateTour : (state,action)=>{
            const index= state.tours.findIndex(u=>u.id === action.payload.id);
            state.tours[index]={
                ...state.tours[index],
                name:action.payload.name,
                services:action.payload.services,
                category:action.payload.category,
                numberOfPersons:action.payload.numberOfPersons,
                imageUrl:action.payload.imageUrl,
                pdf:action.payload.pdf
            }
        },
        deleteTour:(state,action)=>{
            const id =action.payload.id
            state.tours = state.tours.filter( u =>u.id !== id )
        }
    }

})

export const  {getTour, addTour, updateTour, deleteTour} = toursSlice.actions;
export default toursSlice.reducer; 