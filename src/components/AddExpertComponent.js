import React, { Fragment, useState } from 'react'
import '../styles/profile.css'
import Modal from 'react-bootstrap/Modal';
import { placeholder } from '../Assets/placeholder'
import { countryList } from '../Assets/countryList'
import { Col, Row } from 'react-bootstrap';
import '../styles/modal.css'


function AddExpertComponent() {

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
                        Expert Registration Form
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>

                        <Row>
                            <Col>
                                <label>Title</label>
                                <select name="title" className="form-control" required
                                >
                                    <option value=''>Please Select</option>
                                    <option value='Mr'>Mr</option>
                                    <option value='Ms'>Ms</option>
                                    <option value='Miss'>Miss</option>
                                    <option value='Mrs'>Mrs</option>
                                    <option value='Dr'>Dr</option>
                                    <option value='Professor'>Professor</option>
                                </select>
                                <label>First Name</label>
                                <input type="text" className="form-control" required
                                />
                            </Col>


                            <Col>
                                <label>Last Name</label>
                                <input type="text" className="form-control" required
                                />
                                <label>Nationality </label>
                                <select name="nationality" className="form-control" required
                                >
                                    <option value=''>Please Select</option>
                                    {countryList.map((item, index) => {
                                        return <option key={`country-${index}`} value={item}>{item}</option>
                                    })}
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col>

                                <label>Email</label>
                                <input type="email" className="form-control" placeholder={placeholder.email} required
                                />
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="******" required
                                />
                            </Col>

                            <Col>
                                <label>Expertise</label>
                                <input type="text" className="form-control" placeholder={placeholder.expertise} required
                                />

                                <label>Category</label>
                                <input type="text" className="form-control" placeholder={placeholder.category} required
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <label>Phone number</label>
                                <input type="tel" className="form-control" placeholder={placeholder.phone_no}
                                />
                            </Col>
                        </Row>

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
                        <button type="submit" className='apply-btn'>Add User</button>
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

export default AddExpertComponent
