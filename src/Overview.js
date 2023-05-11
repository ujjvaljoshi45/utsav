import './Overview.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Overview() {
    return (
        <div className="overview">
            <Container className='overview-div'>
                <Col>
                    <Row className='colcontent text-justify text-center' id='colhead'><h1
                    style={{fontFamily:'unset'}}>Utsav Electrotech</h1></Row>
                    <Row className='overview-prompt' id='coldes'>
                        <p>
                            Looking for <b style={{fontSize:'32px',fontFamily:'unset', color:'wheat'}}>top-notch sales and service</b> of <br/>
                            electronic devices? Utsav Electrotech has got you covered!<br/>
                            We offer innovative solutions for marine electronics problems too!<br/>
                            <br/>

                            Our team of experts is dedicated to providing <br/>
                            high-quality products and services that exceed your expectations.<br/> Whether you need a new device or repairs for existing equipment,<br/> we're your one-stop-shop.<br/><br/>

                            Don't let technical issues hold you back any longer! <br/>
                            <b style={{fontSize:'32px',fontFamily:'unset', color:'wheat'}}> Trust Utsav Electrotech </b> to keep you connected <br/>
                            and ahead of the game. <a href='#contactus'> Contact us </a>today to learn more!<br/>
                        </p>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}