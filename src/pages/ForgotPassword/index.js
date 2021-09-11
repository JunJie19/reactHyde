import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from '../../components/Footer'
import '../../styles/form.css'
import loginImg from '../../img/loginbg.jpg'
import axios from 'axios'

function ForgotPassword() {
    const [eMail, setEmail] = useState("")

    const forgetPassword = () => {
        axios.post('https://hitalentsapp.herokuapp.com/hyde_international/forgotPass', { email: eMail }).then((response) => {
            if (response) {
                console.log(response)
                alert(response.data)
            }
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <Fragment>
            <div className='formbox'>
                <Container maxWidth='lg'>
                    <div className="formContainer">
                        <div className="loginForm">
                            <h2>Forgot Password</h2>
                            <h4><Link to="/signup">Sign up</Link> / <Link to="/login">Login</Link> </h4>
                            <form onSubmit={forgetPassword}>
                                <input type='email' placeholder=' Please enter your registered email' className='form-contol' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                                <br />
                                <input className='apply-btn' type='submit' value='Submit' />
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

export default ForgotPassword
