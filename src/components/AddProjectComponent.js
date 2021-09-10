import React, { Fragment, useState } from 'react'
import '../styles/profile.css'
import Modal from 'react-bootstrap/Modal';
import { currencyList } from '../Assets/currencyList';
import { jobTypeList } from '../Assets/jobTypeList';
import { distanceList } from '../Assets/distanceList';
import { placeholder } from '../Assets/placeholder';
import { Col, Row } from 'react-bootstrap';
import '../styles/modal.css'
import axios from 'axios';




function AddProjectComponent() {
    const [lgShow, setLgShow] = useState(false);

     //project info useState
     const [jobTitle, setjobTitle] = useState("")
     const [jobType, setjobType] = useState("")
     const [employer, setemployer] = useState("")
     const [showEmployer, setshowEmployer] = useState("")
     const [location, setlocation] = useState("")
     const [Distance, setDistance] = useState("")
     const [currency, setcurrency] = useState("")
     const [salary, setsalary] = useState("")
     const [startDate, setstartDate] = useState("")
     const [endDate, setendDate] = useState("")
     const [organizationInfo, setorganizationInfo] = useState("")
     const [professionalField, setprofessionalField] = useState("")
     const [jobDescription, setjobDescription] = useState("")
     const [requiredExpertise, setrequiredExpertise] = useState("")
     const [responsibility, setresponsibility] = useState("")
     const [essentialSkills, setessentialSkills] = useState("")

     const addProject = () =>{
        axios.post('http://localhost:3001/hyde_international/addProject', {job_title: jobTitle, job_type: jobType, employer: employer, show_employer: showEmployer, location: location, distance: Distance, currency: currency, salary: salary, start_date: startDate, close_date: endDate, organization_info: organizationInfo, professional_field: professionalField, job_description: jobDescription, required_expertise: requiredExpertise, responsibility: responsibility, essential_skills: essentialSkills })
        .then((response) => {
            if (response) {
                alert("New Job Posted")
                window.location.reload(false)
            }
        })
     }

    return (
        <Fragment>
            <div className="globalSearch"><input type='text' placeholder='Global search' />
                <button className='apply-btn' onClick={setLgShow}>Add</button></div>


            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Project Form
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Row>
                            <Col>
                                <label>Job Title</label>
                                <input type='text' className="form-control" placeholder={placeholder.job_title} required onChange={(e)=>{setjobTitle(e.target.value)}}
                                />

                                <label>Job Type</label>
                                <select name="job_type" className="form-control" defaultValue='full time' required onChange={(e)=>{setjobType(e.target.value)}}
                                >
                                    {jobTypeList.map((item, index) => {
                                        return <option key={`job_type-${index}`} value={item}>{item}</option>
                                    })}
                                </select>
                            </Col>


                            <Col>
                                <label>Employer</label>
                                <input type='text' className="form-control" placeholder={placeholder.employer} required
                               onChange={(e)=>{setemployer(e.target.value)}} />

                                <label>Show Employer Name</label>
                                <select name='show_employer_name' className="form-control" defaultValue='Y' required
                                onChange={(e)=>{setshowEmployer(e.target.value)}}>
                                    <option value='Y'>Yes</option>
                                    <option value='N'>No</option>
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col>

                                <label>Start Date</label>
                                <input type="date" className="form-control" required
                                onChange={(e)=>{setstartDate(e.target.value)}}/>
                                <label>Close Date</label>
                                <input type="date" className="form-control" required
                                onChange={(e)=>{setendDate(e.target.value)}}/>
                            </Col>

                            <Col>
                                <label>Location</label>
                                <input type="text" className="form-control" placeholder={placeholder.location} required
                                onChange={(e)=>{setlocation(e.target.value)}}/>
                                <label>Distance</label>
                                <select className="form-control" defaultValue='remote' required
                                onChange={(e)=>{setDistance(e.target.value)}}>
                                    {distanceList.map((item, index) => {
                                        return <option key={`distance-${index}`} value={item}>{item}</option>
                                    })}
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={4} md={4} lg={4}>
                                <label>Currency</label>
                                <select name="currencylist" className="form-control" defaultValue='GBP' required
                                onChange={(e)=>{setcurrency(e.target.value)}}>
                                    {currencyList.map((item, index) => {
                                        return <option key={`currency-${index}`} value={item}>{item}</option>
                                    })}
                                </select>
                            </Col>
                            <Col sm={4} md={4} lg={4}>
                                <label>Salary</label>
                                <input type="text" className="form-control" placeholder="35,000 - 45,000" required
                                onChange={(e)=>{setsalary(e.target.value)}}/>
                            </Col>
                        </Row>

                        <Col>
                            <h2>Organization Infomation</h2>
                            <textarea name="organization_info" className="form-control" rows='5' placeholder={placeholder.organization_info}
                            onChange={(e)=>{setorganizationInfo(e.target.value)}}/>
                        </Col>

                        <Col>
                            <h2>Professional Field</h2>
                            <textarea name="professional_field" className="form-control" rows='5' placeholder={placeholder.professional_field}
                            onChange={(e)=>{setprofessionalField(e.target.value)}}/>
                        </Col>

                        <Col>
                            <h2>Job Description</h2>
                            <textarea name="job_description" className="form-control" rows='5' placeholder={placeholder.job_description}
                            onChange={(e)=>{setjobDescription(e.target.value)}}/>
                        </Col>

                        <Col>
                            <h2>Required Expertise</h2>
                            <textarea name="required_expertise" className="form-control" rows='5' placeholder={placeholder.required_expertise}
                           onChange={(e)=>{setrequiredExpertise(e.target.value)}} />
                        </Col>

                        <Col>
                            <h2>Responsibilities</h2>
                            <textarea name="responsibilities" id="projectID" className="form-control" rows='5' placeholder={placeholder.responsibility}
                           onChange={(e)=>{setresponsibility(e.target.value)}} />
                        </Col>

                        <Col>
                            <h2>Essential skills</h2>
                            <textarea name="essential_skills" id="patentID" className="form-control" rows='5' placeholder={placeholder.essential_skills}
                            onChange={(e)=>{setessentialSkills(e.target.value)}}/>
                        </Col>
                        <button className='apply-btn' type="submit" onClick={addProject}>Add Job</button>
                    </form>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default AddProjectComponent
