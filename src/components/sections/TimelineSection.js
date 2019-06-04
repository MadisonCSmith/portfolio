import React, { Component } from "react";
import "./TimelineSection.css";
import {GuideTimeline} from "../GuideTimeline.js";
import {ImgEntry} from "../ImgEntry.js";
import {ImgsEntry} from "../ImgsEntry.js";
import {Card} from "../Card.js";

import {data} from "../../data/data.json";
import {descriptions} from "../../data/descriptions.json";
import {reflections} from "../../data/reflections.json";
import closeImg from "../../imgs/arrow3.png";


export class TimelineSection extends Component {

	constructor(props) {
        super(props);
		this.showCard = this.showCard.bind(this);
		this.hideCard = this.hideCard.bind(this);
		this.showEntry = this.showEntry.bind(this);
		this.hideEntry = this.hideEntry.bind(this);
		this.pixelsDiff = this.pixelsDiff.bind(this);
		this.state = {title: null, startDate: null, endDate: null, description: null, extension: null, timelineLength: 2000, 
			entryType:null, showEntry: false, showCard: false, firstDay: new Date("2014/09/24"), lastDay: new Date("2019/06/15"), 
			index: null, classCompany: null};
	}

    showCard(e) {
		this.setState({showCard: true});
		var current_index = e.currentTarget.id;
		this.setState({title: data[current_index]['title']});
		this.setState({startDate: data[current_index]['startDate']});
		this.setState({endDate: data[current_index]['endDate']});
		this.setState({index: current_index});
		this.setState({extension: data[current_index]['extension']});
		this.setState({entryType: data[current_index]['entryType']});
		this.setState({classCompany: data[current_index]['classCompany']});
	}

	hideCard() {
		this.setState({showCard: false});
	}

	showEntry(e) {
		this.setState({showEntry: true});
	}

	hideEntry() {
		this.setState({showEntry: false});
	}

	pixelsDiff(firstDate, secondDate) {
		var oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds
		let daysDiff= Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
		let totalDays = Math.round(Math.abs((this.state.firstDay - this.state.lastDay.getTime())/(oneDay)));
		return Math.floor(this.state.timelineLength * (daysDiff / totalDays));
	 }
	 
	 
	render() {

		let card;
		if (this.state.showCard == false) {
			card = <div></div>;
		} else {
			card = <Card title={this.state.title} extension={this.state.extension} index={this.state.index} imgSource={this.state.imgSource} startDate={this.state.startDate} endDate={this.state.end_date} timelineLength={this.state.timelineLength} firstDay={this.state.firstDay} lastDay={this.state.lastDay}/>;
		}



		let entry;
		if (this.state.entryType == "pic" ) {
			entry = <ImgEntry extension={this.state.extension}/> 
		} else if (this.state.entryType == "pics") {
			entry = <ImgsEntry extension={this.state.extension}/> 
		} else if (this.state.entryType == "website") {
			entry = "website";
		}


		if (this.state.showEntry == false) {
			return (
				<div>
					<div className="row" id='timeline-section'>
						<GuideTimeline timelineLength={this.state.timelineLength} firstDay={this.state.firstDay} lastDay={this.state.lastDay}/>
						<div className="col s3" id="timeline-container">
							<div id='timeline'>
								<div id="0" className="bar academic" style={{top:this.pixelsDiff(new Date(data[0]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[0]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
								<div id="1" className="bar academic" style={{top:this.pixelsDiff(new Date(data[1]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[1]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
								<div id="2" className="bar academic" style={{top:this.pixelsDiff(new Date(data[2]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[2]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
								<div id="3" className="bar academic" style={{top:this.pixelsDiff(new Date(data[3]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[3]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
								<div id="4" className="bar work" style={{top:this.pixelsDiff(new Date(data[4]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[4]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
								<div id="5" className="bar work" style={{top:this.pixelsDiff(new Date(data[5]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[5]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
								<div id="6" className="bar work" style={{top:this.pixelsDiff(new Date(data[6]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[6]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
								<div id="7" className="bar recreation" style={{top:this.pixelsDiff(new Date(data[7]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[7]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
							</div>
						</div>
						{card}
					</div>
				</div>
			)
		} else {
			return (
				<div id='entry-view'>
					<a className="btn-floating btn-large waves-effect waves-light black" onClick={this.hideEntry}><img src={closeImg} alt="back arrow"/></a>
					<h1>{this.state.title}</h1>
					<div id="meta-info">
						<b>{this.state.classCompany}</b>
						<br/>
						{this.state.startDate} - {this.state.endDate} 
					</div>
					<div id="entry">{entry}</div>
					<div id="description"><h3>Context</h3><br/><br/> {descriptions[this.state.index]}</div>
					<div id="reflection"><h3>Reflection</h3><br/><br/> {reflections[this.state.index]}</div>
				</div>
			)
		}
	}
}