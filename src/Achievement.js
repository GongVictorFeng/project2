import {Button,Card, ListGroup} from 'react-bootstrap';
import icon1 from "../src/assets/Pa1.png";
import icon2 from "../src/assets/Pa2.jpg";
import icon3 from "../src/assets/Pa3.png";
import icon4 from "../src/assets/Pa4.png";
import icon5 from "../src/assets/Pa5.png";

const Achievement = () => {
    return (  
        <section id="lecture" class="container bg-light">
        <div class="container-fluid  mt-3">
            <div class="row">
                <div class= "col-md-3 border border-dark">              
                
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={icon1} />
                        <Card.Body>
                            <Card.Title>Friends</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush text-start">
                        <ListGroup.Item>Friend 1</ListGroup.Item>
                        <ListGroup.Item>Friend 2</ListGroup.Item>
                        <ListGroup.Item>Friend 3</ListGroup.Item>
                        <ListGroup.Item>Friend 4</ListGroup.Item>
                        <ListGroup.Item>Friend 5</ListGroup.Item>
                        <ListGroup.Item>Friend 6</ListGroup.Item>
                        <ListGroup.Item>Friend 7</ListGroup.Item>
                        <ListGroup.Item>Friend 8</ListGroup.Item>
                        <ListGroup.Item>Friend 9</ListGroup.Item>
                        </ListGroup>
                    </Card>                  
                </div>
                <div class="col-md-8 ms-1">
                    <div class="row border border-dark py-3">
                        <div class="col ms-5">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={icon2} style={{height:'10rem' }} />
                                <Card.Body>
                                <Card.Title>Exercise Hours</Card.Title>
                                <Button variant="warning">Details</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col">
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={icon3} style={{height:'10rem' }} />
                                <Card.Body>
                                <Card.Title>Burning Calories</Card.Title>
                                <Button variant="warning">Details</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div class="row py-2 mt-5">
                        <div class="col border border-dark ">
                        <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={icon4} style={{ height: '8rem' }} />
                        <Card.Body>
                            <Card.Title>Ranking</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush text-start">
                        <ListGroup.Item>Friend 1</ListGroup.Item>
                        <ListGroup.Item>Friend 2</ListGroup.Item>
                        <ListGroup.Item>Friend 3</ListGroup.Item>
                        <ListGroup.Item>Friend 4</ListGroup.Item>
                        <ListGroup.Item>Friend 5</ListGroup.Item>
                        <ListGroup.Item>Friend 6</ListGroup.Item>
                        <ListGroup.Item>Friend 7</ListGroup.Item>
                        <ListGroup.Item>Friend 8</ListGroup.Item>
                        <ListGroup.Item>Friend 9</ListGroup.Item>
                        </ListGroup>
                        </Card> 
                        </div>
                        <div class="col border border-dark ">
                        <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={icon5} style={{ height: '8rem' }} />   
                        <ListGroup className="list-group-flush text-start">
                        <ListGroup.Item>Class 1</ListGroup.Item>
                        <ListGroup.Item>Class 2</ListGroup.Item>
                        <ListGroup.Item>Class 3</ListGroup.Item>
                        <ListGroup.Item>Class 4</ListGroup.Item>

                        </ListGroup>
                        </Card> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Achievement;