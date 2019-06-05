import React, { Component } from "react";
import "./WebsiteEntry.css";

import LearningTreePhoto from "../data/portfolio_entries/INFO200_FinalEssay/pic1.JPG";

import {data} from "../data/data.json";


export class WebsiteEntry extends Component {

	constructor(props) {
        super(props);
	}

	 
	render() {

        let imgSource;

        if (this.props.extension == "INFO200_FinalEssay") {
                imgSource = LearningTreePhoto;

        } else if (this.props.extension == "Honors100_ExperientialLearningInterview") {
                imgSource = null;
        }

        console.log(this.props.url)
        return (
          <>
            <a href={data[this.props.index]['url']}><img id="entry-img" src={imgSource} alt="entry photo"/></a>
            <a href={data[this.props.index]['url']} target="_blank" id="link-text">Go to website</a>
          </>

        )
	}
}