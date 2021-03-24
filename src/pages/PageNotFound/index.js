import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import '../../styles/pageError.css'

function index() {
    return (
        <Fragment>
            <div className="pageError">
                <h1>404 error.</h1>
                <div className="pageErrorMsg">The page doesn't exist.</div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default index
