import './App.css';
import Home from './pages/Home/index';
import AboutUs from './pages/AboutUs/index';
import ContactUs from './pages/ContactUs/index'
import Jobs from './pages/Jobs/index'
import Login from './pages/Login/index'
import pageError from './pages/PageNotFound/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


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
        <Route path='*' component={pageError} />
      </Switch>
    </Router>
  );
}

export default App;
