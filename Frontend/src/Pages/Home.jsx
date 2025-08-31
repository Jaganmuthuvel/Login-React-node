import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [user, setUsername] = useState("")
    const [pass, setPassword] = useState("")
    const navigate = useNavigate()
    const handleonchange = (event) => {
        setUsername(event.target.value)
    }
    const handleonchange1 = (event) => {
        setPassword(event.target.value)
    }
    function check() {
        var functionaxios = axios.get(`https://login-react-node-u19p.onrender.com/login?username=${user}&password=${pass}`)
        functionaxios.then(function (data) {
            if (data.data === true) {
                navigate("/Sucess")

            }
            else {
                navigate("/Failure")
            }
        })


    }

    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Login
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                name='username'
                                id="username"
                                placeholder="Jagan"
                                onChange={handleonchange}
                                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={handleonchange1}
                                id="password"
                                placeholder="••••••••"
                                name='password'
                                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            onClick={check}
                            className="w-full rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >Login

                        </button>
                    </div>
                    <div className="mt-6 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Or continue with</span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-50">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                            Google
                        </button>
                        <button className="flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-50">
                            <img src="https://www.svgrepo.com/show/447137/github-fill.svg" alt="GitHub" className="h-5 w-5 mr-2" />
                            GitHub
                        </button>
                    </div>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home
