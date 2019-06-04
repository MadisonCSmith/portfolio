import React, { Component } from "react";
import "./Card.css";
import {descriptions} from "../data/descriptions.json";
import WhoAreYouPhoto from "../data/portfolio_entries/Honors100_WhoAreYou/pic1.JPG";
import ExperientialLearningPhoto from "../data/portfolio_entries/Honors100_ExperientialLearningInterview/pic1.JPG";
import CurriculumPhoto from "../data/portfolio_entries/Honors100_CurriculumPlanning/pic1.JPG";
import BGCCPhoto from "../data/portfolio_entries/BGCC/pic1.JPG";
import CTEPhoto from "../data/portfolio_entries/CTE/pic1.JPG";
import GuestServicesPhoto from "../data/portfolio_entries/GuestServices/pic1.JPG";
import PSEPhoto from "../data/portfolio_entries/PSE/pic1.JPG";
import CaminoPhoto from "../data/portfolio_entries/ElCaminodeSantiago/pic1.JPG";
import emptyPhoto from "../imgs/empty_photo.png";


export class Card extends Component {

      constructor(props) {
            super(props);
      }


      pixelsDiff(firstDate, secondDate) {
            var oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds
            let daysDiff= Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
            let totalDays = Math.round(Math.abs((this.props.firstDay - this.props.lastDay.getTime())/(oneDay)));
            return Math.floor(this.props.timelineLength * (daysDiff / totalDays));
      }


	render() {

            // converts entry start and end dates into date unit types
            let projectStart = new Date(this.props.startDate)

            let imgSource;
            if (this.props.extension == "Honors100_WhoAreYou") {
                  imgSource = WhoAreYouPhoto;
            } else if (this.props.extension == "Honors100_ExperientialLearningInterview") {
                  imgSource = ExperientialLearningPhoto;
            } else if (this.props.extension == "Honors100_CurriculumPlanning") {
                  imgSource = CurriculumPhoto;
            } else if (this.props.extension == "BGCC") {
                  imgSource = BGCCPhoto; 
            } else if (this.props.extension == "CTE"){
                  imgSource = CTEPhoto;
            } else if (this.props.extension == "GuestServices"){
                  imgSource = GuestServicesPhoto;
            } else if (this.props.extension == "PSE"){
                  imgSource = PSEPhoto;
            } else if (this.props.extension == "ElCaminodeSantiago"){
                  imgSource = CaminoPhoto;
            } else {
                  imgSource = emptyPhoto;
            }


		return (
                  <div className="col s3 card-container">
                        <div className="card" style={{top: this.pixelsDiff(projectStart, this.props.firstDay)}}>
                              <div className="card-image">
                                    <img src={imgSource} alt="entry photo"/>
                              </div>
                              <span className="card-title">{this.props.title}</span>
                              <div className="card-content">
                                    <p>{descriptions[this.props.index].substring(0, 100)}</p>
                              </div>
                        <div className="card-action"></div>
                        </div>
                  </div>	
		);
    }
}