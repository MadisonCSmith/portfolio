import React, { Component } from "react";
import "./WorkTimeline.css";

export class WorkTimeline extends Component {
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
                <div className="narrative" style={{top:this.pixelsDiff("2015-06-10")}}>Worked at a pool as a swim instructor and lifeguard over the summer</div>
                <div className="narrative" style={{top:this.pixelsDiff("2015-11-14")}}>Took a job on campus with classroom technology</div>
                <div className="narrative" style={{top:this.pixelsDiff("6/18/17")}}>Worked as a barista in Mt. Rainier National Park over the summer</div>
                <div className="narrative" style={{top:this.pixelsDiff("6/18/18")}}>Worked as a intern at Puget Sound Energy</div>
                <div className="narrative" style={{top:this.pixelsDiff("12/1/18")}}>Graduation!</div>
			</div>
		)
	}
}