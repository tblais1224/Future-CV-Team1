import React, { Component } from 'react'
import ResumeDisplay from "./ResumeDisplay"
import Messages from "./ResumeMessages"

class ResumeProfile extends Component {
    render() {
        return (
            <div className="container-fluid m-3">
                <ResumeDisplay/>
            </div>
        )
    }
}

export default ResumeProfile