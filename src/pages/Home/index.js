import React, { Fragment, useEffect, useState } from 'react'
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
import axios from 'axios';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { Link } from 'react-router-dom'

function Home() {
    const [jobList, setjobList] = useState([])
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

    useEffect(() => {
        axiosInstance.get('hyde_international/jobList').then((response) => {
            if (response) {
                setjobList(response.data.data)
            }
        })
    }, [])


    const jobCard = jobList.slice(0, 4).map((val, index) => {
        return <>
            <Link to={`/hyde_international/jobList/${val.project_id}`}>
                <div className='jobCard' key={index} >
                    <header className='jobCardHeader'><h5 className='jobTitle'><BusinessCenterIcon />{val.job_title}</h5></header>
                    <div className='jobColDetials'><Row><Col><label>Salary</label>
                        <br />
                        {val.salary}</Col>
                        <Col><label>Job Type</label>
                            <br />
                            {val.job_type}</Col></Row></div>

                    <div className='jobColDetials'><Row><Col><label>Start Date</label>
                        <br />
                        {val.start_date}</Col>
                        <Col><label>Close Date</label>
                            <br />
                            {val.close_date}</Col></Row></div>
                </div>
            </Link>
        </>
    })



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
            <div className='home_jobContainer'>
                {jobCard}
            </div>
            <br />
            <div className="moreInfo"><Link to='/jobs' style={{ color: 'black', textDecoration: 'none' }}>View More <ArrowForwardIcon /></Link></div>

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
                            <Link to={`category/Urban-Planning`}>  <LazyLoadImage src={urbanPlanningImg} width='100%' height='100px' />
                                <hr />
                        Urban Planning</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Medical-Science`}> <LazyLoadImage src={medicalScienceImg} width='100%' height='100px' />
                                <hr />
                        Medical Science</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Environmental-Science`}> <LazyLoadImage src={envinromentalSienceImg} width='100%' height='100px' />
                                <hr />
                        Envinronmental Science</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Material-Science`}><LazyLoadImage src={materialScienceImg} width='100%' height='100px' />
                                <hr />
                       Material Science</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Renewable-Energy`}> <LazyLoadImage src={renewableEnergyImg} width='100%' height='100px' />
                                <hr />
                        Renewable Energy</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Marine-Engineering`} ><LazyLoadImage src={marineEngineerImg} width='100%' height='100px' />
                                <hr />
                        Marine Engineering</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Chemistry`}><LazyLoadImage src={chemistryImg} width='100%' height='100px' />
                                <hr />
                        Chemistry</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Engineer & Manufacturing`}> <LazyLoadImage src={engineeringManufacturingImg} width='100%' height='100px' />
                                <hr />
                        Engineering & Manufacturing</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Information-Technology`}><LazyLoadImage src={informationTechnologyImg} width='100%' height='100px' />
                                <hr />
                        Information Technology</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Data-Science`}><LazyLoadImage src={dataScienceImg} width='100%' height='100px' />
                                <hr />
                        Data Science
                        </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Business-Management`}> <LazyLoadImage src={businessManagementImg} width='100%' height='100px' />
                                <hr />
                        Business & Management</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        <Paper className='industryCard'>
                            <Link to={`category/Artificial & Robotics`}> <LazyLoadImage src={aiImg} width='100%' height='100px' />
                                <hr />
                        Artificial & Robotics</Link>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            <Footer />

        </Fragment >
    )
}

export default Home

