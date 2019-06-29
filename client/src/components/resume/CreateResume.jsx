import React, { Component } from 'react'
import PropTypes from "prop-types"

import {connect} from "react-redux"
import { createResume } from "../../actions/resumeActions"

export default class Resume extends Component {
    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            cellPhone: "",
            email: "",
            githubURL: "",
            linkedInURL: "",
            twitterURL: "",
            peronalWebsiteURL: "",
            aboutMe: "",
            address: "",
            address: "",
            address: "",
            address: "",
            address: "",
            address: "",
            address: "",
            address: "",
            address: "",
            address: "",

        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
