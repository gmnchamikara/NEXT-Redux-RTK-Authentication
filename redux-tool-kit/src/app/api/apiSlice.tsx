import { BaseQueryApi, FetchArgs, RootState, createApi, fetchBaseQuery } from  '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '@/store/slices/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')

        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
   
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
    
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})


// import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
// import { setCredentials, logOut } from '../../features/auth/authSlice'
// import { RootState } from '../../app/store'

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://localhost:3500',
//     credentials: 'include',
//     prepareHeaders: (headers, { getState }) => {
//         const token = (getState() as RootState).auth.token
//         if (token) {
//             headers.set("authorization", `Bearer ${token}`)
//         }
//         return headers
//     }
// })

// const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
//     let result = await baseQuery(args, api, extraOptions)

//     if (result?.error?.originalStatus === 403) {
//         console.log('sending refresh token')
//         // send refresh token to get new access token 
//         const refreshResult = await baseQuery('/refresh', api, extraOptions)
//         console.log(refreshResult)
//         if (refreshResult?.data) {
//             const user = (api.getState() as RootState).auth.user
//             // store the new token 
//             api.dispatch(setCredentials({ ...refreshResult.data, user }))
//             // retry the original query with new access token 
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
