import React, { Fragment, useEffect, useState } from 'react'
import '../../styles/profile.css'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Link } from 'react-router-dom'
import AddProjectModal from '../../components/AddProjectComponent'
import axios from 'axios';
import { Col, Modal, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate'
import { jobTypeList } from '../../Assets/jobTypeList';
import { distanceList } from '../../Assets/distanceList';
import { currencyList } from '../../Assets/currencyList';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser'
import jsPDF from 'jspdf'


function ProjectManagement() {
    const [sideNav, setsideNav] = useState(true)
    const [projectData, setprojectData] = useState([])
    const [lgShow, setLgShow] = useState(false);
    const [inDex, setinDex] = useState([])
    const [edit, setedit] = useState(false)
    const [pageNumber, setpageNumber] = useState(0)

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

    const userPerPage = 10
    const pageVisited = pageNumber * userPerPage

    //fetching project data
    useEffect(() => {
        axios.get('https://hitalentsapp.herokuapp.com/hyde_international/fetchProjectData').then((response) => {
            if (response) {
                // console.log(response.data.data)
                setprojectData(response.data.data)
            }
        })
    }, [])

    // useEffect(() => {
    //     console.log(inDex)
    // }, [inDex.project_id])

    const handleEdit = () => {
        setedit(true)
    }


    //save project data info
    const handleSave = (id) => {
        //axios update
        axios.put('https://hitalentsapp.herokuapp.com/hyde_international/editProject', { project_id: id, job_title: jobTitle, job_type: jobType, employer: employer, show_employer: showEmployer, location: location, distance: Distance, currency: currency, salary: salary, start_date: startDate, close_date: endDate, organization_info: organizationInfo, professional_field: professionalField, job_description: jobDescription, required_expertise: requiredExpertise, responsibility: responsibility, essential_skills: essentialSkills })
            .then((response) => {
                if (response) {
                    alert("Save")
                    setedit(false)
                    window.location.reload(false)
                }
            })
    }

    //delete data project
    const handleDelete = (projectId) => {
        let Confirm = window.confirm("Are you sure to remove this data?")
        if (Confirm === true) {
            console.log(projectId)
            axios.delete(`https://hitalentsapp.herokuapp.com/hyde_international/deleteProject/${projectId}`, { project_id: projectId }).then((response) => {
                if (response) {
                    alert("Data removed.")
                    window.location.reload(false)
                }
            })
        } else {
            alert("Cancel")
        }
    }

    const pdfGenerator = (projectID) => {
        axios.get(`https://hitalentsapp.herokuapp.com/hyde_international/download_Project/${projectID}`, { project_id: projectID }).then((response) => {
            if (response) {
                //firstly generate jspdf function
                var pdfDoc = new jsPDF("p", 'pt', 'a4')

                // translating html tag into pdf format
                pdfDoc.html(document.querySelector("#pdfInfo"), {
                    callback: function (pdf) {
                        //removing the empty pages
                        //however it has a bugs such as content does not fully shown
                        // var pageCount = pdf.internal.getNumberOfPages();
                        // pdf.deletePage(pageCount)
                        pdf.save(`${employer}.pdf`)
                    },
                    x: 20,
                    y: 15
                })
            }
        })
    }

    const displayProject = projectData.slice(pageVisited, pageVisited + userPerPage).map((val, index) => {
        return <>
            <div className="dataBody">
                <div>{val.project_id}</div>
                <div>{val.job_title}</div>
                <div>{val.job_type}</div>
                <div>{val.employer}</div>
                <div>{val.location}</div>
                <div>{val.salary}</div>
                <div><button className='apply-btn' onClick={() => {
                    setLgShow(!lgShow)
                    setinDex(val)
                    setjobTitle(val.job_title)
                    setjobType(val.job_type)
                    setemployer(val.employer)
                    setshowEmployer(val.show_employer_name)
                    setlocation(val.location)
                    setDistance(val.distance)
                    setcurrency(val.currency)
                    setsalary(val.salary)
                    setstartDate(val.start_date)
                    setendDate(val.close_date)
                    setorganizationInfo(val.organization_info)
                    setprofessionalField(val.professional_field)
                    setrequiredExpertise(val.required_expertise)
                    setjobDescription(val.job_description)
                    setresponsibility(val.responsibility)
                    setessentialSkills(val.essential_skills)
                }}>More Info</button></div>
            </div>
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
                    <form id='pdfInfo'>
                        <Col>
                            <Row xs={12} sm={12} md={12} lg={12}>
                                <label>Project ID</label>
                                <p>{inDex.project_id}</p>
                            </Row>
                        </Col>
                        <Col>
                            <Row xs={4} sm={4} md={4} lg={4}>
                                <label>Job Title</label>
                                {edit ? <input type='text' name='job_title' className='form-control'
                                    defaultValue={jobTitle}
                                    onChange={(e) => { setjobTitle(e.target.value) }} /> : <p style={{ fontSize: '14px' }}>{inDex.job_title}</p>}
                                <label>Job Type</label>
                                {edit ? <select name="job_type" className="form-control" defaultValue='full time' value={jobType} onChange={(e) => setjobType(e.target.value)}
                                >
                                    {jobTypeList.map((item, index) => {
                                        return <option key={`job_type-${index}`} value={item}>{item}</option>
                                    })}
                                </select> : <p style={{ fontSize: '14px' }}>{inDex.job_type}</p>}
                            </Row>


                            <Row xs={4} sm={4} md={4} lg={4}>
                                <label>Employer</label>
                                {edit ? <input type='text' name='employer' className='form-control' defaultValue={employer} onChange={(e) => { setemployer(e.target.value) }} /> : <p style={{ fontSize: '14px' }}>{inDex.employer}</p>}
                                <label>Show Employer Name </label>
                                {edit ? <select name='show_employer_name' className="form-control" defaultValue='Y' value={showEmployer} onChange={(e) => setshowEmployer(e.target.value)}
                                >
                                    <option value='Y'>Yes</option>
                                    <option value='N'>No</option>
                                </select> : <p style={{ fontSize: '14px' }}>{inDex.show_employer_name}</p>}
                            </Row>
                        </Col>

                        <Col>
                            <Row xs={4} sm={4} md={4} lg={4}>
                                <label>Location</label>
                                {edit ? <input type='text' name='location' className='form-control' defaultValue={location} onChange={(e) => { setlocation(e.target.value) }} /> : <p style={{ fontSize: '14px' }}>{inDex.location}</p>}
                                <label>Distance</label>
                                {edit ? <select className="form-control" defaultValue='remote' value={Distance} onChange={(e) => setDistance(e.target.value)}
                                >
                                    {distanceList.map((item, index) => {
                                        return <option key={`distance-${index}`} value={item}>{item}</option>
                                    })}
                                </select> : <p style={{ fontSize: '14px' }}>{inDex.distance}</p>}
                            </Row>

                            <Row xs={4} sm={4} md={4} lg={4}>
                                <label>Currency</label>
                                {edit ? <select name="currencylist" className="form-control" defaultValue='GBP' value={currency} onChange={(e) => setcurrency(e.target.value)}
                                >
                                    {currencyList.map((item, index) => {
                                        return <option key={`currency-${index}`} value={item}>{item}</option>
                                    })}
                                </select> : <p style={{ fontSize: '14px' }}>{inDex.currency}</p>}
                                <label>salary</label>
                                {edit ? <input type='text' name='salary' className='form-control' defaultValue={salary} onChange={(e) => { setsalary(e.target.value) }} /> : <p style={{ fontSize: '14px' }}>{inDex.salary}</p>}
                            </Row>
                        </Col>
                        <Col>
                            <Row xs={4} sm={4} md={4} lg={4}>
                                <label>Start Date</label>
                                {edit ? <input type='date' name='start_date' className='form-control' defaultValue={startDate} onChange={(e) => { setstartDate(e.target.value) }} /> : <p style={{ fontSize: '14px' }}>{inDex.start_date}</p>}
                                <label>End Date</label>
                                {edit ? <input type='date' name='end_date' className='form-control' defaultValue={endDate} onChange={(e) => { setendDate(e.target.value) }} /> : <p style={{ fontSize: '14px' }}>{inDex.close_date}</p>}
                            </Row>
                        </Col>
                        <Col>
                            <h2 style={{ fontSize: '1.6rem' }}>Organization Infomation</h2>
                            {edit ? <CKEditor editor={ClassicEditor}
                                data={organizationInfo}
                                onChange={(event, editor) => {
                                    const organizationData = editor.getData()
                                    setorganizationInfo(organizationData)
                                }}
                                config={{

                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",
                                        "blockQuote",
                                        "link",
                                        "numberedList",
                                        "bulletedList",
                                        "|",
                                        "undo",
                                        "redo",
                                    ],
                                }} />
                                : <p>{ReactHtmlParser(inDex.organization_info)}</p>}
                        </Col>

                        <Col>
                            <h2 style={{ fontSize: '1.6rem' }}>Professional Field</h2>
                            {edit ? <CKEditor editor={ClassicEditor}
                                data={professionalField}
                                onChange={(event, editor) => {
                                    const ProfessionalFielddata = editor.getData()
                                    setorganizationInfo(ProfessionalFielddata)
                                }}
                                config={{

                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",
                                        "blockQuote",
                                        "link",
                                        "numberedList",
                                        "bulletedList",
                                        "|",
                                        "undo",
                                        "redo",
                                    ],
                                }} /> : <p>{ReactHtmlParser(inDex.professional_field)}</p>}
                        </Col>

                        <Col>
                            <h2 style={{ fontSize: '1.6rem' }}>Job Description</h2>
                            {edit ? <CKEditor editor={ClassicEditor}
                                data={jobDescription}
                                onChange={(event, editor) => {
                                    const jobDescriptionData = editor.getData()
                                    setorganizationInfo(jobDescriptionData)
                                }}
                                config={{

                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",
                                        "blockQuote",
                                        "link",
                                        "numberedList",
                                        "bulletedList",
                                        "|",
                                        "undo",
                                        "redo",
                                    ],
                                }} /> : <p>{ReactHtmlParser(inDex.job_description)}</p>}
                        </Col>

                        <Col>
                            <h2 style={{ fontSize: '1.6rem' }}>Required Expertise</h2>
                            {edit ? <CKEditor editor={ClassicEditor}
                                data={requiredExpertise}
                                onChange={(event, editor) => {
                                    const requireExpertiseData = editor.getData()
                                    setorganizationInfo(requireExpertiseData)
                                }}
                                config={{

                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",
                                        "blockQuote",
                                        "link",
                                        "numberedList",
                                        "bulletedList",
                                        "|",
                                        "undo",
                                        "redo",
                                    ],
                                }} /> : <p>{ReactHtmlParser(inDex.required_expertise)}</p>}
                        </Col>

                        <Col>
                            <h2 style={{ fontSize: '1.6rem' }}>Responsibility</h2>
                            {edit ? <CKEditor editor={ClassicEditor}
                                data={responsibility}
                                onChange={(event, editor) => {
                                    const responsibilityData = editor.getData()
                                    setorganizationInfo(responsibilityData)
                                }}
                                config={{

                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",
                                        "blockQuote",
                                        "link",
                                        "numberedList",
                                        "bulletedList",
                                        "|",
                                        "undo",
                                        "redo",
                                    ],
                                }} /> : <p>{ReactHtmlParser(inDex.responsibility)}</p>}
                        </Col>

                        <Col>
                            <h2 style={{ fontSize: '1.6rem' }}>Essential Skills</h2>
                            {edit ? <CKEditor editor={ClassicEditor}
                                data={essentialSkills}
                                onChange={(event, editor) => {
                                    const essential_skillsData = editor.getData()
                                    setorganizationInfo(essential_skillsData)
                                }}
                                config={{

                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",
                                        "blockQuote",
                                        "link",
                                        "numberedList",
                                        "bulletedList",
                                        "|",
                                        "undo",
                                        "redo",
                                    ],
                                }} /> : <p>{ReactHtmlParser(inDex.essential_skills)}</p>}
                        </Col>
                    </form>
                </Modal.Body>
                <Modal.Footer >
                    {edit ? <button type="submit" className='apply-btn' onClick={() => handleSave(inDex.project_id)}>Save</button> : <button type="submit" className='apply-btn' onClick={handleEdit}>Edit</button>}
                    <button type="submit" className='apply-btn' onClick={() => handleDelete(inDex.project_id)}>Delete</button>
                    <button type="submit" className='apply-btn' onClick={() => pdfGenerator(inDex.project_id)}>Download</button>
                </Modal.Footer>
            </Modal>
        </>
    })

    const pageCount = Math.ceil(projectData.length / userPerPage)

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
                    <AddProjectModal />
                    <div className="dataTable">
                        <div className="dataHeader">
                            <div>Project ID</div>
                            <div>Job Title</div>
                            <div>Job Type</div>
                            <div>Employer</div>
                            <div>Location</div>
                            <div>Salary</div>
                            <div></div>
                        </div>
                        {displayProject}
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

export default ProjectManagement
