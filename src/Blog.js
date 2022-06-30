import { Button, Card} from 'react-bootstrap';
import mainP2 from "../src/assets/p3.jpg";
import cardP1 from "../src/assets/p4.jpg";
import cardP2 from "../src/assets/p5.jpeg";
import cardP3 from "../src/assets/p6.jpg";
const Blog = () => {
    return (
        <section id="mainPic2">
            <div className="container">
            <Card>
            <Card.Img variant="top" src={mainP2} height="600px" />
            <Card.Body>
                <Card.Title>Welcome to XXXX Club's Blog</Card.Title>
                <Card.Text>
                At XXXX, we’re more than just a gym. We want to give you the tools to live a happy, healthy and good life inside and outside of the gym.
            </Card.Text>
            <div class="row">
                <div class="col-4">
                    <Button variant="warning">Exercise plan</Button>
                </div>
                <div class="col-4">
                <Button variant="warning">Nutrition plan</Button>
                </div>
                <div class="col-4">
                <Button variant="warning">Lifestyle</Button>
                </div>
            </div>
            </Card.Body>
      </Card>
            </div>

        <div class="container mt-4 bg-light">
            <div className="row">
                <h1 class="text-start">Latest Post</h1>
            </div>

            <div className="row mt-3 ms-5">
                <div className="col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cardP1} style={{height:'15rem' }} />
                        <Card.Body>
                            <Card.Title>Post 1</Card.Title>
                            <Card.Text>
                                 Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="warning">Read More</Button>
                            </Card.Body>
                        </Card>
                </div>

                <div className="col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cardP2} style={{height:'15rem' }}/>
                        <Card.Body>
                            <Card.Title>Post 2</Card.Title>
                            <Card.Text>
                                 Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="warning">Read More</Button>
                            </Card.Body>
                        </Card>
                </div>

                <div className="col">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={cardP3} style={{height:'15rem' }} />
                        <Card.Body>
                            <Card.Title>Post 3</Card.Title>
                            <Card.Text>
                                 Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="warning">Read More</Button>
                            </Card.Body>
                        </Card>
                </div>
            </div>

        </div>
        </section>
      );
}
 
export default Blog;