import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const Stateapi = createApi({
    reducerPath: 'albums', 
    baseQuery : fetchBaseQuery({
        baseUrl: 'https://tourismappbackend5.onrender.com'
    }),
    endpoints(builder){
        return{
            fetchstates:builder.query({
                providesTags: (result,error,user)=>{
                    console.log(result)
                    const tags = result.map(state=>{
                        return {name:state.name,img:state.img}
                    })
                    return tags;
                },
                query: (user)=>{
                    return{
                        url: '/api',
                        method: 'GET',
                    };
                }
            })
        };
    },
});

export const { useFetchstatesQuery } = Stateapi;
export {Stateapi}