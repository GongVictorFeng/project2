import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';

const Classes = () => {
    return ( 
        <section id="lecture" class="container bg-light">
            <div class="container-fluid  mt-3">
                <div class="row">
                    <div class= "col-md-3 border border-dark ms-5">              
                        <h5 class="text-start">Class Schedule Filter</h5>
                        <div class="mt-4">
                         <DropdownButton id="dropdown-basic-button" title="Instructor" variant="warning">
                            <Dropdown.Item href="#/action-1">Instructor 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Instructor 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Instructor 3</Dropdown.Item>
                         </DropdownButton>
                        </div> 

                        <div class="mt-5">

                            <Form.Label>Class Starts</Form.Label>
                            <Form.Range />
                        </div> 
                        <p class="mt-5">Class duration</p>
                        <div class="row">
                            <div class="col-4">
                                <Button variant="warning">15 mins</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">30 mins</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">45 mins</Button>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-4">
                                <Button variant="warning">60 mins</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">75 mins</Button>
                            </div>
                        </div>

                        <p class="mt-5">Class Intensity</p>
                        <div class="row">
                            <div class="col-4">
                                <Button variant="warning">Low</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">Medium</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">High</Button>
                            </div>
                        </div>

                        <p class="mt-5">Class Categories</p>
                        <div class="row">
                            <div class="col-4">
                                <Button variant="warning">Class 1</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">Class 2</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">Class 3</Button>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-4">
                                <Button variant="warning">Class 4</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">Class 5</Button>
                            </div>
                        </div>

                        <p class="mt-5">Class Type</p>
                        <div class="row mb-5">
                            <div class="col-4">
                                <Button variant="warning">Co-ed</Button>
                            </div>
                            <div class="col-4">
                                <Button variant="warning">Women</Button>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-8 ms-1">
                        <div class="row border border-dark py-3">
                            <div class="col">
                            <Button variant="light">Monday</Button></div>
                            <div class="col">
                            <Button variant="light">Tuesday</Button></div>
                            <div class="col">
                            <Button variant="light">Wednessday</Button></div>
                            <div class="col">
                            <Button variant="light">Thursday</Button></div>
                            <div class="col">
                            <Button variant="light">Friday</Button></div>
                            <div class="col">
                            <Button variant="light">Saturday</Button></div>
                            <div class="col">
                            <Button variant="light">Sunday</Button></div>
                        </div>

                        <div class="row border border-dark py-5 mt-1">
                            <div class="col">Time</div>
                            <div class="col">Duration</div>
                            <div class="col">Class Title</div>
                            <div class="col">Location</div>
                            <div class="col">
                            <Button variant="warning">Enroll</Button></div>
                        </div>

                        <div class="row border border-dark py-5">
                            <div class="col">Time</div>
                            <div class="col">Duration</div>
                            <div class="col">Class Title</div>
                            <div class="col">Location</div>
                            <div class="col">
                            <Button variant="warning">Enroll</Button></div>
                        </div>

                        <div class="row border border-dark py-5">
                            <div class="col">Time</div>
                            <div class="col">Duration</div>
                            <div class="col">Class Title</div>
                            <div class="col">Location</div>
                            <div class="col">
                            <Button variant="warning">Enroll</Button></div>
                        </div>

                        <div class="row border border-dark py-5">
                            <div class="col">Time</div>
                            <div class="col">Duration</div>
                            <div class="col">Class Title</div>
                            <div class="col">Location</div>
                            <div class="col">
                            <Button variant="warning">Enroll</Button></div>
                        </div>

                        <div class="row border border-dark py-5">
                            <div class="col">Time</div>
                            <div class="col">Duration</div>
                            <div class="col">Class Title</div>
                            <div class="col">Location</div>
                            <div class="col">
                            <Button variant="warning">Enroll</Button></div>
                        </div>

                        <div class="row border border-dark py-5">
                            <div class="col">Time</div>
                            <div class="col">Duration</div>
                            <div class="col">Class Title</div>
                            <div class="col">Location</div>
                            <div class="col">
                            <Button variant="warning">Enroll</Button></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Classes;