import { Container } from '@material-ui/core'
import React, { Fragment, useContext, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from '../../components/Footer'
import '../../styles/form.css'
import loginImg from '../../img/loginbg.jpg'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../components/validationSchema'
import { NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'
import {authContext} from '../../components/authContext'

function Login() {
    var history = useHistory()
    const [eMail, seteMail] = useState('')
    const [passWord, setpassWord] = useState('')
    const { register, handleSubmit, errors } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(loginSchema)
    })

    const {setloginStatus} = useContext(authContext)

    const loginForm = () => {
        axios.post('https://hitalentsapp.herokuapp.com/hyde_international/login', { email: eMail, password: passWord }).then((response) => {
            if (response) {
                alert('Welcome!');
                if (response.data.role === 'admin') {
                    history.push('/mgt/admin_dashboard')
                    setloginStatus(true)
                }
                else {
                    history.push('/mgt/expert_profile')
                    setloginStatus(true)
                }
            }
        }).catch((err) => {
            alert('Wrong Username / Password.')
            setloginStatus(false)
        })
    }


    return (
        <Fragment>
            <div className='formbox'>
                <Container maxWidth='lg'>
                    <div className="formContainer">
                        <div className="loginForm">
                            <h2>Log in</h2>
                            <h4>Don't have an account? <NavLink to='/signup'>Sign up</NavLink></h4>
                            <form onSubmit={handleSubmit(loginForm)}>
                                <label htmlFor="eMail">Email</label>
                                <br />
                                <input type='email' placeholder='Joe@gmail.com' name='eMail' ref={register} onChange={(e) => { seteMail(e.target.value) }} />
                                {errors.eMail?.type === 'required' && <p className='text-danger'>Email is required</p>}
                                {errors.eMail?.type === 'eMail' && <p className='text-danger'>Please enter a valid email</p>}
                                <br />
                                <label htmlFor="passWord">Password</label>
                                <br />
                                <input type='password' placeholder='********' name="passWord" ref={register} onChange={(e) => { setpassWord(e.target.value) }} />
                                {errors.passWord?.type === 'required' && <p className='text-danger'>Please enter your password</p>}
                                <br />
                                <a href='/forgotpassword'>Forgot password?</a>
                                <br />
                                <input type='submit' className='loginBtn' value='Login' />
                            </form>
                        </div>
                        <div className="loginImg"><LazyLoadImage src={loginImg} height='100%' width='100%' /></div>
                    </div>
                </Container>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Login
