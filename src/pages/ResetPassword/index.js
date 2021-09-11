import { useHistory, useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from '../../components/Footer'
import '../../styles/form.css'
import loginImg from '../../img/loginbg.jpg'
import axios from 'axios'

function ResetPassword() {
    const [password, setpassword] = useState("")
    const history = useHistory()

    const [email, setuserName] = useState("")
    const { token }: { token: string } = useParams()

    console.log()

    useEffect(() => {
        axios.post(`https://hitalentsapp.herokuapp.com/hyde_international/resetPassword/${token}`).then((response) => {
            if (response) {
                setuserName(response.data.data.account_name)
            }
        })
    }, [])


    const resetPassword = () => {
        axios.post('https://hitalentsapp.herokuapp.com/hyde_international/updatePassword', { email: email, password: password }).then((response) => {
            if (response) {
                alert('You have update your password.')
                if (response.data.succuess === 'true') {
                    history.replace('/login')
                }
            }
        })
    }
    return (
        <Fragment>
            <div className='formbox'>
                <Container maxWidth='lg'>
                    <div className="formContainer">
                        <div className="loginForm">
                            <h2>Reset Password</h2>
                            <form onSubmit={resetPassword}>
                                <label >Your Email:</label>
                                <label >{email}</label>

                                <br />
                                <label>Password</label>
                                <input type='password' placeholder=' Please enter your new password' className='form-contol' name='password' onChange={(e) => { setpassword(e.target.value) }} />
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

export default ResetPassword
