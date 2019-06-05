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
import Phil1001 from "../data/portfolio_entries/Phil100_Essay/pic1.JPG";
import Phil1002 from "../data/portfolio_entries/Phil100_Essay/pic2.JPG";
import Phil1003 from "../data/portfolio_entries/Phil100_Essay/pic3.JPG";
import Phil1004 from "../data/portfolio_entries/Phil100_Essay/pic4.JPG";
import Phil1005 from "../data/portfolio_entries/Phil100_Essay/pic5.JPG";
import WhatWeKnow1 from "../data/portfolio_entries/WhatWeKnow/pic1.JPG";
import WhatWeKnow2 from "../data/portfolio_entries/WhatWeKnow/pic2.JPG";
import WhatWeKnow3 from "../data/portfolio_entries/WhatWeKnow/pic3.JPG";
import WhatWeKnow4 from "../data/portfolio_entries/WhatWeKnow/pic4.JPG";
import WhatWeKnow5 from "../data/portfolio_entries/WhatWeKnow/pic5.JPG";
import WhatWeKnow6 from "../data/portfolio_entries/WhatWeKnow/pic6.JPG";
import WhatWeKnow7 from "../data/portfolio_entries/WhatWeKnow/pic7.JPG";
import Chem1521 from "../data/portfolio_entries/Chem152/pic1.JPG";
import Chem1522 from "../data/portfolio_entries/Chem152/pic2.JPG";
import Chem1523 from "../data/portfolio_entries/Chem152/pic3.JPG";
import Chem1524 from "../data/portfolio_entries/Chem152/pic4.JPG";
import Cse1421 from "../data/portfolio_entries/CSE142/pic1.JPG";
import Cse1422 from "../data/portfolio_entries/CSE142/pic2.JPG";
import Cse1423 from "../data/portfolio_entries/CSE142/pic3.JPG";
import Cse1424 from "../data/portfolio_entries/CSE142/pic4.JPG";
import Phil1141 from "../data/portfolio_entries/PHIL114_FinalPaper/pic1.JPG";
import Phil1142 from "../data/portfolio_entries/PHIL114_FinalPaper/pic2.JPG";
import Phil1143 from "../data/portfolio_entries/PHIL114_FinalPaper/pic3.JPG";
import Phil1144 from "../data/portfolio_entries/PHIL114_FinalPaper/pic4.JPG";
import Phil1145 from "../data/portfolio_entries/PHIL114_FinalPaper/pic5.JPG";
import Phil1146 from "../data/portfolio_entries/PHIL114_FinalPaper/pic6.JPG";
import Phil1147 from "../data/portfolio_entries/PHIL114_FinalPaper/pic7.JPG";
import BIME1 from "../data/portfolio_entries/BIME498_CountDiagnoses/pic1.JPG";
import BIME2 from "../data/portfolio_entries/BIME498_CountDiagnoses/pic2.JPG";
import BIME3 from "../data/portfolio_entries/BIME498_CountDiagnoses/pic3.JPG";
import Olympics1 from "../data/portfolio_entries/HONORS220_Trip/pic1.JPG";
import Olympics2 from "../data/portfolio_entries/HONORS220_Trip/pic2.JPG";
import Olympics3 from "../data/portfolio_entries/HONORS220_Trip/pic3.JPG";
import Olympics4 from "../data/portfolio_entries/HONORS220_Trip/pic4.JPG";
import Olympics5 from "../data/portfolio_entries/HONORS220_Trip/pic5.JPG";
import Olympics6 from "../data/portfolio_entries/HONORS220_Trip/pic6.JPG";
import Olympics7 from "../data/portfolio_entries/HONORS220_Trip/pic7.JPG";
import Olympics8 from "../data/portfolio_entries/HONORS220_Trip/pic8.JPG";
import Olympics9 from "../data/portfolio_entries/HONORS220_Trip/pic9.JPG";
import Olympics10 from "../data/portfolio_entries/HONORS220_Trip/pic10.JPG";
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
        } else if (this.props.extension == "Phil100_Essay") {
            pics = [Phil1001, Phil1002, Phil1003, Phil1004, Phil1005];
        } else if (this.props.extension == "WhatWeKnow") {
            pics = [WhatWeKnow1, WhatWeKnow2, WhatWeKnow3, WhatWeKnow4, WhatWeKnow5, WhatWeKnow6, WhatWeKnow7];
        } else if (this.props.extension == "Chem152") {
            pics = [Chem1521, Chem1522, Chem1523, Chem1524];
        } else if (this.props.extension == "Cse142"){
            pics = [Cse1421, Cse1422, Cse1423, Cse1424];
        } else if (this.props.extension == "PHIL114_FinalPaper") {
            pics = [Phil1141, Phil1142, Phil1143, Phil1144, Phil1145, Phil1146, Phil1147];
        } else if (this.props.extension == "BIME498_CountDiagnoses") {
            pics = [BIME1, BIME2, BIME3];
        } else if (this.props.extension == "HONORS220_Trip") {
            pics = [Olympics1, Olympics2, Olympics3, Olympics4, Olympics5, Olympics6, Olympics7, Olympics8, Olympics9, Olympics10];
        } else {
            pics = [emptyPhoto];
        }



        return (
            
            <Carousel options={{fullWidth: true,indicators: true}} images={pics} />
        )
	}
}