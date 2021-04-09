import { Container } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from '../../components/Footer'
import '../../styles/form.css'
import registerImg from '../../img/registerbg.jpg'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../components/validationSchema'
import { Col, Row } from 'react-bootstrap'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import { response } from 'express'

function Register() {
    var history = useHistory()

    const { register, handleSubmit, errors } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = () => {
        Axios.post('http://localhost:3001/hyde_international/signup', {
            firstName: fName, lastName: lName, email: email, password: password, Cpassword: Cpassword, phoneNo: phoneNo
        }).then(() => {
            alert('successfully registered!')
            history.push('/mgt/expert_profile')
        })
    }



    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [Cpassword, setCpassword] = useState('')
    const [phoneNo, setphoneNo] = useState('')

    return (
        <div>
            <Fragment>
                <div className='formbox'>
                    <Container>
                        <div className="formContainer">
                            <Col sm={12} md={7} lg={7}>
                                <div className="registerForm">
                                    <h2>Sign Up</h2>
                                    <h4>Register now and get access to amazing opportunities</h4>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6}>
                                                <label htmlFor="firstName">First Name</label>
                                                <br />
                                                <input type='text' placeholder=' Jane' name='firstName' ref={register} onChange={(e) => { setfName(e.target.value) }} />
                                                {errors.firstName?.type === 'required' && <p className='text-danger'>First Name is required</p>}
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6}>
                                                <label htmlFor="lastName">Last Name</label>
                                                <br />
                                                <input type='text' placeholder=' Doe' name='lastName' ref={register} onChange={(e) => { setlName(e.target.value) }} />
                                                {errors.lastName?.type === 'required' && <p className='text-danger'>Last Name is required</p>}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}><label htmlFor="email">Email</label>
                                                <br />
                                                <input type='email' placeholder=' Email@gmail.com' name='email' ref={register} onChange={(e) => { setemail(e.target.value) }} />
                                                {errors.email?.type === 'required' && <p className='text-danger'>Email is required</p>}
                                                {errors.email?.type === 'email' && <p className='text-danger'>Enter a valid Email</p>}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6}><label htmlFor="password">Password</label>
                                                <br />
                                                <input type='password' placeholder=' ********' name='password' ref={register} onChange={(e) => { setpassword(e.target.value) }} />
                                                {errors.password?.type === 'required' && <p className='text-danger'>Password is required</p>}
                                                {errors.password?.type === 'min' && <p className='text-danger'>Password need to be more than 4 character</p>}
                                                {errors.password?.type === 'max' && <p className='text-danger'>Password need to be lower than 16 character</p>}
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6}> <label htmlFor="Cpassword">Confirm Password</label>
                                                <br />
                                                <input type='password' placeholder=' ********' name='Cpassword' ref={register} onChange={(e) => { setCpassword(e.target.value) }} />
                                                {errors.Cpassword && <p className='text-danger'>Password did not match!</p>}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col><label htmlFor="phoneNo">Phone Number</label>
                                                <br />
                                                <input type='text' placeholder=' +44 0748299383' name='phoneNo' ref={register} onChange={(e) => { setphoneNo(e.target.value) }} />
                                                {errors.phoneNo?.type === 'typeError' && <p className='text-danger'>Phone Number is required and must be numeric</p>}
                                            </Col>
                                        </Row>
                                        <Col sm={6} md={6} lg={6}>
                                            <input type='submit' className='registerBtn' value='Create Account' />
                                        </Col>
                                    </form>
                                </div>
                            </Col>
                            <Col sm={12} md={5} lg={5}>
                                <div className="registerImg"><LazyLoadImage src={registerImg} height='100%' width='100%' /></div>
                            </Col>
                        </div>
                    </Container>
                </div>
                <Footer />
            </Fragment>
        </div>
    )
}

export default Register
