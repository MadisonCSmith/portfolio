import React, { Component } from "react";
import "./DocEntry.css";
//import { Document, Page } from 'react-pdf';


import WhoAreYouDoc from "../data/portfolio_entries/Honors100_WhoAreYou/artifact.pdf";

import ExperientialLearningPhoto from "../data/portfolio_entries/Honors100_ExperientialLearningInterview/pic1.JPG";
import CurriculumPhoto from "../data/portfolio_entries/Honors100_CurriculumPlanning/pic1.JPG";
import BGCCPhoto from "../data/portfolio_entries/BGCC/pic1.JPG";
import CTEPhoto from "../data/portfolio_entries/CTE/pic1.JPG";
import GuestServicesPhoto from "../data/portfolio_entries/GuestServices/pic1.JPG";
import PSEPhoto from "../data/portfolio_entries/PSE/pic1.JPG";
import CaminoPhoto from "../data/portfolio_entries/ElCaminodeSantiago/pic1.JPG";
import emptyPhoto from "../imgs/empty_photo.png";



import { Document, Page } from 'react-pdf/dist/entry.parcel';
//import 'react-pdf/dist/Page/AnnotationLayer.css';

//import './Sample.less';

import pdfFile from "../data/portfolio_entries/Honors100_WhoAreYou/artifact.pdf";

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};


export class DocEntry extends Component {
    state = {
        file: pdfFile,
        numPages: null,
      }
    
      onFileChange = (event) => {
        this.setState({
          file: event.target.files[0],
        });
      }
    
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    
      render() {
        const { file, numPages } = this.state;
    
        return (
          <div className="Example">
            <header>
              <h1>react-pdf sample page</h1>
            </header>
            <div className="Example__container">
              <div className="Example__container__load">
                <label htmlFor="file">Load from file:</label>
                {' '}
                <input
                  type="file"
                  onChange={this.onFileChange}
                />
              </div>
              <div className="Example__container__document">
                <Document
                  file={file}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                  options={options}
                >
                  {
                    Array.from(
                      new Array(numPages),
                      (el, index) => (
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                        />
                      ),
                    )
                  }
                </Document>
              </div>
            </div>
          </div>
        );
      }
    }