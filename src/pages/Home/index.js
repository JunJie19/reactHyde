import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '../../styles/home.css'
import { Grid, Paper } from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import searchImg from '../../img/search.svg'
import opportunityImg from '../../img/opportunities.svg'
import workshopImg from '../../img/workshop.svg'
import solutionImg from '../../img/solution.svg'
import networkImg from '../../img/team.svg'
import urbanPlanningImg from '../../img/urban planning.svg';
import medicalScienceImg from '../../img/medical science.svg';
import envinromentalSienceImg from '../../img/Envinromental science.svg';
import materialScienceImg from '../../img/material science.svg';
import renewableEnergyImg from '../../img/renewable energy.svg';
import marineEngineerImg from '../../img/marine engineer.svg';
import chemistryImg from '../../img/chemistry.svg';
import engineeringManufacturingImg from '../../img/engineering and manufacturing.svg';
import informationTechnologyImg from '../../img/information technology.svg';
import dataScienceImg from '../../img/data science.svg';
import businessManagementImg from '../../img/business management.svg';
import aiImg from '../../img/ai.svg';
import Footer from '../../components/Footer';

function index() {
    return (
        <Fragment>
            {/* Hero content */}
            <div className='hero-content'>

                <div className='hero_slogan'>
                    <h1>Unlock Potential</h1>
                    <h5>WITH THE FREE FLOW OF KNOWLEDGE SHARING</h5>
                    <Container>
                        <Row>
                            <Col sm={8} md={4} lg={4}> <b>Our Services <ArrowForwardIcon /> </b> </Col>
                            <Col sm={8} md={4} lg={4}><b>Featured Jobs <ArrowForwardIcon /> </b></Col>
                            <Col ></Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Our Services  */}
            <div className='services_Container'>
                <h1>Our Services</h1>
                <Grid container spacing={3} alignItems='center' justify='center'
                    style={{ width: '100%', margin: '0px' }} >
                    <Grid item xs={12} sm={6} md={4} lg={2}  >
                        <Paper className='servicesCard'>
                            <LazyLoadImage src={searchImg} width='100%' height='40px' />
                            <hr />
                        Unique Training
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Paper className='servicesCard'> <LazyLoadImage src={opportunityImg} width='100%' height='40px' />
                            <hr /> Flexible Job Opportunity</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Paper className='servicesCard'>
                            <LazyLoadImage src={workshopImg} width='100%' height='40px' />
                            <hr /> Consulting Possibilties</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Paper className='servicesCard'>
                            <LazyLoadImage src={solutionImg} width='100%' height='40px' />
                            <hr />
                        Bespoke Incubator Schemes for Potential Ideas</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Paper className='servicesCard'>
                            <LazyLoadImage src={networkImg} width='100%' height='40px' />
                            <hr /> Exclusive Networking with Knowledgeable Professionals</Paper>
                    </Grid>
                </Grid>
            </div>

            {/* Featured Job  */}
            <div className='job_Container'>
                <h1>Featured Jobs</h1>
                <Grid container spacing={3} alignItems='center' justify='center'
                    style={{ width: '100%', margin: '0px' }} >
                    <Grid item xs={12} sm={6} lg={3}  >
                        <Paper className='jobsCard'>
                            <header className='jobHeader'>Marketing</header>
                            <div className='jobBox'>
                                <div className='jobInfo'>
                                    <ul>
                                        <li>Salary</li>
                                        <li>8000</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>job type</li>
                                        <li>contract</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>start date</li>
                                        <li>01/10/1997</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>end date</li>
                                        <li>10/10/1997</li>
                                    </ul>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <div className="moreInfo">View More <ArrowForwardIcon /></div>
            </div>

            {/* why us */}
            <div className='whyUs_Container'>
                <h1>Why us</h1>
                <article>Hyde International Talent (HIT) Network provides an interactive and innovative platform for global talented individuals and organisations in scientific and technological fields to exchange knowledge, incubate their research ideas and source collaborative opportunities.</article>
                <p>What you can expect：</p>
                <p>● Join and interact in our high-tech community with thousands of talented individuals worldwide.</p>
                <p>● Share your ideas and expertise through international training and consulting opportunities for industry leaders.</p>
                <p>● Access to a wide range of technology-focused jobs.</p>
                <p>● Connect directly to providers of global research funding.</p>
                <p>● Participate in world-leading scientific projects.</p>
            </div>

            <div className="industry_Container">
                <h1>Main industry</h1>
                <Grid container spacing={3} alignItems='center' justify='center'
                    style={{ width: '100%', margin: '0px' }} >
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={urbanPlanningImg} width='100%' height='100px' />
                            <hr />
                        Urban Planning
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={medicalScienceImg} width='100%' height='100px' />
                            <hr />
                        Medical Science
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={envinromentalSienceImg} width='100%' height='100px' />
                            <hr />
                        Envinronmental Science
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={materialScienceImg} width='100%' height='100px' />
                            <hr />
                       Material Science
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={renewableEnergyImg} width='100%' height='100px' />
                            <hr />
                        Renewable Energy
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={marineEngineerImg} width='100%' height='100px' />
                            <hr />
                        Marine Engineering
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={chemistryImg} width='100%' height='100px' />
                            <hr />
                        Chemistry
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={engineeringManufacturingImg} width='100%' height='100px' />
                            <hr />
                        Engineering & Manufacturing
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={informationTechnologyImg} width='100%' height='100px' />
                            <hr />
                        Information Technology
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={dataScienceImg} width='100%' height='100px' />
                            <hr />
                        Data Science
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={businessManagementImg} width='100%' height='100px' />
                            <hr />
                        Business & Management
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <LazyLoadImage src={aiImg} width='100%' height='100px' />
                            <hr />
                        Artificial & Robotics
                    </Paper>
                    </Grid>
                </Grid>
            </div>

            <Footer />

        </Fragment >
    )
}

export default index

