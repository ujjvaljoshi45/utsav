import './Ourwork.css'
import Carp from './photos/carp.jpeg'
import AnimoMeter from './photos/AnimoMeter.jpg'
import BatterCharger from './photos/BatteryCharger.jpg'
import MechWindSensor from './photos/MechWindSensor.jpg'
import SearchLight from './photos/SearchLight.jpg'
import UltrasonicWindSensor from './photos/UltrasonicWindSensor.jpg'
import MTU from './photos/MTU.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function OurWork() {
    return (
        <div className="ourwork" id="ourwork">
            <Container className='ourworkdiv'>
                <h2 style={{ fontFamily: 'unset' }}>Sale And Service</h2>
                <p className='ourwork-prompt'>
                    Stay connected and comfortable with Utsav Electrotech! <br/>
                    We offer <b style={{ fontSize: '32px', fontFamily: 'unset', color: 'wheat' }}> top-quality </b>sales and service of electronic devices,<br/>
                    including TVs, Air Conditioners, and Refrigerators.<br/>
                    Our team of experts provides excellent customer service and support,<br/>
                    from helping you select the right products to providing<br/>
                    <b style={{ fontSize: '32px', fontFamily: 'unset', color: 'wheat' }}>eliable repairs </b>and maintenance services.<br/>
                    Trust us to provide the innovative and<br/>
                    <b style={{ fontSize: '32px', fontFamily: 'unset', color: 'wheat' }}>cost-effective solutions </b>you need.<br/></p>
                <Row style={{alignItems:'center', textAlign:'center'}}>
                    <Col>
                        <img className='imagecls' src={'https://upload.wikimedia.org/wikipedia/commons/1/10/Mitsubishi_Electric_logo.svg'}></img>
                    </Col>
                    <Col>
                    <img className='imagecls' src={'https://upload.wikimedia.org/wikipedia/commons/6/66/Liebherr_logo.svg'}></img>
                    </Col>
                    <img className='imagecls' src={Carp}></img>
                    <Col>
                    </Col>
                </Row>

            </Container>
            <Container className='ourworkdiv'>
                <h2 style={{ fontFamily: 'unset' }}>Marine Sector</h2>
                <p className='ourwork-prompt'>When it comes to marine electronics, <b style={{ fontSize: '32px', fontFamily: 'unset', color: 'wheat' }}>experience matters.</b><br /> At Utsav Electrotech, we've got the expertise you need. <br />
                    Our team of professionals has years of experience dealing with <br />
                    a wide range of electronic devices used in marine environments. <br />
                    We understand the unique challenges of marine electronics and <br />
                    are equipped to handle any issue that may arise. <br />
                    Trust us to provide <b style={{ fontSize: '32px', fontFamily: 'unset', color: 'wheat' }}>reliable service and tailored solutions</b> to <br />
                    keep you connected and ahead of the game.<br /></p>
                <Row>
                    <Col>
                        <img className="imagecls" src={MTU} />
                        <h3>MTU Devices</h3>
                    </Col>
                    <Col>
                        <img className="imagecls" src={BatterCharger} />
                        <h3>Battery Charger</h3>
                    </Col>
                    <Col>
                        <img className="imagecls" src={MechWindSensor} />
                        <h3>Mechanical Wind Sensor</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img className="imagecls" src={SearchLight} />
                        <h3>Search Light</h3>
                    </Col>
                    <Col>
                        <img className="imagecls" src={UltrasonicWindSensor} />
                        <h3>Ultrasonic Wind Sensor</h3>
                    </Col>
                    <Col>
                        <img className="imagecls" src={AnimoMeter} />
                        <h3>Animo Meter</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}