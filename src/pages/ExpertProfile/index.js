import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/profile.css'
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Container } from '@material-ui/core';
import { Col } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { countryList } from '../../Assets/countryList'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import axios from 'axios';


function ExpertProfile() {

    useEffect(() => {
        axios.get('https://hitalentsapp.herokuapp.com/hyde_international/profile').then((response) => {
            if (response) {
                // console.log(response)
                setfName(response.data.data[0].first_name)
                setlName(response.data.data[0].last_name)
                setemail(response.data.data[0].email)
                setNationality(response.data.data[0].nationality)
                setEducation(response.data.data[0].education)
                setphoneNo(response.data.data[0].phone_no)
                setEmployment(response.data.data[0].employment)
                setfieldOfSpeciality(response.data.data[0].field_of_speciality)
                setscientificContribution(response.data.data[0].scientific_contribution_and_research_leadership)
                setcollaborativeProject(response.data.data[0].collaborative_project_proposal)
                setlinkedIn(response.data.data[0].linkedin)
                settwitter(response.data.data[0].twitter)
            }
        })
    }, [])

    const [sideNav, setsideNav] = useState(true)
    const [edit, setedit] = useState(false)

    //edit infor
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [email, setemail] = useState('')
    const [nationality, setNationality] = useState("")
    const [linkedIn, setlinkedIn] = useState("")
    const [twitter, settwitter] = useState("")
    const [phoneNo, setphoneNo] = useState("")
    const [education, setEducation] = useState("")
    const [emlpoyment, setEmployment] = useState("")
    const [patents, setpatents] = useState("")
    const [publications, setpublications] = useState("")
    const [fieldOfSpeciality, setfieldOfSpeciality] = useState("")
    const [awards, setawards] = useState("")
    const [scientificContribution, setscientificContribution] = useState("")
    const [collaborativeProject, setcollaborativeProject] = useState("")

    const handleEdit = () => {
        setedit(true)
    }

    const handleSave = () => {
        //axios post
        axios.put('http://localhost:3001/hyde_international/updateprofile', { nationality: nationality, phoneNo: phoneNo, linkedin: linkedIn, twitter: twitter, education: education, employment: emlpoyment, patents: patents, publications: publications, field_of_speciality: fieldOfSpeciality, awards: awards, scientific_contribution_and_research_leadership: scientificContribution, collaborative_project_proposal: collaborativeProject }).then((response) => {
            if (response) {
                alert("Save")
                setedit(false)
                window.location.reload(false)
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
                    <Container className='profileForm'>
                        <Col>
                            <h2>Education</h2>
                            {edit ? <textarea name="education" className="form-control" Cols='5' value={education} onChange={(e) => {
                                setEducation(e.target.value)
                            }} /> : <p className="profile-content">{education}</p>}
                        </Col>

                        <Col>
                            <h2>Employment</h2>
                            {edit ? <textarea name="working" className="form-control" Cols='5' value={emlpoyment}
                                onChange={(e) => { setEmployment(e.target.value) }} /> : <p className="profile-content">{emlpoyment}</p>}
                        </Col>

                        <Col>
                            <h2>Field of Speciality</h2>
                            {edit ? <textarea name="field_of_speciality" className='form-control' Cols='5' value={fieldOfSpeciality}
                                onChange={(e) => { setfieldOfSpeciality(e.target.value) }} /> : <p className="profile-content">{fieldOfSpeciality}</p>}
                        </Col>
                        <Col>
                            <h2>Patents</h2>
                            {edit ? <textarea name="patent" id="patentID" className="form-control" Cols='5' value={patents}
                                onChange={(e) => { setpatents(e.target.value) }} /> : <p className="profile-content">{patents}</p>}
                        </Col>

                        <Col>
                            <h2>Publications</h2>
                            {edit ? <textarea name="pd" className='form-control' Cols='5' value={publications}
                                onChange={(e) => { setpublications(e.target.value) }} /> : <p className="profile-content">{publications}</p>}
                        </Col>

                        <Col>
                            <h2>Awards</h2>
                            {edit ? <textarea name="awards" className="form-control" Cols='5' value={awards} onChange={(e) => { setawards(e.target.value) }}
                            /> : <p className="profile-content">{awards}</p>}
                        </Col>

                        <Col>
                            <h2>Scientific Contribution And Research Leadership</h2>
                            {edit ? <textarea name="rmrp" className='form-control' Cols='5' value={scientificContribution}
                                onChange={(e) => { setscientificContribution(e.target.value) }} /> : <p className="profile-content">{scientificContribution}</p>}
                        </Col>

                        <Col>
                            <h2>Collaborative Project Proposal</h2>
                            {edit ? <textarea name="cpp" className='form-control' Cols='5' value={collaborativeProject}
                                onChange={(e) => { setcollaborativeProject(e.target.value) }} /> : <p className="profile-content">{collaborativeProject}</p>}
                        </Col>
                        <br />
                    </Container>

                    <div className="profile">
                        <div className="userimg"><AccountCircleIcon fontSize='large' />
                            <br />
                            {edit ? <button onClick={handleSave}>Save</button> : <button onClick={handleEdit
                            }>Edit</button>}
                        </div>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <h3>Hello, <span><b>{fName} {lName}</b> </span></h3>
                        </Col>
                        <br />
                        <Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h4>Nationality</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                {edit ? <select name="nationality" className="form-control" value={nationality} required onChange={(e) => { setNationality(e.target.value) }}
                                >
                                    <option value=''>Please Select</option>
                                    {countryList.map((item, index) => {
                                        return <option key={`country-${index}`} value={item}>{item}</option>
                                    })}
                                </select> : <p>{nationality}</p>}
                            </Col>
                        </Col>
                        <br />
                        <Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h4>Contact Details</h4>
                                <PhoneEnabledIcon />
                                {edit ? <input type='text' value={phoneNo} onChange={(e) => { setphoneNo(e.target.value) }} /> : <label>{phoneNo}</label>}
                            </Col>
                            <br />
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <MailIcon />
                                <label> {email}</label>
                            </Col>
                        </Col>
                        <br />
                        <Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h4>Social Media Platform</h4>
                                <LinkedInIcon />
                                {edit ? <input type='text' value={linkedIn} onChange={(e) => { setlinkedIn(e.target.value) }} /> : <label>{linkedIn}</label>}
                            </Col>
                            <br />
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <TwitterIcon />
                                {edit ? <input type='text' value={twitter} onChange={(e) => { settwitter(e.target.value) }} /> : <label> {twitter}</label>}</Col>
                        </Col>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ExpertProfile
