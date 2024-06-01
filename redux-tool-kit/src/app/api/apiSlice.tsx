
// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://8o269xr9e2.execute-api.ap-southeast-1.amazonaws.com/dev',
  prepareHeaders: (headers) => {
    headers.set('x-api-key', 'HRWcqWF3Dk11jqpyQxMau7C3n5waYjny7adCsiji');
    return headers;
  },
   }), // Change '/api' to your API base URL
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (newPost) => ({
        url: '/login/admin', // Your API endpoint
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useCreatePostMutation } = authApiSlice;
