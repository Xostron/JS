import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'


export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, error, request, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        console.log('Error', error)
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    return (
        <div className='row'>
            <div className='col s6 offset-s3'>
                <h1>Сократи ссылку</h1>
                <div className="card blue-grey darken-0">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Enter password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className='btn yellow darken-4'
                            onClick={loginHandler}
                            style={{ marginRight: 10 }}
                            disabled={loading}
                        >
                            Enter
                        </button>
                        <button
                            className='btn grey darken-0'
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Registration
                        </button>

                    </div>
                </div>


            </div>
        </div>

    )
}