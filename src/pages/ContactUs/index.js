import { Grid } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { Row } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from '../../components/Footer'
import contactUs from '../../img/contact_2_cropped.png'
import '../../styles/contactus.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactusSchema } from '../../components/validationSchema'
import Axios from 'axios'

export default function ContactUs() {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(contactusSchema)
    })

    const onSubmit = () => {
        Axios.post('http://localhost:3001/hyde_international/contactus', { firstName: fName, lastName: lName, email: email, subject: subject, message: message }).then(() => {
            alert('Message sent')
        })
    }



    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setemail] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');

    return (
        <Fragment>
            {/* contact us */}
            <div className="contactUs_Container">
                <Grid container spacing={3} alignItems='center' justify='center'
                    style={{ width: '100%', margin: '0px' }} >
                    <Row>
                        <Grid item xs={12} sm={12} md={8} lg={8}  >
                            <h1>Contact Us</h1>
                            <h4>Let us know we can help you.</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type='text' className='formInfo' placeholder='First Name' ref={register} name="firstName" onChange={(e) => setfName(e.target.value)} />
                                {errors.firstName?.type === 'required' && <p className='text-danger'>First Name is required</p>}
                                <br />
                                <input type='text' className='formInfo' placeholder='Last Name' ref={register} name="lastName" onChange={(e) => setlName(e.target.value)} />
                                {errors.lastName?.type === 'required' && <p className='text-danger'>Last Name is required</p>}
                                <br />
                                <input type='email' className='formInfo' placeholder='Email' ref={register} name="email" onChange={(e) => setemail(e.target.value)} />
                                {errors.email?.type === 'required' && <p className='text-danger'>Email is required</p>}
                                {errors.email?.type === 'email' && <p className='text-danger'>Enter a valid Email</p>}
                                <br />
                                <input type='text' className='formInfo' placeholder='Subject' ref={register} name="subject" onChange={(e) => setsubject(e.target.value)} />
                                {errors.subject?.type === 'required' && <p className='text-danger'>Subject is required</p>}
                                <br />
                                <input type='text' className='formInfo' placeholder='Message' ref={register} name="message" onChange={(e) => setmessage(e.target.value)} />
                                {errors.message?.type === 'required' && <p className='text-danger'>Message is required</p>}
                                <br />
                                <input type='submit' className='sendBtn' />
                            </form>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4}  >
                            <LazyLoadImage src={contactUs} width='100%' height='100%' />
                        </Grid>
                    </Row>
                </Grid>
            </div>

            <Footer />
        </Fragment>
    )
}
