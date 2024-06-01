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

// src/app/login/page.jsx
"use client";

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiSlice } from "../../../app/api/apiSliceNew";

//const baseEndPoint = process.env.NEXT_PUBLIC_NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BACKEND_PROD : process.env.NEXT_PUBLIC_BACKEND_DEV;

export const authApiSlice = apiSlice.injectEndpoints({
    baseEndPoint: fetchBaseQuery({ baseUrl: 'https://8o269xr9e2.execute-api.ap-southeast-1.amazonaws.com/dev' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (newPost) => ({
                url: '/login/admin', // Your API endpoint
                method: 'POST',
                body: newPost,
            }),
        }),
    }),
});

// Note the correct hook name based on the defined endpoint
export const { useLoginMutation } = authApiSlice;





// , // Change '/api' to your API base URL
// endpoints: (builder) => ({
//   createPost: builder.mutation({
//     query: (newPost) => ({
//       url: '/login/admin', // Your API endpoint
//       method: 'POST',
//       body: newPost,
//     }),
//   }),
// }),