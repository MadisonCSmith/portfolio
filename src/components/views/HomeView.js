import React, { Component } from "react";
import "./HomeView.css";
import linkedInLogo from "../../imgs/linkedin.png";
import githubLogo from "../../imgs/github-logo.png";
import emailLogo from "../../imgs/email.png";
import {PersonalStatement} from "../sections/PersonalStatement.js"
import {TimelineSection} from "../sections/TimelineSection.js"

export class HomeView extends Component {


	render() {

		
			return (
				<div>
					<div className="landing">
						<div id="hi">Hi,</div>
						<div id="im">I'm Madison Smith,</div>
						<div id="student">a student at the University of Washington.</div>
						<div id="links">
							<a href="https://www.linkedin.com/in/madison-c-smith" target="_blank"><img className="links-icon" src={linkedInLogo} alt="linkedin icon"/></a>
							<a href="https://github.com/MadisonCSmith" target="_blank"><img className="links-icon" src={githubLogo} alt="Github logo"/></a>
							<a href="https://github.com/MadisonCSmith" target="_blank"><img className="links-icon" src={emailLogo} alt="email logo"/></a>
						</div>
					</div>
					<PersonalStatement/>
					<TimelineSection/>
		
				</div>
			)
	}
}
