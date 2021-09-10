import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import '../../styles/jobs.css'
import ReactHtmlParser from 'react-html-parser'

function ApplyJob() {
    const history = useHistory()
    const { jobId } = useParams()

    const [jobInfo, setjobInfo] = useState([])

    useEffect(() => {
        axios.get(`${jobId}`).then((response) => {
            if (response) {
                setjobInfo(response.data.data)
            }
        })
    }, [])

    const jobApply = (jobId) => {
        axios.post(`https://hitalentsapp.herokuapp.com/hyde_international/applyJob/${jobId}`).then((response) => {
            if (response) {
                alert(response.data.msg)
                if (response.data.incomplete === true) {
                    history.push('/mgt/expert_profile')
                }
            }
        }).catch(error => {
            alert("You've not Logged in, Please Login.")
        })
    }





    return (
        <Fragment>
            <section className="jobApplyimg_section"></section>
            {jobInfo.map((val, index) => {
                return <div className='applyJob_container'>
                    <h1>{val.job_title}</h1>
                    <div className="job-details">
                        <div className="salary">{val.currency} {val.salary}</div>
                        <div className="status">Posted {val.start_date} by PA Counsulting</div>
                    </div>
                    <div className="job_Content">
                        <p className="orga_info">
                            {ReactHtmlParser(val.organization_info)}</p></div>
                    <div className="job_Content"><h5>Job Description</h5>
                        <p className="para_width">{ReactHtmlParser(val.job_description)}</p>
                    </div>
                    <div className="job_Content"><h5>Responsibilities</h5>
                        <p className="para_width">{ReactHtmlParser(val.responsibility)}</p>
                    </div>
                    <div className="job_Content"><h5>Essential Skills</h5>
                        <p className="para_width">{ReactHtmlParser(val.essential_skills)}</p>
                    </div>
                    <div className="job_Content"><h5>Job Description</h5>
                        <p className="para_width">{ReactHtmlParser(val.job_description)}</p>
                    </div>
                    <button class='apply_btn' onClick={() => { jobApply(val.project_id) }}>Apply</button>
                </div>
            })}

            <Footer />
        </Fragment>
    )
}

export default ApplyJob
