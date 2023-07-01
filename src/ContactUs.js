import './Contactus.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactUs() {
    return (
        <div className="contactus" id="contactus">
            <Container className='contactus-div'>
                <h3>Contact Us</h3>
                
                <Row>
                    <Col className='col-div'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4369.696000225698!2d69.62358234619137!3d21.63794849237318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395634f62265fad1%3A0xb2e4c56c5517ab90!2sUtsav%20Electrotech!5e0!3m2!1sen!2sin!4v1683804839951!5m2!1sen!2sin" width="350" height="450" allowfullscreen="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    <Col className='col-div text-justify text-center flex'>
                        <h3>Address</h3>
                    <p>725,<br/>Shreeji Tower Opp:kamala park 360575,<br/>164/5, Rajiv Gandhi Rd,<br/>Chhaya, Porbandar,<br/>Gujarat 360575</p>
                    <h3 style={{color:'wheat'}}>Call us on : <br/>+91 94272 12869 | +91 98252 19413</h3>

                    <h3>Email us on : <a href='mailto:utsavelectrotech@gmail.com' style={{color:'wheat'}}>utsavelectrotech@gmail.com</a></h3>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}