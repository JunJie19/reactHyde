import './App.css';
import Home from './pages/Home/index';
import AboutUs from './pages/AboutUs/index';
import ContactUs from './pages/ContactUs/index'
import Jobs from './pages/Jobs/index'
import Login from './pages/Login/index'
import Forgotpassword from './pages/ForgotPassword/index'
import Register from './pages/Register/index'
import adminDashboard from './pages/Admin/index'
import expertManagement from './pages/ExpertManagement/index'
import projectManagement from './pages/ProjectManagement/index'
import projectMatching from './pages/ProjectMatching/index'
import expertProfile from './pages/ExpertProfile/index'
import expertApplication from './pages/ExpertApplication/index'
import jobApply from './pages/Jobs/ApplyJob'
import ResetPassword from './pages/ResetPassword';
import pageError from './pages/PageNotFound/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useEffect, useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import axios from 'axios';
import { authContext } from '../src/components/authContext'
import JobCategory from './pages/Jobs/Category';


function App() {

  axios.defaults.withCredentials = true;
  const [showLink, setshowLink] = useState(false)
  const [loginStatus, setloginStatus] = useState(false)
  // const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

  useEffect(() => {
    axios.get('hyde_international/login').then((response) => {
      console.log(response)
      if (response.data.loggedIn === true) {
        setloginStatus(!loginStatus)
        localStorage.setItem('Hyde.role', response.data.user[0].permission_role)
      }
    })
  }, [])

  const logOut = () => {
    axios.get('https://hitalentsapp.herokuapp.com/hyde_international/logout').then((response) => {
      if (response) {
        alert('You have successfully logout!')
        localStorage.removeItem('Hyde.role')
        setloginStatus(false)
      }
    })
  }


  return (
    <authContext.Provider value={{ loginStatus, setloginStatus }}>
      <Router>
        <div className='navRoute' id={showLink ? "navButtonBar" : ""}>
          <div className='leftRoute'>
            <Link to='/'>Hi Talents</Link>
          </div>
          <div className='rightRoute'>
            <div className='rightNavRoute' id={showLink ? "hidden" : ""}>
              <b> <Link to='/'>Home</Link></b>
              <b> <Link to='/jobs'>Jobs</Link></b>
              <b> <Link to='/aboutus'>About Us</Link></b>
              <b> <Link to='/contactus'>Contact Us</Link></b>
              {loginStatus ? <b><Link to='/' onClick={logOut}>Logout</Link></b> : <b><Link to='/login'>Login</Link></b>}

            </div>
            <button onClick={() => setshowLink(!showLink)}><MenuRoundedIcon /> </button>

          </div>
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' exact component={AboutUs} />
          <Route path='/contactus' exact component={ContactUs} />
          <Route path='/jobs' exact component={Jobs} />
          <Route path='/login' exact component={Login} />
          <Route path='/forgotpassword' component={Forgotpassword} />
          <Route path='/signup' component={Register} />
          <Route path='/mgt/admin_dashboard' component={adminDashboard} />
          <Route path='/mgt/expert_management' component={expertManagement} />
          <Route path='/mgt/project_management' component={projectManagement} />
          <Route path='/mgt/project_matching' exact component={projectMatching} />
          <Route path='/mgt/expert_profile' component={expertProfile} />
          <Route path='/mgt/expert_application' component={expertApplication} />
          <Route path='/hyde_international/jobList/:jobId' component={jobApply} />
          <Route path='/category/:jobCategory' component={JobCategory} />
          <Route path='/resetpassword/:token' component={ResetPassword} />
          <Route path='*' component={pageError} />
        </Switch>
      </Router>
    </authContext.Provider>
  );
}

export default App;
