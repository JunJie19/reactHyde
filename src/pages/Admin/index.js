import React, { Fragment, useState } from 'react'
import '../../styles/profile.css'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Link } from 'react-router-dom'

function Admin() {

    const [sideNav, setsideNav] = useState(true)

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
                    this is dashboard
                </div>
            </div>
        </Fragment>
    )
}

export default Admin
