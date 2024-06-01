"use client"
import { useRef, useState, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'

//import { useDispatch } from 'react-redux'
import { setCredentials } from '../../store/slices/auth/authSlice'
//import { useLoginMutation } from '../../store/slices/auth/authApiSlice'
//import { useCreatePostMutation } from '../../requests/apiSlice2';
import { useLoginMutation } from "../../store/slices/auth/authApiSlice"

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    //const navigate = useNavigate()

    //const [login, { isLoading }] = useLoginMutation()
    //const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    //const [createPost, { isLoading, isSuccess, isError, error }] = useCreatePostMutation();
    //const [createPost, { isLoading, isSuccess, isError, error }] = useLoginMutation();
    const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await login({
                "emailAddress": "t.m.parakrama+101@gmail.com",
                "password": "Visio@1234"
            }).unwrap();
            // Optionally reset the form or show a success message
          } catch (err) {
            console.error('Failed to create post: ', err);
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = false ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Employee Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                    className='text-black'
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePwdInput}
                    value={pwd}
                    required
                    className='text-black'
                />
                <button>Sign In</button>
            </form>
        </section>
    )

    return content
}
export default Login