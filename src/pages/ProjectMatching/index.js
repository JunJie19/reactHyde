import React, { Fragment, useEffect, useState } from 'react'
import '../../styles/profile.css'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Col, Modal, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate'
import jsPDF from 'jspdf';

function ProjectMacthing() {

    useEffect(() => {
        axios.get('http://localhost:3001/hyde_international/fetchProjectMacthing').then((response) => {
            if (response) {
                setprojectMatchData(response.data.data)
            }
        })
    }, [])

    const [projectMatchData, setprojectMatchData] = useState([])
    const [sideNav, setsideNav] = useState(true)
    const [pageNumber, setpageNumber] = useState(0)
    const [lgShow, setLgShow] = useState(false);
    const [inDex, setinDex] = useState([])

    const userPerPage = 10
    const pageVisited = pageNumber * userPerPage

    const displayProjectExpert = (project_id) => {
        setLgShow(!lgShow)
        axios.get(`/hyde_international/fetchProjectMacthing/${project_id}`).then((response) => {
            if (response) {
                console.log(response.data.data)
                setinDex(response.data.data)
            }
        })
    }

    const displayProjectMatching = projectMatchData.slice(pageVisited, pageVisited + userPerPage).map((val, index) => {
        return <>
            <div className="project_dataBody">
                <div>{val.matching_id}</div>
                <div>{val.project_id}</div>
                <div>{val.job_title}</div>
                <div>{val.job_type}</div>
                <div>{val.employer}</div>
                <div>{val.location}</div>
                <div>{val.salary}</div>
                <div><button className='apply-btn' onClick={() => displayProjectExpert(val.project_id)}>More Info</button></div>
            </div>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Job matching Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><form>
                    <Row>
                        <Col>Expert ID</Col>
                        <Col>First Name</Col>
                        <Col>Last Name</Col>
                        <Col>Expertise</Col>
                        <Col>Category</Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    {inDex.map((val) => {
                        return <Row className='pdfInfo'>
                            <Col>{val.expert_id}</Col>
                            <Col>{val.first_name}</Col>
                            <Col>{val.last_name}</Col>
                            <Col>{val.expertise}</Col>
                            <Col>{val.category}</Col>
                            <Col><button className='apply-btn' onClick={() => Project_Expert_Match(val.expert_id, val.first_name, val.last_name, val.date_of_birth, val.nationality, val.email, val.expertise, val.project_id, val.job_title, val.job_type, val.employer, val.location, val.start_date, val.close_date, val.organization_info, val.job_description, val.responsibility, val.professional_field, val.required_expertise, val.essential_skills)}>Download</button></Col>
                            <Col><button className='apply-btn' onClick={() => handleDelete(val.project_id, val.expert_id)}>Delete</button></Col>
                        </Row>
                    })}

                </form>
                </Modal.Body>
            </Modal>
        </>
    })

    const handleDelete = (projectId, expertId) => {
        let Confirm = window.confirm("Are you sure to remove this data?")
        if (Confirm === true) {
            console.log(projectId)
            axios.delete(`http://localhost:3001/hyde_international/deleteProjectMacthing/${projectId}/${expertId}`, { project_id: projectId, expert_id: expertId }).then((response) => {
                if (response) {
                    alert("Data removed.")
                    window.location.reload(false)
                }
            }).catch((err) => {
                alert(err)
            })
        } else {
            alert("Cancel")
        }
    }

    const Project_Expert_Match = (ExpertID, FName, LName, Expertise, DOB, Email, Nationality, ProjectID, JobTitle, JobType, Employer, Location, StartDate, EndDate, OrgaInfo, JobDescrip, Responsibility, ProfessionalField, RequiredExpertise, EssentialSkills) => {
        var pdfDocs = new jsPDF('portrait', 'pt', 'a4')
        //expert id
        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(16)
        pdfDocs.text("Expert ID", 30, 50)
        pdfDocs.text(`${ExpertID}`, 300, 50)

        //expert content
        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(12)

        pdfDocs.text("First Name", 30, 100)
        pdfDocs.text("Last Name", 300, 100)
        pdfDocs.text("D.O.B", 30, 150)
        pdfDocs.text("Nationality", 300, 150)
        pdfDocs.text("Email", 30, 200)
        pdfDocs.text("Expertise", 300, 200)

        pdfDocs.setFont("times", "normal")
        pdfDocs.setFontSize(12)
        pdfDocs.text(`${FName}`, 150, 100)
        pdfDocs.text(`${LName}`, 400, 100)
        pdfDocs.text(`${DOB}`, 150, 150)
        pdfDocs.text(`${Nationality}`, 400, 150)
        pdfDocs.text(`${Email}`, 150, 200)
        pdfDocs.text(`${Expertise}`, 400, 200)

        //project id
        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(16)
        pdfDocs.text("Project ID", 30, 250)
        pdfDocs.text(`${ProjectID}`, 300, 250)

        //project content
        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(12)
        pdfDocs.text("Job Title", 30, 300)
        pdfDocs.text("Job Type", 300, 300)
        pdfDocs.text("Employer", 30, 350)
        pdfDocs.text("Location", 30, 400)
        pdfDocs.text("Start Date", 30, 450)
        pdfDocs.text("End Date", 300, 450)

        pdfDocs.setFont("times", "normal")
        pdfDocs.setFontSize(12)
        pdfDocs.text(`${JobTitle}`, 150, 300)
        pdfDocs.text(`${JobType}`, 380, 300)

        var Employers = pdfDocs.splitTextToSize(`${Employer}`, 400)
        pdfDocs.text(Employers, 150, 350)
        pdfDocs.text(`${Location}`, 150, 400)
        pdfDocs.text(`${StartDate}`, 150, 450)
        pdfDocs.text(`${EndDate}`, 400, 450)

        //company content
        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(12)
        pdfDocs.text("Organization Background", 30, 530)
        pdfDocs.setFont("times", "normal")
        pdfDocs.setFontSize(12)
        var OrgaInfos = pdfDocs.splitTextToSize(`${OrgaInfo}`, 500)
        pdfDocs.text(OrgaInfos, 30, 550)
        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(12)
        pdfDocs.text("Job Description", 30, 700)
        pdfDocs.setFont("times", "normal")
        pdfDocs.setFontSize(12)
        var JobDescrips = pdfDocs.splitTextToSize(`${JobDescrip}`, 500)
        pdfDocs.text(JobDescrips, 30, 720)

        pdfDocs.addPage()
        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(12)
        pdfDocs.text("Responsibility", 30, 50)
        pdfDocs.setFont("times", "normal")
        pdfDocs.setFontSize(12)
        var Responsibilitys = pdfDocs.splitTextToSize(`${Responsibility}`, 500)
        pdfDocs.text(Responsibilitys, 30, 720)

        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(12)
        pdfDocs.text("Professional Field", 30, 250)
        pdfDocs.setFont("times", "normal")
        pdfDocs.setFontSize(12)
        var ProfessionalFields = pdfDocs.splitTextToSize(`${ProfessionalField}`, 500)
        pdfDocs.text(ProfessionalFields, 30, 720)

        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(12)
        pdfDocs.text("Required Expertise", 30, 450)
        pdfDocs.setFont("times", "normal")
        pdfDocs.setFontSize(12)
        var RequiredExpertises = pdfDocs.splitTextToSize(`${RequiredExpertise}`, 500)
        pdfDocs.text(RequiredExpertises, 30, 720)

        pdfDocs.setFont("times", "bold")
        pdfDocs.setFontSize(12)
        pdfDocs.text("Essential Skills", 30, 650)
        pdfDocs.setFont("times", "normal")
        pdfDocs.setFontSize(12)
        var EssentialsSkills = pdfDocs.splitTextToSize(`${EssentialSkills}`, 500)
        pdfDocs.text(EssentialsSkills, 30, 720)

        pdfDocs.save(`Project Matching${JobTitle}__${ProjectID} ${FName}__${ExpertID}.pdf`)
    }

    const pageCount = Math.ceil(projectMatchData.length / userPerPage)

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
                    <div className="globalSearch"><input type='text' placeholder='Global search' /></div>
                    <div className="project_dataTable">
                        <div className="project_dataHeader">
                            <div>Matching ID</div>
                            <div>Project ID</div>
                            <div>Job Title</div>
                            <div>Job Type</div>
                            <div>Employer</div>
                            <div>Location</div>
                            <div>Salary</div>
                            <div></div>
                        </div>
                        {displayProjectMatching}

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

export default ProjectMacthing
