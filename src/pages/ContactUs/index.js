import { Button, Grid, TextField } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Form, Row } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from '../../components/Footer'
import contactUs from '../../img/contact_2_cropped.png'
import '../../styles/contactus.css'

export default function index() {
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
                            <Form>
                                <TextField id='Fname' label='First Name' variant="outlined" className='formInfo' />
                                <br />
                                <TextField id='Lname' label='Last Name' variant="outlined" className='formInfo' />
                                <br />
                                <TextField id='Email' label='Email Address' variant="outlined" className='formInfo' />
                                <br />
                                <TextField id='Subject' label='Subject' variant="outlined" className='formInfo' />
                                <br />
                                <TextField id="outlined-textarea" label='Message' variant="outlined" className='formContent' multiline rows={5} />
                                <br />
                                <Button variant="contained" color="primary">
                                    Primary
                                    </Button>
                            </Form>
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
