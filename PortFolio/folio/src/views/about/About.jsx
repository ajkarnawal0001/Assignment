import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/amar pic.jpeg";
import Profile1 from "../../assets/img/profile/01.JPG";
import Profile2 from "../../assets/img/profile/02.JPG";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import styled from 'styled-components'
// import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <ImageMy  className="profile justify-content-end myImg" alt="profile" src={Profile1} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                <AboutHead>
                  <h3>Name:Amarjeet Singh</h3>
                  <hr />
                  <h4>Email: akarnawal0001@gmail.com , Mobile:9599626625</h4>
                  <hr />
                  <h4>Address:Balwant colony kichha ,U.S.Nagar
                  Uttarakhand</h4>
                  </AboutHead>
                <br />Web Developer with expertise of React.js, Redux, HTML and CSS and good knowledge of Data Structure and Algorithm.
                <br /><br/>
                I am passionate programmer and a learner, I've amassed over 4 years to studied with B.tech (CSE) and having recently completed a 6 month deliberate practice training. I'm passionate about working with different projects with different Team members.".
                <br />
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1xp1794AZ-4db-VyZynTyggk9JUOO1-xI/view" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ajkarnawal0001" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/amarjeet-singh-4723b4190/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const ImageMy = styled.img`
border-radius:40%;
`
const AboutHead = styled.div`
font-size:16px;
font-weight:bold;
color:black;
`

export default About;