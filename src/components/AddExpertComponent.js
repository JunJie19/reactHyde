import React, { Fragment, useState } from 'react'
import '../styles/profile.css'
import Modal from 'react-bootstrap/Modal';
import { placeholder } from '../Assets/placeholder'
import { countryList } from '../Assets/countryList'
import { Col, Row } from 'react-bootstrap';
import '../styles/modal.css'
import axios from 'axios';


function AddExpertComponent(e) {

    const [lgShow, setLgShow] = useState(false);

    //add expert infor
    const [title, setTitle] = useState("")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [password, setpassword] = useState("")
    const [nationality, setNationality] = useState("")
    const [email, setEmail] = useState("")
    const [expertise, setExpertise] = useState("")
    const [category, setCategory] = useState("")
    const [phoneNo, setphoneNo] = useState("")
    const [education, setEducation] = useState("")
    const [emlpoyment, setEmployment] = useState("")
    const [patents, setpatents] = useState("")
    const [publications, setpublications] = useState("")
    const [fieldOfSpeciality, setfieldOfSpeciality] = useState("")
    const [awards, setawards] = useState("")
    const [scientificContribution, setscientificContribution] = useState("")
    const [collaborativeProject, setcollaborativeProject] = useState("")

    const addExpert = () => {
        //axios added
        axios.post('http://localhost:3001/hyde_international/addExpert', { title: title, first_name: fName, last_name: lName, nationality: nationality, email: email, password: password, expertise: expertise, category: category, phoneNo: phoneNo, education: education, employment: emlpoyment, patents: patents, publications: publications, fieldSpeciality: fieldOfSpeciality, awards: awards, scientific_contribution_and_research_leadership: scientificContribution, collaborative_project_proposal: collaborativeProject })
            .then((response) => {
                if (response) {
                    alert("New Expert Added")
                    window.location.reload(false)
                }
            })
    }

    return (
        <Fragment>
            <button className='apply-btn' onClick={setLgShow}>Add</button>


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
                                <select name="title" className="form-control" onChange={(e) => { setTitle(e.target.value) }} required
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
                                <input type="text" className="form-control" onChange={(e) => { setfName(e.target.value) }} required
                                />
                            </Col>


                            <Col>
                                <label>Last Name</label>
                                <input type="text" className="form-control" onChange={(e) => { setlName(e.target.value) }} required
                                />
                                <label>Nationality </label>
                                <select name="nationality" className="form-control" required onChange={(e) => { setNationality(e.target.value) }}
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
                                <input type="email" className="form-control" placeholder={placeholder.email} required onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="******" required onChange={(e) => { setpassword(e.target.value) }}
                                />
                            </Col>

                            <Col>
                                <label>Expertise</label>
                                <input type="text" className="form-control" placeholder={placeholder.expertise} required onChange={(e) => { setExpertise(e.target.value) }}
                                />

                                <label>Category</label>
                                <input type="text" className="form-control" placeholder={placeholder.category} required onChange={(e) => { setCategory(e.target.value) }}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <label>Phone number</label>
                                <input type="tel" className="form-control" placeholder={placeholder.phone_no} onChange={(e) => { setphoneNo(e.target.value) }}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <h2>Education</h2>
                            <textarea name="education" className="form-control" rows='5' placeholder={placeholder.education} onChange={(e) => { setEducation(e.target.value) }}
                            />
                        </Row>

                        <Row>
                            <h2>Employment</h2>
                            <textarea name="working" className="form-control" rows='5' placeholder={placeholder.employment} onChange={(e) => { setEmployment(e.target.value) }}
                            />
                        </Row>

                        <Row>
                            <h2>Patents</h2>
                            <textarea name="patent" id="patentID" className="form-control" rows='5' placeholder={placeholder.patents} onChange={(e) => { setpatents(e.target.value) }}
                            />
                        </Row>

                        <Row>
                            <h2>Publications</h2>
                            <textarea name="pd" className='form-control' rows='5' placeholder={placeholder.publications} onChange={(e) => { setpublications(e.target.value) }}
                            />
                        </Row>

                        <Row>
                            <h2>Field of Speciality</h2>
                            <textarea name="field_of_speciality" className='form-control' rows='5' placeholder={placeholder.field_of_speciality} onChange={(e) => { setfieldOfSpeciality(e.target.value) }}
                            />
                        </Row>

                        <Row>
                            <h2>Awards</h2>
                            <textarea name="awards" className="form-control" rows='5' placeholder={placeholder.awards} onChange={(e) => { setawards(e.target.value) }}
                            />
                        </Row>

                        <Row>
                            <h2>Scientific Contribution And Research Leadership</h2>
                            <textarea name="rmrp" className='form-control' rows='5' placeholder={placeholder.scientific_contribution_and_research_leadership}
                                onChange={(e) => { setscientificContribution(e.target.value) }} />
                        </Row>

                        <Row>
                            <h2>Collaborative Project Proposal</h2>
                            <textarea name="cpp" className='form-control' rows='5' placeholder={placeholder.collaborative_project_proposal}
                                onChange={(e) => { setcollaborativeProject(e.target.value) }} />
                        </Row>
                        <button type="submit" className='apply-btn' onClick={addExpert}>Add User</button>
                    </form>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default AddExpertComponent
