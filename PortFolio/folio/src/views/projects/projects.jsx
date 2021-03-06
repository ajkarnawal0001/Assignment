import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, createTheme, themes } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image";

//Css file
import './project.css'

//Projects 
import trivago from "../../assets/img/project/trivago.png"
import hirist from "../../assets/img/project/hirist.png"
import lybrate from "../../assets/img/project/lybrate.png"
import instagram from "../../assets/img/project/insta pic.jfif"

//Skills
import L_REDUX from "../../assets/img/skills/redux.svg"
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg"
import L_STYLED_COMP from "../../assets/img/skills/styled-components.svg"
import L_RRD from "../../assets/img/skills/react-router.svg"
import L_REACT_PAGINATION  from "../../assets/img/skills/react-pagination.png"
import L_REACT_TOSTIFY  from "../../assets/img/skills/react-tostify.png"
import L_EXXPRESS from "../../assets/img/skills/express.svg"
import L_MONGOOSE from "../../assets/img/skills/Data Structure Icon_files/automation-44-991242.png"
import L_MONGO from "../../assets/img/skills/mongodb-ar21.svg"
import Button from '@material-ui/core/Button';

// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#ec4b4f',
  },
  marker: {
    borderColor: '#070d59',
  },
  timelineTrack: {
    backgroundColor: '#ec4b4f',
  },
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>

        {/* instagram */}

        <ImageEvent
            date="4 Oct, 2021"
            className="text-center"
            text="Instagram"
            src={instagram}
            alt="instagram"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Instagram is a social media platform, in which we can meet with new peoples and chat with them and see stories ans post. This Bringing you closer to the people and things you love.
                        <hr />
                        <strong>Role and Responsibilities:</strong>
                        <ul className="list-styles pt-1">
                          <li>Have done in 1 week.</li>
                          <li>Have done with 4 team members.</li>
                          <li>My role is to handle git-hub and most of the UI part with functionalities.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="react"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="MUI"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RRD}
                                alt="RRD"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Router Dom
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLED_COMP}
                                alt="styled components"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Styled Components
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_PAGINATION}
                                alt="Pagination"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Pagination
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGO}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGOOSE}
                                alt="Mongoose"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Mongoose
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express 
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <Button
                className="ButtonSmall"
                  href="https://instagram-clone-ap.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </Button>
                <Button
                className="ButtonSmall"
                  href="https://github.com/Ramlala-Yadav-Git/Instagram-clone"
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>

        {/* instagram */}
          {/* //Trivago */}
          <ImageEvent
            date="24th Aug, 2021"
            className="text-center"
            text="TRIVAGO"
            src={trivago}
            alt="Trivago"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is Providing the most accurate hotel information and the best rates to our users is the primary focus, This is the best website to compare te price of Flats/House/Apartment as well.
                        <hr />
                        <strong>Role and Responsibilities:</strong>
                        <ul className="list-styles pt-1">
                          <li>Have done in 1 week.</li>
                          <li>Have done with 4 team members.</li>
                          <li>My role is to manage and build redux, manage data and Api and some components.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="react"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="MUI"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RRD}
                                alt="RRD"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Router Dom
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLED_COMP}
                                alt="styled components"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Styled Components
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              
                <Button
                
                className="ButtonSmall"
                // add deploy link
                  href="https://trivago24-acp24.vercel.app"
                  target="_blank"
                >
                  SEE LIVE
                </Button>
                <Button
                className="ButtonSmall"
                  href="https://github.com/Rahul3105/trivago-clone"
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>

          {/* //hirist */}

          <ImageEvent
            date="22nd July, 2021"
            className="text-center"
            text="HIRIST"
            src={hirist}
            alt="hirist"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Hirist.com is an exclusive job portal for technology geeks who sleep and dream PHP, Java, C, C++, Python, Ruby on Rails etc. We feature some of the best jobs in the technology sphere across categories like Online, Mobile, Web, UI/UX and Enterprise (SAP/Oracle) and we're shaking up the online recruitment space in India.
                        <hr />
                        <strong>Role and Responsibilities:</strong>
                        <ul className="list-styles pt-1">
                          <li>Have done in 1 week.</li>
                          <li>Have done with 4 team members.</li>
                          <li>My role is to handle git-hub and make form with formik validation and handle css and manage data and api.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="react"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RRD}
                                alt="RRD"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Router Dom
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLED_COMP}
                                alt="styled components"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Styled Components
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <Button
                className="ButtonSmall"
                  href="https://hiristclone.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </Button>
                <Button
                className="ButtonSmall"
                  href="https://github.com/amit-web/Project-hirist-clone"
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>

         

          {/* //lybrateApp */}

          <ImageEvent
            date="9th June, 2021"
            className="text-center"
            text="LYBRATE"
            src={lybrate}
            alt="lybrate App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> If you are a Music Lover!, then its the best app for you to collect your music collection in one place.
                        <hr />
                        <strong>Role and Responsibilities:</strong>
                        <ul className="list-styles pt-1">
                          <li>Have done in 1 week.</li>
                          <li>Have done with 4 team members.</li>
                          <li>My role is to make form and some pages and handle functionalities with javascript.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <Button
                className="ButtonSmall"
                  href="https://adibaabid.github.io/Music-List-App/"
                  target="_blank"
                >
                  SEE LIVE
                </Button>
                <Button
                className="ButtonSmall"
                  href="https://github.com/ajkarnawal0001/Lybrate"
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  )
}


export default ProjectTimeline