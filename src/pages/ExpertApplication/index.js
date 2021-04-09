import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/profile.css'
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function ExpertApplication() {
    
    const [sideNav, setsideNav] = useState(true)

    return (
        <Fragment>
            <div className="expertContainer">
                <div className={sideNav ? "hidden" : "sideBar"}>
                    {sideNav ?
                        <div className='collapseIcon'><button><ListOutlinedIcon onClick={() => setsideNav(!sideNav)} /></button>
                            <li><Link to='/mgt/expert_profile'><PersonIcon /> </Link></li>
                            <li><Link to='/mgt/expert_application'><ListAltIcon /></Link> </li>
                        </div> :
                        <div><button><CloseOutlinedIcon onClick={() => setsideNav(!sideNav)} /></button>
                            <li><Link to='/mgt/expert_profile'><PersonIcon /> Profile</Link></li>
                            <li><Link to='/mgt/expert_application'><ListAltIcon />My Application</Link> </li>
                        </div>}</div>

                <div className={sideNav ? "fulluserProfile" : "userProfile"} >
                    this is expert application
                </div>
            </div>
        </Fragment>
    )
}

export default ExpertApplication
