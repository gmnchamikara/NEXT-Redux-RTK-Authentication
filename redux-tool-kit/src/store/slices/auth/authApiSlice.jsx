// import { apiSlice } from "../../../requests/apiSlice.jsx";

// export const authApiSlice = apiSlice.injectEndpoints({
//     endpoints: builder => ({
//         login: builder.mutation({
//             query: credentials => ({
//                 url: '/auth',
//                 method: 'POST',
//                 body: { ...credentials }
//             })
//         }),
//     })
// })

// export const {
//     useLoginMutation
// } = authApiSlice

"use client"

import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../../api";


const baseEndPoint = process.env.NEXT_PUBLIC_NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BACKEND_PROD : process.env.NEXT_PUBLIC_BACKEND_DEV;

export const authApiSlice = apiSlice.injectEndpoints({
    baseEndPoint: fetchBaseQuery({ baseUrl: baseEndPoint }),
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/user/login',
                method: 'POST',
                body: { ...credentials }
            })
        })
    })
})