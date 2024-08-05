import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Projects.css';

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <hr></hr>
      <div className='projects-container'>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="amai-logo.png" />
            <Card.Body>
            <Card.Title>Amai App</Card.Title>
            <Card.Text>
            Amai is a health tracker app aimed to help people who struggle with health problems keep track of their wellbeing. It is specifically aimed at those who struggle with diabetic symptoms (Pre-Diabetes, Diabetes I, Diabetes II) and need help tracking their food intake and glucose levels, 
            hence the name "Amai", the romanization of the Japanese word あまい, meaning sweet. While the goal is to keep track of details such as blood sugar levels, there is also features like a heart rate tracker and notes section. This allows the app to also provide a general outlet for the users 
            thoughts and emotions. My vision for this app is something minimalistic and is easy to navigate in order to increase accessibility. This project was inspired by my mother who struggles with health issues.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated Nov 24, 2023</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="k2gr8-logo.png" />
            <Card.Body>
              <Card.Title>K2GR8</Card.Title>
              <Card.Text>
              Our goal is to broaden the possibilities of what it means to learn in a classroom and learn at home through the future of education: personalized learning.
              With the help of ChatGPT and OpenAi, we would utilize the auto generation of questions to help create questions, presented on a web platform, that are catered to make personalized learning paths for every student.
              Through different data sets and analytics, teachers and guardians would not only be able to understand areas where students are struggling, but also expand their in-person teaching styles using a virtual application that can increase the engagement and retention of all kinds of students in education.
              </Card.Text>
              <Card.Text>
                This project won an award for the Best Accessibility Hack presented by MLH and sponsored by Fidelity at Columbia University's DivHacks 2023.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated Sep 24, 2023</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Student Verifier Bot</Card.Title>
              <Card.Text>
                A Discord Bot that takes in a csv file of student names and verifies if person attempting to join a 
                server is in the list of names. Intended to automate the process of student verification for Hunter
                College's Daedalus Honors Program Discord server.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">In Progress...</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        </div>
    </div>
  );
}

export default Projects
