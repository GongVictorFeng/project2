import { Button} from 'react-bootstrap';
import mainP1 from "../src/assets/p2.jpg";
const Home = () => {
    return ( 
        <section id="promotion">
            <div class="container bg-dark">
                <div class="row justif-content-center">
                    <h2 class="text-white my-5">Save 30% on Enrollment</h2>
                </div>

                <div class="card bg-dark text-white">
                    <img src={mainP1} class="card-img" alt="..." height="600px" />
                    <div class="card-img-overlay">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1 class="card-title mt-5 fw-bolder">Become a member</h1>
                        <Button variant="warning">Register</Button>
                    </div>
            </div>
            </div>
            </section>
     );
}
 
export default Home;