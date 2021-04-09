import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/profile.css'
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Container } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import { placeholder } from '../../Assets/placeholder'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { countryList } from '../../Assets/countryList'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


function ExpertProfile() {

    const [sideNav, setsideNav] = useState(true)

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
                    <Container className='profileForm'>
                        <Row>
                            <h2>Education</h2>
                            <textarea name="education" className="form-control" rows='5' placeholder={placeholder.education}
                            />
                        </Row>

                        <Row>
                            <h2>Employment</h2>
                            <textarea name="working" className="form-control" rows='5' placeholder={placeholder.employment}
                            />
                        </Row>

                        <Row>
                            <h2>Patents</h2>
                            <textarea name="patent" id="patentID" className="form-control" rows='5' placeholder={placeholder.patents}
                            />
                        </Row>

                        <Row>
                            <h2>Publications</h2>
                            <textarea name="pd" className='form-control' rows='5' placeholder={placeholder.publications}
                            />
                        </Row>

                        <Row>
                            <h2>Field of Speciality</h2>
                            <textarea name="field_of_speciality" className='form-control' rows='5' placeholder={placeholder.field_of_speciality}
                            />
                        </Row>

                        <Row>
                            <h2>Awards</h2>
                            <textarea name="awards" className="form-control" rows='5' placeholder={placeholder.awards}
                            />
                        </Row>

                        <Row>
                            <h2>Scientific Contribution And Research Leadership</h2>
                            <textarea name="rmrp" className='form-control' rows='5' placeholder={placeholder.scientific_contribution_and_research_leadership}
                            />
                        </Row>

                        <Row>
                            <h2>Collaborative Project Proposal</h2>
                            <textarea name="cpp" className='form-control' rows='5' placeholder={placeholder.collaborative_project_proposal}
                            />
                        </Row>
                        <br />
                    </Container>

                    <div className="profile">
                        <div className="userimg"><AccountCircleIcon fontSize='large' />
                            <br />
                            <button>Edit</button>
                        </div>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <h3>Hello, <b>Name</b> </h3>
                        </Col>
                        <br />
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h4>Nationality</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <select name="nationality" className="form-control" required
                                >
                                    <option value=''>Please Select</option>
                                    {countryList.map((item, index) => {
                                        return <option key={`country-${index}`} value={item}>{item}</option>
                                    })}
                                </select>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h4>Contact Details</h4>
                                <PhoneEnabledIcon /><label>039128319238</label>
                            </Col>
                            <br/>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <MailIcon /><label> jun_jie-129312@gmail.com</label></Col>
                        </Row>
<br/>
                        <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                                <h4>Social Media Platform</h4>
                                <LinkedInIcon /><label>jacklinkedin</label>
                            </Col>
                            <br/>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <TwitterIcon /><label> jacktwitter</label></Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ExpertProfile
