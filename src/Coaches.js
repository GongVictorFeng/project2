import coach1 from "../src/assets/Pc1.jpg";
import coach2 from "../src/assets/Pc2.jpg";
import coach3 from "../src/assets/Pc3.jpg";
import {Button} from 'react-bootstrap';
const Coaches = () => {
    return ( 
        <section id="experts" class="container bg-light mt-2">
        <div class="bg-light py-2">
            <div class="container">
            <h3 class="mb-sm-2 text-start">Our Team</h3>
                <div class="row">
                    <div class="col-2 text-start"><a href="/">Join us</a></div>
                </div>
                <div class="row mb-4 mt-2 align-items-center border-bottom">
                    <div class="col-3">
                        <img src={coach1} alt="" style={{width:'25rem', height:'15rem'}}/>
                    </div>
                    <div class="col-1 mb-3 mb-md-0">
                    </div>
                    <div class="col-7 ms-5 ps-3 text-start  ">
                        <h5>Expert 1</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi, hic unde perferendis iste libero est nulla repudiandae suscipit laboriosam tenetur doloribus minima, debitis dolorem sequi! Cum totam quisquam eveniet, sunt amet necessitatibus maiores sequi perferendis molestias obcaecati consequuntur minus voluptatem optio nam ea, in voluptas quaerat est minima. Autem, ipsam porro quibusdam, incidunt quis laudantium corrupti quidem mollitia, minus iusto accusantium! Voluptatem veniam quis nisi. Pariatur sit ullam quisquam ab debitis ducimus voluptas, reiciendis est tempore modi saepe natus maxime architecto aperiam labore accusamus, ipsum recusandae illum sint facere quam iusto provident nesciunt! Provident quo voluptatibus adipisci vitae aliquid!
                        </p>
                        <Button variant="warning mb-3">Consult</Button>
                    </div>
                </div>

                <div class="row mb-4 mt-5 align-items-center border-bottom">
                    <div class="col-3">
                        <img src={coach2} alt="" style={{width:'25rem', height:'15rem'}}/>
                    </div>
                    <div class="col-1 mb-3 mb-md-0">
                    </div>
                    <div class="col-7 ms-5 ps-3 text-start  ">
                        <h5>Expert 2</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi, hic unde perferendis iste libero est nulla repudiandae suscipit laboriosam tenetur doloribus minima, debitis dolorem sequi! Cum totam quisquam eveniet, sunt amet necessitatibus maiores sequi perferendis molestias obcaecati consequuntur minus voluptatem optio nam ea, in voluptas quaerat est minima. Autem, ipsam porro quibusdam, incidunt quis laudantium corrupti quidem mollitia, minus iusto accusantium! Voluptatem veniam quis nisi. Pariatur sit ullam quisquam ab debitis ducimus voluptas, reiciendis est tempore modi saepe natus maxime architecto aperiam labore accusamus, ipsum recusandae illum sint facere quam iusto provident nesciunt! Provident quo voluptatibus adipisci vitae aliquid!
                        </p>
                        <Button variant="warning mb-3">Consult</Button>
                    </div>
                </div>
                <div class="row mb-4 mt-5 align-items-center border-bottom">
                    <div class="col-3">
                        <img src={coach3} alt="" style={{width:'25rem', height:'15rem'}}/>
                    </div>
                    <div class="col-1 mb-3 mb-md-0">
                    </div>
                    <div class="col-7 ms-5 ps-3 text-start  ">
                        <h5>Expert 3</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi, hic unde perferendis iste libero est nulla repudiandae suscipit laboriosam tenetur doloribus minima, debitis dolorem sequi! Cum totam quisquam eveniet, sunt amet necessitatibus maiores sequi perferendis molestias obcaecati consequuntur minus voluptatem optio nam ea, in voluptas quaerat est minima. Autem, ipsam porro quibusdam, incidunt quis laudantium corrupti quidem mollitia, minus iusto accusantium! Voluptatem veniam quis nisi. Pariatur sit ullam quisquam ab debitis ducimus voluptas, reiciendis est tempore modi saepe natus maxime architecto aperiam labore accusamus, ipsum recusandae illum sint facere quam iusto provident nesciunt! Provident quo voluptatibus adipisci vitae aliquid!
                        </p>
                        <Button variant="warning mb-3">Consult</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Coaches;