import { Container } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from '../../components/Footer'
import '../../styles/form.css'
import loginImg from '../../img/loginbg.jpg'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../components/validationSchema'
import { NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'

function Login() {
    var history = useHistory()
    const [eMail, seteMail] = useState('')
    const [passWord, setpassWord] = useState('')
    const [loginSession, setloginSession] = useState('')

    const { register, handleSubmit, errors } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(loginSchema)
    })

    axios.defaults.withCredentials = true;
    const loginForm = () => {
        axios.post('http://localhost:3001/hyde_international/login', { email: eMail, password: passWord }).then((response) => {
            if (response) {
                alert('Welcome!');
                history.push('/mgt/expert_profile')
            }
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/hyde_international/login').then((response) => {
            if (response.data.loggedIn === true) {
                setloginSession(response.data.user[0].account_name)
            }
        })
    }, [])


    return (
        <Fragment>
            <div className='formbox'>
                <Container maxWidth='lg'>
                    <div className="formContainer">
                        <div className="loginForm">
                            <h2>Log in</h2>
                            <h4>Don't have an account? <NavLink to='/signup'>Sign up</NavLink></h4>
                            <form onSubmit={handleSubmit(loginForm)}>
                                <label htmlFor="eMail">eMail</label>
                                <br />
                                <input type='eMail' placeholder='Joe@gmail.com' name='eMail' ref={register} onChange={(e) => { seteMail(e.target.value) }} />
                                {errors.eMail?.type === 'required' && <p className='text-danger'>eMail is required</p>}
                                {errors.eMail?.type === 'eMail' && <p className='text-danger'>Please enter a valid eMail</p>}
                                <br />
                                <label htmlFor="passWord">passWord</label>
                                <br />
                                <input type='passWord' placeholder='********' name="passWord" ref={register} onChange={(e) => { setpassWord(e.target.value) }} />
                                {errors.passWord?.type === 'required' && <p className='text-danger'>Please enter your passWord</p>}
                                <br />
                                <a href='/forgotpassWord'>Forgot password?</a>
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
