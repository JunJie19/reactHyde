import React, { Fragment, useState } from 'react'
import '../styles/profile.css'
import Modal from 'react-bootstrap/Modal';
import { currencyList } from '../Assets/currencyList';
import { jobTypeList } from '../Assets/jobTypeList';
import { distanceList } from '../Assets/distanceList';
import { placeholder } from '../Assets/placeholder';
import { Col, Row } from 'react-bootstrap';
import '../styles/modal.css'



function AddProjectComponent() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <Fragment>
            <div className="globalSearch"><input type='text' placeholder='Global search' />
                <button onClick={setLgShow}>Add</button></div>


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
                                <input type='text' className="form-control" placeholder={placeholder.job_title} required
                                />

                                <label>Job Type</label>
                                <select name="job_type" className="form-control" defaultValue='full time' required
                                >
                                    {jobTypeList.map((item, index) => {
                                        return <option key={`job_type-${index}`} value={item}>{item}</option>
                                    })}
                                </select>
                            </Col>


                            <Col>
                                <label>Employer</label>
                                <input type='text' className="form-control" placeholder={placeholder.employer} required
                                />

                                <label>Show Employer Name</label>
                                <select name='show_employer_name' className="form-control" defaultValue='Y' required
                                >
                                    <option value='Y'>Yes</option>
                                    <option value='N'>No</option>
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col>

                                <label>Start Date</label>
                                <input type="date" className="form-control" required
                                />
                                <label>Close Date</label>
                                <input type="date" className="form-control" required
                                />
                            </Col>

                            <Col>
                                <label>Location</label>
                                <input type="text" className="form-control" placeholder={placeholder.location} required
                                />
                                <label>Distance</label>
                                <select className="form-control" defaultValue='remote' required
                                >
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
                                >
                                    {currencyList.map((item, index) => {
                                        return <option key={`currency-${index}`} value={item}>{item}</option>
                                    })}
                                </select>
                                </Col>
                                <Col sm={4} md={4} lg={4}>
                                    <label>Salary</label>
                                <input type="text" className="form-control" placeholder="35,000 - 45,000" required
                                />
                            </Col>
                        </Row>

                        <Col>
                            <h2>Organization Infomation</h2>
                            <textarea name="organization_info" className="form-control" rows='5' placeholder={placeholder.organization_info}
                            />
                        </Col>

                        <Col>
                            <h2>Professional Field</h2>
                            <textarea name="professional_field" className="form-control" rows='5' placeholder={placeholder.professional_field}
                            />
                        </Col>

                        <Col>
                            <h2>Job Description</h2>
                            <textarea name="job_description" className="form-control" rows='5' placeholder={placeholder.job_description}
                            />
                        </Col>

                        <Col>
                            <h2>Required Expertise</h2>
                            <textarea name="required_expertise" className="form-control" rows='5' placeholder={placeholder.required_expertise}
                            />
                        </Col>

                        <Col>
                            <h2>Responsibilities</h2>
                            <textarea name="responsibilities" id="projectID" className="form-control" rows='5' placeholder={placeholder.responsibility}
                            />
                        </Col>

                        <Col>
                            <h2>Essential skills</h2>
                            <textarea name="essential_skills" id="patentID" className="form-control" rows='5' placeholder={placeholder.essential_skills}
                            />
                        </Col>
                        <button className='apply-btn' type="submit">Add Job</button>
                    </form>
                </Modal.Body>
            </Modal>
            <div className="table">
                <div className="dataHeader"></div>
                <div className="dataBody"></div>
            </div>
        </Fragment>
    )
}

export default AddProjectComponent
