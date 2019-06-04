import React, { Component } from "react";
import "./ImgsEntry.css";
import { Carousel } from 'react-materialize';

import BGCCPhoto from "../data/portfolio_entries/BGCC/pic1.JPG";
import CTEPhoto1 from "../data/portfolio_entries/CTE/pic1.JPG";
import CTEPhoto2 from "../data/portfolio_entries/CTE/pic2.JPG";
import CTEPhoto3 from "../data/portfolio_entries/CTE/pic3.JPG";
import CTEPhoto4 from "../data/portfolio_entries/CTE/pic4.JPG";
import CTEPhoto5 from "../data/portfolio_entries/CTE/pic5.JPG";
import CTEPhoto6 from "../data/portfolio_entries/CTE/pic6.JPG";
import GuestServicesPhoto1 from "../data/portfolio_entries/GuestServices/pic1.JPG";
import GuestServicesPhoto2 from "../data/portfolio_entries/GuestServices/pic2.JPG";
import GuestServicesPhoto3 from "../data/portfolio_entries/GuestServices/pic3.JPG";
import GuestServicesPhoto4 from "../data/portfolio_entries/GuestServices/pic4.JPG";
import GuestServicesPhoto5 from "../data/portfolio_entries/GuestServices/pic5.JPG";
import GuestServicesPhoto6 from "../data/portfolio_entries/GuestServices/pic6.JPG";
import GuestServicesPhoto7 from "../data/portfolio_entries/GuestServices/pic7.JPG";
import GuestServicesPhoto8 from "../data/portfolio_entries/GuestServices/pic8.JPG";
import GuestServicesPhoto9 from "../data/portfolio_entries/GuestServices/pic9.JPG";
import GuestServicesPhoto10 from "../data/portfolio_entries/GuestServices/pic10.JPG";
import PSEPhoto1 from "../data/portfolio_entries/PSE/pic1.JPG";
import PSEPhoto2 from "../data/portfolio_entries/PSE/pic2.JPG";
import PSEPhoto3 from "../data/portfolio_entries/PSE/pic3.JPG";
import PSEPhoto4 from "../data/portfolio_entries/PSE/pic4.JPG";
import PSEPhoto5 from "../data/portfolio_entries/PSE/pic5.JPG";
import PSEPhoto6 from "../data/portfolio_entries/PSE/pic6.JPG";
import PSEPhoto7 from "../data/portfolio_entries/PSE/pic7.JPG";
import CaminoPhoto1 from "../data/portfolio_entries/ElCaminodeSantiago/pic1.JPG";
import CaminoPhoto2 from "../data/portfolio_entries/ElCaminodeSantiago/pic2.JPG";
import CaminoPhoto3 from "../data/portfolio_entries/ElCaminodeSantiago/pic3.JPG";
import CaminoPhoto4 from "../data/portfolio_entries/ElCaminodeSantiago/pic4.JPG";
import CaminoPhoto5 from "../data/portfolio_entries/ElCaminodeSantiago/pic5.JPG";
import CaminoPhoto6 from "../data/portfolio_entries/ElCaminodeSantiago/pic6.JPG";
import CaminoPhoto7 from "../data/portfolio_entries/ElCaminodeSantiago/pic7.JPG";
import CaminoPhoto8 from "../data/portfolio_entries/ElCaminodeSantiago/pic8.JPG";
import CaminoPhoto9 from "../data/portfolio_entries/ElCaminodeSantiago/pic9.JPG";
import CaminoPhoto10 from "../data/portfolio_entries/ElCaminodeSantiago/pic10.JPG";
import emptyPhoto from "../imgs/empty_photo.png";


export class ImgsEntry extends Component {

	constructor(props) {
        super(props);
	}

	 
	render() {

        let pics;
        console.log(this.props.extension);

        if (this.props.extension == "CTE") {
                pics = [CTEPhoto1, CTEPhoto2, CTEPhoto3, CTEPhoto4, CTEPhoto5, CTEPhoto6];
        } else if (this.props.extension == "GuestServices"){
            pics = [GuestServicesPhoto1, GuestServicesPhoto2, GuestServicesPhoto3, GuestServicesPhoto4, GuestServicesPhoto5, GuestServicesPhoto6, GuestServicesPhoto7, GuestServicesPhoto8, GuestServicesPhoto9, GuestServicesPhoto10];
        } else if (this.props.extension == "PSE"){
            pics = [PSEPhoto1, PSEPhoto2, PSEPhoto3, PSEPhoto4, PSEPhoto5, PSEPhoto6, PSEPhoto7];
        } else if (this.props.extension == "ElCaminodeSantiago"){
            pics = [CaminoPhoto1, CaminoPhoto2, CaminoPhoto3, CaminoPhoto4, CaminoPhoto5, CaminoPhoto6, CaminoPhoto7, CaminoPhoto8, CaminoPhoto9, CaminoPhoto10];
        } else {
            pics = [emptyPhoto];
        }



        return (
            
            <Carousel options={{fullWidth: true,indicators: true}} images={pics} />
        )
	}
}