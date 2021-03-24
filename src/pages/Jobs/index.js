import { Grid, Slider, TextField } from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import { Col, Nav, Navbar, Row } from 'react-bootstrap'
import '../../styles/jobs.css'

export default class index extends Component {
    render() {

        function valuetext(value) {
            return `${value}`;
        }
        return (
            <Fragment>

                {/* Banner */}
                <div className="jobsBanner">
                    <Navbar collapseOnSelect="lg" bg="transparent" variant="dark" >
                        <Navbar.Brand href="#home" className='heroLogo'>HI Talents</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='rightNav'>
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav className='navBar_font'>
                                <Nav.Link href="#deets">
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#memes">
                                    Jobs
                                </Nav.Link>
                                <Nav.Link href="#memes">
                                    About Us
                                </Nav.Link>
                                <Nav.Link href="#memes">
                                    Contact Us
                                </Nav.Link>
                                <Nav.Link href="#memes">
                                    Login
                                </Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                    <Row>
                        <Col></Col>
                        <Col><h1>Browse jobs by location and category</h1>
                            <h5>Start Applying to land your dearm job.</h5>
                        </Col>
                    </Row>
                </div>

                {/* job Search */}
                <div className="job_Container">
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Search Job Title, Job Types, Industry, Salary" variant="outlined" className='jobSearch' />
                        <div className="jobFilter">

                            <Grid container spacing={3} alignItems='center' justify='center'
                                style={{ width: '100%', margin: '0px' }} >
                                <Row>
                                    <Grid item xs={12} sm={12} md={4} lg={4}>
                                        <label htmlFor="salary">Salary</label>
                                        <br />
                                        <Slider
                                            defaultValue={0}
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider-small-steps"
                                            step={1}
                                            marks
                                            min={0}
                                            max={500000}
                                            valueLabelDisplay="auto"
                                            style={{width:'300px'}}
                                        />
                                    </Grid>
                                </Row>
                            </Grid>

                        </div>
                    </form>
                </div>


            </Fragment>
        )
    }
}
