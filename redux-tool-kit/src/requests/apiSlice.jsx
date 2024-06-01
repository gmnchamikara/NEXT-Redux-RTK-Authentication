// import { BaseQueryApi, FetchArgs, RootState, createApi, fetchBaseQuery } from  '@reduxjs/toolkit/query/react'
// import { setCredentials, logOut } from '@/store/slices/auth/authSlice'

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'https://8o269xr9e2.execute-api.ap-southeast-1.amazonaws.com/dev/login/admin',
//     method: 'POST',
//     body: {
//         "emailAddress": "t.m.parakrama+101@gmail.com",
//         "password": "Visio@1234"
//     },
//     credentials: 'include',
//     prepareHeaders: (headers, { getState }) => {
//         const token = getState().auth.token
//         if (token) {
//             //headers.set("authorization", `Bearer ${token}`)
//             headers.set("x-api-key", `WhKzV4ZUxo8w7ytO5kQt169pQhDHQlBf4TiDrFIF`)
//         }
//         return headers
//     }
// })

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)

//     if (result?.error?.originalStatus === 403) {
//         console.log('sending refresh token')

//         const refreshResult = await baseQuery('/refresh', api, extraOptions)
//         console.log(refreshResult)
//         if (refreshResult?.data) {
//             const user = api.getState().auth.user
   
//             api.dispatch(setCredentials({ ...refreshResult.data, user }))
    
//             result = await baseQuery(args, api, extraOptions)
//         } else {
//             api.dispatch(logOut())
//         }
//     }

//     return result
// }

// export const apiSlice = createApi({
//     baseQuery: baseQueryWithReauth,
//     endpoints: builder => ({})
// })


//-----------------------------------------------------------------------------------------


// import { BaseQueryApi, FetchArgs, RootState, createApi, fetchBaseQuery } from  '@reduxjs/toolkit/query/react'
// import { setCredentials, logOut } from '@/store/slices/auth/authSlice'

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://localhost:3500',
//     method: 'POST',
//     body: {
//         "emailAddress": "t.m.parakrama+101@gmail.com",
//         "password": "Visio@1234"
//     },
//     credentials: 'include',
//     prepareHeaders: (headers, { getState }) => {
//         const token = getState().auth.token
//         if (token) {
//             headers.set("authorization", `Bearer ${token}`)
//         }
//         return headers
//     }
// })
// Call the baseQuery function with the state

// baseQuery(getState).then(data => {
//     console.log('Response data:', data);
// }).catch(error => {
//     console.error('Request failed:', error);
// });

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)

//     if (result?.error?.originalStatus === 403) {
//         console.log('sending refresh token')

//         const refreshResult = await baseQuery('/refresh', api, extraOptions)
//         console.log(refreshResult)
//         if (refreshResult?.data) {
//             const user = api.getState().auth.user
   
//             api.dispatch(setCredentials({ ...refreshResult.data, user }))
    
//             result = await baseQuery(args, api, extraOptions)
//         } else {
//             api.dispatch(logOut())
//         }
//     }

//     return result
// }

// export const apiSlice = createApi({
//     baseQuery: baseQueryWithReauth,
//     endpoints: builder => ({})
// })


///----------------------------------------------------------------------------------------

// const axios = require('axios');
// import { BaseQueryApi, FetchArgs, RootState, createApi, fetchBaseQuery } from  '@reduxjs/toolkit/query/react'

// const baseQuery = async (getState) => {
//     // Extract the token from the state
//     const token = getState().auth.token;
//     // Prepare the headers
//     const headers = {
//         'Content-Type': 'application/json',
//     };
//     if (token) {
//         // headers['Authorization'] = `Bearer ${token}`;
//         headers['x-api-key'] = 'HRWcqWF3Dk11jqpyQxMau7C3n5waYjny7adCsiji';
//     }
//     // Make the POST request using Axios
//     try {
//         const response = await axios.post(
//             'https://8o269xr9e2.execute-api.ap-southeast-1.amazonaws.com/dev/login/admin',
//             {
//                 emailAddress: 't.m.parakrama+101@gmail.com',
//                 password: 'Visio@1234',
//             },
//             {
//                 headers: headers,
//                 withCredentials: true,
//             }
//         );
//         return response.data;
//     } catch (error) {
//         console.error('Error making request:', error);
//         throw error;
//     }
// };
// // Example usage:
// // Assuming you have a function to get the state
// const getState = () => ({
//     auth: {
//         token: 'your_token_here', // Replace with actual token retrieval logic
//     },
// });
// // Call the baseQuery function with the state
// baseQuery(getState).then(data => {
//     console.log('Response data:', data);
// }).catch(error => {
//     console.error('Request failed:', error);
// });

// export const apiSlice = createApi({
//     //baseQuery: baseQueryWithReauth,
//     endpoints: builder => ({})
// })