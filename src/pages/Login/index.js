import { Container } from '@material-ui/core'
import React, { Fragment } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from '../../components/Footer'
import '../../styles/login.css'
import loginImg from '../../img/loginbg.jpg'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    Email: yup.string().email().required(),
    Password: yup.string().required(),
});

function index() {

    const { login, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data)
    }
    return (
        <Fragment>
            <div className='loginbox'>
                <Container maxWidth='lg'>
                    <div className="loginContainer">
                        <div className="loginForm">
                            <h2>Log in</h2>
                            <h4>Don't have an account? <a href='/signup'>Sign up</a></h4>
                            <form onSubmit={handleSubmit(submitForm)}>
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type='email' placeholder=' Email@gmail.com' name='Email' ref={login} />
                                <br />
                                <label htmlFor="password">Password</label>
                                <br />
                                <input type='password' placeholder=' ********' name='Password' ref={login} />
                                <br />
                                <a href='/forgotpassword'>Forgot Password?</a>
                                <br />
                                <button className='loginBtn'> Login </button>
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

export default index
