import React, { Component } from "react";
import "./GuideTimeline.css";

export class GuideTimeline extends Component {
    constructor(props) {
        super(props);
		this.pixelsDiff = this.pixelsDiff.bind(this);
	}


    pixelsDiff(date) {
		var oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds
		let daysDiff= Math.round(Math.abs((new Date(date).getTime() - this.props.firstDay.getTime())/(oneDay)));
        let totalDays = Math.round(Math.abs((this.props.firstDay - this.props.lastDay.getTime())/(oneDay)));
		return Math.floor(this.props.timelineLength * (daysDiff / totalDays));
 	}

	render() {

		return (
            <div id="guide-timeline" className='col s3 offset-s1' style={{height:this.props.timelineLength}}>
                <div className="narrative" style={{top:this.pixelsDiff(this.props.firstDay)}}>First day of college</div>
                <div className="narrative" style={{top:this.pixelsDiff("11/31/14")}}>Explored a bunch of different classes</div>
                <div className="narrative" style={{top:this.pixelsDiff("1/25/14")}}>Took a couple chemistry classes, and struggled</div>
                <div className="narrative" style={{top:this.pixelsDiff("3/15/15")}}>Took CSE 142 and really enjoyed it</div>
                <div className="narrative" style={{top:this.pixelsDiff("11/5/14")}}>Took What We Know and How We Know it and discovered philosophy</div>
                <div className="narrative" style={{top:this.pixelsDiff("10/25/15")}}>Took Intro to Philosophy and loved it!</div>
                <div className="narrative" style={{top:this.pixelsDiff("5/25/16")}}>Declared Philosophy major!</div>
                <div className="narrative" style={{top:this.pixelsDiff("7/25/16")}}>Applied and got accepted to the Informatics major!</div>
                <div className="narrative" style={{top:this.pixelsDiff("12/1/18")}}>Graduation!</div>
			</div>
		)
	}
}