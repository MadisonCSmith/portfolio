import React, { Component } from "react";
import "./ImgEntry.css";
import WhoAreYouPhoto from "../data/portfolio_entries/Honors100_WhoAreYou/pic1.JPG";
import ExperientialLearningPhoto from "../data/portfolio_entries/Honors100_ExperientialLearningInterview/pic1.JPG";
import CurriculumPhoto from "../data/portfolio_entries/Honors100_CurriculumPlanning/pic1.JPG";
import BGCCPhoto from "../data/portfolio_entries/BGCC/pic1.JPG";
import CTEPhoto from "../data/portfolio_entries/CTE/pic1.JPG";
import GuestServicesPhoto from "../data/portfolio_entries/GuestServices/pic1.JPG";
import PSEPhoto from "../data/portfolio_entries/PSE/pic1.JPG";
import CaminoPhoto from "../data/portfolio_entries/ElCaminodeSantiago/pic1.JPG";
import BIMEPhoto from "../data/portfolio_entries/BIME498_CountDiagnoses/pic1.JPG";
import emptyPhoto from "../imgs/empty_photo.png";


export class ImgEntry extends Component {

	constructor(props) {
        super(props);
	}

	 
	render() {

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
        } else if (this.props.extension == "BIME498_CountDiagnoses") {
                imgSource = BIMEPhoto;
        } else {
                imgSource = emptyPhoto;
        }


        return (
            <img id="entry-img" src={imgSource} alt="entry photo"/>
        )
	}
}