import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/profile.css'
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import axios from 'axios';
import { Col, Modal, Row } from 'react-bootstrap'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

function ExpertApplication() {

    const [sideNav, setsideNav] = useState(true)
    const [expertJobApplication, setexpertJobApplication] = useState([])
    const [pageNumber, setpageNumber] = useState(0)
    const [lgShow, setLgShow] = useState(false);
    const [inDex, setinDex] = useState([])

    const userPerPage = 10
    const pageVisited = pageNumber * userPerPage

    useEffect(() => {
        axios.get('https://hitalentsapp.herokuapp.com/hyde_international/fetchProfile_projectMatching/expertJob').then((response) => {
            if (response) {
                setexpertJobApplication(response.data.data)
            }
        })
    }, [])

    const cancelApplication = (job_id, expert_id) => {
        let Confirm = window.confirm("Are you sure to cancel this application?")
        if (Confirm === true) {
            axios.delete(`https://hitalentsapp.herokuapp.com/hyde_international/deleteProjectMacthing/${job_id}/${expert_id}`, { project_id: job_id, expert_id: expert_id }).then((response) => {
                if (response) {
                    alert("Job Application has cancel.")
                    window.location.reload(false)
                }
            })
        } else {
            alert("Cancel")
        }
    }

    const displayjobApplicationCard = expertJobApplication.slice(pageVisited, pageVisited + userPerPage).map((val, index) => {
        return <>
            <div className='jobCard' onClick={() => { setLgShow(!lgShow) 
                setinDex(val) }} >
                <header className='jobCardHeader'><h5 className='jobTitle' key={index}><BusinessCenterIcon />{val.job_title}</h5></header>
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
                        {val.close_date}</Col></Row>
                </div>
                <Row><Col xs={6} sm={6} md={6} lg={6}><button>Download</button></Col>
                    <Col xs={6} sm={6} md={6} lg={6}><button onClick={() => {
                        cancelApplication(val.project_id, val.expert_id)
                    }}>Cancel Application</button></Col></Row>
            </div>

        </>
    })

    const pageCount = Math.ceil(expertJobApplication.length / userPerPage)

    const changePage = ({ selected }) => {
        setpageNumber(selected)
    }

    const displayProjectExpert = (project_id) => {
        setLgShow(!lgShow)
        axios.get(`/hyde_international/fetchProjectMacthing/${project_id}`).then((response) => {
            if (response) {
                console.log(response.data.data)
                setinDex(response.data.data)
            }
        })
    }

    return (
        <Fragment>
            <div className="expertContainer">
                <div className={sideNav ? "hidden" : "sideBar"}>
                    {sideNav ?
                        <div className='collapseIcon'><button><ListOutlinedIcon onClick={() => setsideNav(!sideNav)} /></button>
                            <li><Link to='/mgt/expert_profile'><PersonIcon /> </Link></li>
                            <li><Link to='/mgt/expert_application'><ListAltIcon /></Link> </li>
                        </div> :
                        <div><button><CloseOutlinedIcon onClick={() => setsideNav(!sideNav)} /></button>
                            <li><Link to='/mgt/expert_profile'><PersonIcon /> Profile</Link></li>
                            <li><Link to='/mgt/expert_application'><ListAltIcon />My Application</Link> </li>
                        </div>}</div>

                <div className={sideNav ? "fulluserProfile" : "userProfile"} >
                    <div className="jobapplicationCard">
                        {displayjobApplicationCard}
                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Project Information
    </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <Col>
                                        <Row xs={12} sm={12} md={12} lg={12}>
                                            <label>Project ID</label>
                                            <p>{inDex.project_id}</p>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row xs={4} sm={4} md={4} lg={4}>
                                            <label>Job Title</label>
                                            <p>{inDex.job_title}</p>
                                            <label>Job Type</label>
                                            <p>{inDex.job_type}</p>
                                        </Row>


                                        <Row xs={4} sm={4} md={4} lg={4}>
                                            <label>Employer</label>
                                            <p>{inDex.show_employer_name}</p>
                                        </Row>
                                    </Col>

                                    <Col>
                                        <Row xs={4} sm={4} md={4} lg={4}>
                                            <label>Location</label>
                                            <p>{inDex.location}</p>
                                            <label>Distance</label>
                                            <p>{inDex.distance}</p>
                                        </Row>

                                        <Row xs={4} sm={4} md={4} lg={4}>
                                            <label>Currency</label>
                                            <p>{inDex.currency}</p>
                                            <label>salary</label>
                                            <p>{inDex.salary}</p>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row xs={4} sm={4} md={4} lg={4}>
                                            <label>Start Date</label>
                                            <p>{inDex.start_date}</p>
                                            <label>End Date</label>
                                            <p>{inDex.close_date}</p>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <h2>Organization Infomation</h2>
                                        <p>{inDex.organization_info}</p>
                                    </Col>

                                    <Col>
                                        <h2>Professional Field</h2>
                                        <p>{inDex.professional_field}</p>
                                    </Col>

                                    <Col>
                                        <h2>Job Description</h2>
                                        <p>{inDex.job_description}</p>
                                    </Col>

                                    <Col>
                                        <h2>Required Expertise</h2>
                                        <p>{inDex.required_expertise}</p>
                                    </Col>

                                    <Col>
                                        <h2>Responsibility</h2>
                                        <p>{inDex.responsibility}</p>
                                    </Col>

                                    <Col>
                                        <h2>Essential Skills</h2>
                                        <p>{inDex.essential_skills}</p>
                                    </Col>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ExpertApplication
