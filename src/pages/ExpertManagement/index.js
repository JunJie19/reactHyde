import React, { Fragment, useEffect, useState } from 'react'
import '../../styles/profile.css'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Link } from 'react-router-dom'
import AddExpertModal from '../../components/AddExpertComponent'
import ReactPaginate from 'react-paginate'
import axios from 'axios';
import { Col, Modal, Row } from 'react-bootstrap';
import { countryList } from '../../Assets/countryList'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import jsPDF from 'jspdf'
import ReactHtmlParser from 'react-html-parser'

function ExpertManagement() {
    const [sideNav, setsideNav] = useState(true)
    const [expertData, setexpertData] = useState([])
    const [lgShow, setLgShow] = useState(false);
    const [inDex, setinDex] = useState("")
    const [edit, setedit] = useState(false)
    const [pageNumber, setpageNumber] = useState(0)

    //edit infor
    const [title, setTitle] = useState("")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
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

    const [searchTerm, setsearchTerm] = useState("")
    const [FilterBar, setFilterBar] = useState(null)

    const [filtericon, setfiltericon] = useState(false)

    //filter bar 
    if (FilterBar !== null) {
        expertData.sort((a, b) => {
            if (a[FilterBar] < b[FilterBar]) {
                return -1;
            }
            if (a[FilterBar] > b[FilterBar]) {
                return 1;
            }
            return 0;
        });
    }

    const userPerPage = 10
    const pageVisited = pageNumber * userPerPage

    useEffect(() => {
        axios.get('https://hitalentsapp.herokuapp.com/hyde_international/fetchExpertData').then((response) => {
            if (response) {
                console.log(response.data.data)
                setexpertData(response.data.data)
            }
        })
    }, [])

    const handleEdit = () => {
        setedit(true)
    }

    const handleSave = (id) => {
        //axios update
        axios.put('https://hitalentsapp.herokuapp.com/hyde_international/editExpert', { expert_id: id, title: title, first_name: fName, last_name: lName, nationality: nationality, email: email, expertise: expertise, category: category, phoneNo: phoneNo, education: education, employment: emlpoyment, patents: patents, publications: publications, fieldSpeciality: fieldOfSpeciality, awards: awards, scientific_contribution_and_research_leadership: scientificContribution, collaborative_project_proposal: collaborativeProject })
            .then((response) => {
                if (response) {
                    alert("Save")
                    setedit(false)
                    window.location.reload(false)
                }
            })
    }

    const handleDelete = (expertId) => {
        let Confirm = window.confirm("Are you sure to remove this data?")
        if (Confirm === true) {
            //axios remove
            axios.delete(`https://hitalentsapp.herokuapp.com/hyde_international/deleteExpert/${expertId}`, { expert_id: expertId }).then((response) => {
                if (response) {
                    alert("Data removed.")
                    window.location.reload(false)
                }
            })
        } else {
            alert("Cancel")
        }

    }

    const pdfGenerator = (expertID) => {
        axios.get(`https://hitalentsapp.herokuapp.com/hyde_international/download_Expert/${expertID}`, { expert_id: expertID }).then((response) => {
            if (response) {
                // //firstly generate jspdf function
                var pdfDoc = new jsPDF("p", 'pt', 'a4')

                pdfDoc.html(document.querySelector('#pdfInfo'), {
                    callback: function (pdf) {
                        //removing the empty pages
                        //however it has a bugs such as content does not fully shown
                        // var pageCount = pdf.internal.getNumberOfPages();
                        // pdf.deletePage(pageCount)
                        pdf.save(`${fName}_${lName}___${expertID}.pdf`)
                    }, x: 20, y: 15
                })
            }
        })
    }

    const displayUser = expertData
        .filter((val => {
            if (searchTerm === "") {
                return val
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        })).slice(pageVisited, pageVisited + userPerPage).map((val, index) => {
            return <>
                <div className='dataBody'>
                    <div>{val.expert_id}</div>
                    <div>{val.title}</div>
                    <div>{val.first_name}</div>
                    <div>{val.last_name}</div>
                    <div>{val.expertise}</div>
                    <div>{val.category}</div>
                    <button className='apply-btn' onClick={() => {
                        setinDex(val)
                        setLgShow(!lgShow)
                        setTitle(val.title)
                        setfName(val.first_name)
                        setlName(val.last_name)
                        setNationality(val.nationality)
                        setEmail(val.email)
                        setExpertise(val.expertise)
                        setCategory(val.category)
                        setphoneNo(val.phone_no)
                        setEducation(val.education)
                        setEmployment(val.employment)
                        setpatents(val.patents)
                        setpublications(val.publications)
                        setscientificContribution(val.scientific_contribution_and_research_leadership)
                        setfieldOfSpeciality(val.field_of_speciality)
                        setawards(val.awards)
                        setcollaborativeProject(val.collaborative_project_proposal)
                    }}>More info</button>
                </div>

                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Expert Information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id='pdfInfo'>
                            <Col>
                                <Row xs={12} sm={12} md={12} lg={12}>
                                    <label>Expert ID</label>
                                    <p >{val.expert_id}</p>
                                </Row>
                            </Col>
                            <Col>
                                <Row xs={4} sm={4} md={4} lg={4}>
                                    <label>Title</label>
                                    {edit ? <select name="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}
                                    >
                                        <option value=''>Please Select</option>
                                        <option value='Mr'>Mr</option>
                                        <option value='Ms'>Ms</option>
                                        <option value='Miss'>Miss</option>
                                        <option value='Mrs'>Mrs</option>
                                        <option value='Dr'>Dr</option>
                                        <option value='Professor'>Professor</option>
                                    </select> : <p style={{ fontSize: '14px' }}>{title}</p>}
                                    <label>First Name</label>
                                    {edit ? <input type='text' className='form-control' value={fName} onChange={(e) => setfName(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{fName}</p>}
                                </Row>


                                <Row xs={4} sm={4} md={4} lg={4}>
                                    <label>Last Name</label>
                                    {edit ? <input type='text' className='form-control' value={lName} onChange={(e) => setlName(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{lName}</p>}
                                    <label>Nationality </label>
                                    {edit ? <select name="nationality" className="form-control" value={nationality} onChange={(e) => setNationality(e.target.value)}
                                    >
                                        <option value=''>Please Select</option>
                                        {countryList.map((item, index) => {
                                            return <option key={`country-${index}`} value={item}>{item}</option>
                                        })}
                                    </select> : <p style={{ fontSize: '14px' }}>{nationality}</p>}
                                </Row>
                            </Col>

                            <Col>
                                <Row xs={4} sm={4} md={4} lg={4}>
                                    <label>Email</label>
                                    {edit ? <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} /> : <p style={{ fontSize: '10px' }}>{email}</p>}
                                    <label>Expertise</label>
                                    {edit ? <input type='text' className='form-control' value={expertise} onChange={(e) => setExpertise(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{expertise}</p>}
                                </Row>

                                <Row xs={4} sm={4} md={4} lg={4}>
                                    <label>Category</label>
                                    {edit ? <input type='text' className='form-control' value={category} onChange={(e) => setCategory(e.target.value)} /> : <p>{category}</p>}
                                    <label>Phone number</label>
                                    {edit ? <input type='text' className='form-control' value={phoneNo} onChange={(e) => setphoneNo(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{phoneNo}</p>}

                                </Row>
                            </Col>
                            <Col>
                                <h2 style={{ fontSize: '1.6rem' }}>Education</h2>
                                {edit ? <textarea className='form-control' rows='5' value={education} onChange={(e) => setEducation(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{ReactHtmlParser(education)}</p>}
                            </Col>

                            <Col>
                                <h2 style={{ fontSize: '1.6rem' }}>Employment</h2>
                                {edit ? <textarea className='form-control' rows='5' value={emlpoyment} onChange={(e) => setEmployment(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{ReactHtmlParser(emlpoyment)}</p>}
                            </Col>

                            <Col>
                                <h2 style={{ fontSize: '1.6rem' }}>Patents</h2>
                                {edit ? <textarea className='form-control' rows='5' value={patents} onChange={(e) => setpatents(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{ReactHtmlParser(patents)}</p>}
                            </Col>

                            <Col>
                                <h2 style={{ fontSize: '1.6rem' }}>Publications</h2>
                                {edit ? <textarea className='form-control' rows='5' value={publications} onChange={(e) => setpublications(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{ReactHtmlParser(publications)}</p>}
                            </Col>

                            <Col>
                                <h2 style={{ fontSize: '1.6rem' }}>Field of Speciality</h2>
                                {edit ? <textarea className='form-control' rows='5' value={fieldOfSpeciality} onChange={(e) => setfieldOfSpeciality(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{ReactHtmlParser(fieldOfSpeciality)}</p>}
                            </Col>

                            <Col>
                                <h2 style={{ fontSize: '1.6rem' }}>Awards</h2>
                                {edit ? <textarea className='form-control' rows='5' value={awards} onChange={(e) => setawards(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{ReactHtmlParser(awards)}</p>}
                            </Col>

                            <Col>
                                <h2 style={{ fontSize: '1.6rem' }}>Scientific Contribution And Research Leadership</h2>
                                {edit ? <textarea className='form-control' rows='5' value={scientificContribution} onChange={(e) => setscientificContribution(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{ReactHtmlParser(scientificContribution)}</p>}
                            </Col>

                            <Col>
                                <h2 style={{ fontSize: '1.6rem' }}>Collaborative Project Proposal</h2>
                                {edit ? <textarea className='form-control' rows='5' value={collaborativeProject} onChange={(e) => setcollaborativeProject(e.target.value)} /> : <p style={{ fontSize: '14px' }}>{ReactHtmlParser(collaborativeProject)}</p>}
                            </Col>
                        </form>
                    </Modal.Body>
                    <Modal.Footer >
                        {edit ? <button type="button" className='apply-btn' onClick={() => handleSave(inDex.expert_id)}>Save</button> : <button type="submit" className='apply-btn' onClick={handleEdit}>Edit</button>}
                        <button type="button" className='apply-btn' onClick={() => handleDelete(inDex.expert_id)}>Delete</button>
                        <button type="button" className='apply-btn' onClick={() => pdfGenerator(inDex.expert_id)}>Download</button>
                    </Modal.Footer>
                </Modal>
            </>
        })

    const pageCount = Math.ceil(expertData.length / userPerPage)

    const changePage = ({ selected }) => {
        setpageNumber(selected)
    }

    return (
        <Fragment>
            <div className="adminContainer">
                <div className={sideNav ? "hidden" : "sideBar"}>
                    {sideNav ?
                        <div className='collapseIcon'><button><ListOutlinedIcon onClick={() => setsideNav(!sideNav)} /></button>
                            <li><Link to='/mgt/admin_dashboard'><InsertChartOutlinedIcon /> </Link></li>
                            <li><Link to='/mgt/expert_management'><StorageOutlinedIcon /></Link> </li>
                            <li><Link to='/mgt/project_management'><FolderOutlinedIcon /></Link> </li>
                            <li><Link to='/mgt/project_matching'><SupervisorAccountOutlinedIcon /></Link></li> </div> :
                        <div><button><CloseOutlinedIcon onClick={() => setsideNav(!sideNav)} /></button>
                            <li><Link to='/mgt/admin_dashboard'><InsertChartOutlinedIcon /> Dashboard</Link></li>
                            <li><Link to='/mgt/expert_management'><StorageOutlinedIcon />Expert Management</Link> </li>
                            <li><Link to='/mgt/project_management'><FolderOutlinedIcon />Project Management</Link> </li>
                            <li><Link to='/mgt/project_matching'><SupervisorAccountOutlinedIcon />Project Matching</Link></li>
                        </div>}</div>
                <div className={sideNav ? "fulldashboard" : "dashboard"} >
                    <div className="globalSearch">
                        <input type='text' placeholder='Global search' onChange={(e) => { setsearchTerm(e.target.value) }} />
                        <AddExpertModal /></div>
                    <div className="dataTable">
                        <div className="dataHeader">
                            <div onClick={() => {
                                setFilterBar('expert_id')
                                setfiltericon(!filtericon)
                            }}>Expert ID {filtericon ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</div>
                            <div onClick={() => setFilterBar('title')}>Title </div>
                            <div onClick={() => setFilterBar('first_name')}>First Name  </div>
                            <div>Last Name  </div>
                            <div>Expertise  </div>
                            <div>Category</div>
                            <div></div>
                        </div>
                        {displayUser}
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ExpertManagement
