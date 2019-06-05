import React, { Component } from "react";
import "./ExtracurricularTimeline.css";

export class ExtracurricularTimeline extends Component {
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
                <div className="narrative" style={{top:this.pixelsDiff("10/31/14")}}>Volunteered in childcare</div>
                <div className="narrative" style={{top:this.pixelsDiff("8/15/15")}}>Walked the Camino and discovered a love of distance hiking</div>
                <div className="narrative" style={{top:this.pixelsDiff("11/25/17")}}>Ran first half marathon</div>
                <div className="narrative" style={{top:this.pixelsDiff("5/25/15")}}>Partipated in Ski-to-Sea</div>
                <div className="narrative" style={{top:this.pixelsDiff("5/25/17")}}>Partipated in Ski-to-Sea</div>
                <div className="narrative" style={{top:this.pixelsDiff("5/25/19")}}>Partipated in Ski-to-Sea</div>
                <div className="narrative" style={{top:this.pixelsDiff("12/1/18")}}>Graduation!</div>
			</div>
		)
	}
}