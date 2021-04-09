import './App.css';
import Home from './pages/Home/index';
import AboutUs from './pages/AboutUs/index';
import ContactUs from './pages/ContactUs/index'
import Jobs from './pages/Jobs/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import adminDashboard from './pages/Admin/index'
import expertManagement from './pages/ExpertManagement/index'
import projectManagement from './pages/ProjectManagement/index'
import projectMatching from './pages/ProjectMatching/index'
import expertProfile from './pages/ExpertProfile/index'
import expertApplication from './pages/ExpertApplication/index'
import pageError from './pages/PageNotFound/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ExpertProfile from './pages/ExpertProfile/index';


function App() {

  const [showLink, setshowLink] = useState(false)


  return (
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
            <b><Link to='/login'>Login</Link></b>

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
        <Route path='/signup' component={Register} />
        <Route path='/mgt/admin_dashboard' component={adminDashboard} />
        <Route path='/mgt/expert_management' component={expertManagement} />
        <Route path='/mgt/project_management' component={projectManagement} />
        <Route path='/mgt/project_matching' component={projectMatching} />
        <Route path='/mgt/expert_profile' component={() => <ExpertProfile authorized={false} />} />
        <Route path='/mgt/expert_application' component={expertApplication} />
        <Route path='*' component={pageError} />
      </Switch>
    </Router>
  );
}

export default App;
