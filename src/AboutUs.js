import './Aboutus.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutUs() {
    return (
        <div className="aboutus" id="aboutus">
            <Container className='aboutus-div'>
                <h3>About Us</h3>
                <Col>
                    <Row className='aboutus-prompt'>
                        <h3>From Where We Come</h3>
                        <p>Started in the year of 2002 by Kamal Mehta and Prakash Joshi, <br/> 
                            Today Utsav Electrotech has given to there valuable customers <br/>
                            the experience of world class quality of services and <br/>
                            top-notch quality products. There Can be very few options <br/>
                            on the shelf but they all are reliable. 
                            <br/>Today we are the brand ambassador of Trust and Reliablity<br/>
                             when it comes to Elecrotnics and Engineering</p>
                    </Row>
                    <Row className='aboutus-prompt'>
                        <h3>Our Mission</h3>
                        <p>
                            Our Only mission is the smiling faceing of our Customers. <br/>
                            We want our customers to witness what a reliable service truly is. <br/>
                            Our only focus is to provide the best solutions and give back to the industry.<br/> We are commited to provide cost-effective and reliable solutions<br/> to our customers. The quality of our work is over only legacy.<br/>
                        </p>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}