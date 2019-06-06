import React, { Component } from "react";
import "./TimelineSection.css";
import {GuideTimeline} from "../GuideTimeline.js";
import {WorkTimeline} from "../WorkTimeline.js";
import {ExtracurricularTimeline} from "../ExtracurricularTimeline.js";
import {ImgEntry} from "../ImgEntry.js";
import {ImgsEntry} from "../ImgsEntry.js";
import {WebsiteEntry} from "../WebsiteEntry.js";
import {Card} from "../Card.js";
import { Dropdown } from 'react-materialize';
import { Button } from 'react-materialize';
import { Icon } from 'react-materialize';

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
		this.switchTimeline = this.switchTimeline.bind(this);
		this.state = {title: null, startDate: null, endDate: null, description: null, extension: null, timelineLength: 2000, 
			entryType:null, showEntry: false, showCard: false, firstDay: new Date("2014/09/24"), lastDay: new Date("2019/06/15"), 
			index: null, classCompany: null, timelineType:"academic"};
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

	 switchTimeline(e) {
		this.setState({timelineType: e.currentTarget.id});
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
			entry = <WebsiteEntry extension={this.state.extension} index={this.state.index}/> ;
		}

		let timeline;
		let timelineTitle;
		let bars;
		if (this.state.timelineType == "academic" ) {
			timeline = <GuideTimeline timelineLength={this.state.timelineLength} firstDay={this.state.firstDay} lastDay={this.state.lastDay}/>
			timelineTitle = "Academic Timeline";
			bars = 	<>
				<div id="0" className="bar academic" style={{top:this.pixelsDiff(new Date(data[0]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.005}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="1" className="bar academic" style={{top:this.pixelsDiff(new Date(data[1]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.005}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="2" className="bar academic" style={{top:this.pixelsDiff(new Date(data[2]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.005}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="8" className="bar academic" style={{top:this.pixelsDiff(new Date(data[8]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.05}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="9" className="bar academic" style={{top:this.pixelsDiff(new Date(data[9]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.05}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="10" className="bar academic" style={{top:this.pixelsDiff(new Date(data[10]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.04}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="11" className="bar academic" style={{top:this.pixelsDiff(new Date(data[11]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.05}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				{/*<div id="12" className="bar academic" style={{top:this.pixelsDiff(new Date(data[12]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.05}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="13" className="bar academic" style={{top:this.pixelsDiff(new Date(data[13]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.05}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>*/}
				<div id="14" className="bar academic" style={{top:this.pixelsDiff(new Date(data[14]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.05}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="15" className="bar academic" style={{top:this.pixelsDiff(new Date(data[15]['startDate']), this.state.firstDay), height: this.state.timelineLength * 0.05}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				</>
		} else if (this.state.timelineType == "work") {
			timeline = <WorkTimeline timelineLength={this.state.timelineLength} firstDay={this.state.firstDay} lastDay={this.state.lastDay}/>
			timelineTitle = "Work Timeline";
			bars = 	<>
					<div id="3" className="bar work" style={{top:this.pixelsDiff(new Date(data[3]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.06}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="4" className="bar work" style={{top:this.pixelsDiff(new Date(data[4]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.5}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="5" className="bar work" style={{top:this.pixelsDiff(new Date(data[5]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.06}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				<div id="6" className="bar work" style={{top:this.pixelsDiff(new Date(data[6]['startDate']), this.state.firstDay), height:this.state.timelineLength * 0.15}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
				</>
		} else if (this.state.timelineType == "extracurricular") {
			timeline = <ExtracurricularTimeline timelineLength={this.state.timelineLength} firstDay={this.state.firstDay} lastDay={this.state.lastDay}/>
			timelineTitle = "Extracurricular Timeline";
			bars = 	<>
			<div id="7" className="bar recreation" style={{top:this.pixelsDiff(new Date(data[7]['startDate']), this.state.firstDay), height:this.pixelsDiff(new Date(data[7]['startDate']), new Date(data[0]['endDate']))}} onClick={this.showEntry} onMouseEnter={this.showCard} onMouseLeave={this.hideCard}></div>
			</>
		}


		if (this.state.showEntry == false) {
			return (
				<div>
					<div className="row">
						<div id="drop-down">
							<Dropdown trigger={<Button waves="light" style={{marginRight: '5px', backgroundColor: "#005862"}}>Select timeline</Button>}>
								<a id="academic" onClick={this.switchTimeline} href="#">
									<div id="example-circle-academic"></div>
									academic
								</a>
								<a id="work" onClick={this.switchTimeline} href="#">
									<div id="example-circle-work"></div>
									work
								</a>
								<a id="extracurricular" onClick={this.switchTimeline} href="#">
									<div id="example-circle-extracurricular"></div>
									extracurricular
								</a>
							</Dropdown>
						</div>
						<div id="timeline-title">{timelineTitle}</div>
					</div>

					<div className="row" id='timeline-section'>
						{timeline}
						<div className="col s3" id="timeline-container">
							<div id='timeline'>
								{bars}
							</div>
						</div>
						{card}
					</div>
				</div>
			)
		} else {
			return (
				<div id='entry-view'>
					<a className="btn-floating btn-large waves-effect waves-light black" onClick={this.hideEntry}>back</a>
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