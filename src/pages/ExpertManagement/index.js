import React, { Fragment, useState } from 'react'
import '../../styles/profile.css'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Link, Redirect } from 'react-router-dom'
import AddExpertModal from '../../components/AddExpertComponent'



function ExpertManagement({ authorized }) {
    const [sideNav, setsideNav] = useState(true)

    if (!authorized) {
        return <Redirect to='/login' />
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
                    <AddExpertModal />
                    <div className="table">
                        <div className="dataHeader"></div>
                        <div className="dataBody"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ExpertManagement
