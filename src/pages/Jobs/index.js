import { TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../../styles/jobs.css'
import ReactPaginate from 'react-paginate'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

function JobPage() {
    const [searchTerm, setsearchTerm] = useState('')
    const [jobList, setjobList] = useState([])
    const [pageNumber, setpageNumber] = useState(0)
    const [searchjobType, setsearchjobType] = useState("")
    const [searchLocation, setsearchLocation] = useState("")

    //filtering
    const [salary, setsalary] = useState(500000)

    const userPerPage = 20
    const pageVisited = pageNumber * userPerPage

    const pageCount = Math.ceil(jobList.length / userPerPage)

    const changePage = ({ selected }) => {
        setpageNumber(selected)
    }

    const jobCard = jobList.filter((val) => {
        if (searchTerm === "") {
            return val
        } else if (val.job_title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
        }
    }).filter((val) => {
        if (searchLocation === "") {
            return val
        } else if (val.location.toLowerCase().includes(searchLocation.toLowerCase())) {
            return val
        }
    }).filter((val) => {
        if (searchjobType === "") {
            return val
        } else if (val.job_type.toLowerCase().includes(searchjobType.toLowerCase())) {
            return val
        }
    }).filter((val) => {
        if (val.salary < salary) {
            return val
        }
    }

    )

        .slice(pageVisited, pageVisited + userPerPage).map((val, index) => {
            return <>
                <Link to={`/hyde_international/jobList/${val.project_id}`}>
                    <div className='jobCard' key={index} >
                        <header className='jobCardHeader'><h5 className='jobTitle'><BusinessCenterIcon />{val.job_title}</h5></header>
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
                                {val.close_date}</Col></Row></div>
                    </div>
                </Link>
            </>
        })

    useEffect(() => {
        axios.get('http://localhost:3001/hyde_international/jobList').then((response) => {
            if (response) {
                setjobList(response.data.data)
            }
        })
    }, [])
    return (
        <Fragment>

            {/* Banner */}
            <div className="jobsBanner">
                <Row>
                    <Col></Col>
                    <Col><h1>Browse jobs by location and category</h1>
                        <h5>Start Applying to land your dearm job.</h5>
                    </Col>
                </Row>
            </div>

            {/* job Search */}
            <div className="job_Container">
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Search Job Title, Job Types, Industry, Salary" variant="outlined" className='jobSearch' onChange={(e) => { setsearchTerm(e.target.value) }} />

                    <div class='filterBox'>
                        <Col xs={6} md={6} lg={6}>
                            <label htmlFor="SalaryRange">Salary</label><br />
                            <input type='range' className='slider' name='vol' min='0' max='500000' onChange={(e) => setsalary(e.target.value)} />
                            <span style={{ fontSize: '12px', position: 'absolute', left: '5%' }}>0</span>
                            <span style={{ fontSize: '12px', position: 'absolute', right: '5%' }}>500000</span>
                        </Col>
                        <Col xs={3} md={3} lg={3}><label htmlFor="jobType">Job Type</label><br />
                            <select className="form-control" defaultValue='' required onChange={(e) => {
                                setsearchjobType(e.target.value)
                                // console.log(searchjobType)
                            }}
                            >
                                <option value=''>All</option>
                                <option value='full Time'>Full Time</option>
                                <option value='part Time'>Part Time</option>
                                <option value='conTract'>Contract</option>
                            </select></Col>
                        <Col xs={3} md={3} lg={3}><label htmlFor="location">Location</label><br />
                            <select className="form-control" defaultValue='' required onChange={(e) => { setsearchLocation(e.target.value) }}
                            >
                                <option value=''>All</option>
                                <option value='remoteAvailable'>Remote available</option>
                                <option value='remoteUnavailable'>Remote unavailable</option>

                            </select></Col></div>
                    <div className="jobFilter">
                        <div className='jobContainer'>
                            {jobCard}
                        </div>
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
                </form>
            </div>
            <Footer />

        </Fragment >
    )
}

export default JobPage
