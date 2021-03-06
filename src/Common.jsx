import React from 'react';
import { NavLink } from 'react-router-dom';

import './App.css';

const Common = (props) =>{
      return(
            
            
            <>
            <div className="container mt-2">
            
            <h3>Quiz(Chapter 1)</h3>
            <br/>
            <img src="line2.png" alt="not found"/>
            <div className="container  mt-5 box">
            <h4 className="text2 p-5">Who is a backend developer?</h4>

            <section><div class="form-check form-check-inline ml-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">is responsible for server-side web application logic and integration of the work front-end developers do.</label>
            </div>
            <br/>
            <br/>
            <div class="form-check form-check-inline ml-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">is responsible for client-side web application</label>
            </div>
            <br/>
            <br/>
            <div class="form-check form-check-inline ml-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">who is only concerned with the look and feel of the website</label>
            </div>
            <br/>
            <br/>
            <div class="form-check form-check-inline ml-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">None of them</label>
            </div>
            <br/>
         <br/>
</section>

            {/* <p className= "ml-5"><img src="circle.png" alt="not found" /> The great service or product you are selling</p>
            <p className= "ml-5"> <img src="circle.png" alt="not found" />The reasonable price for the product or service</p>
            <p className= "ml-5"> <img src="circle.png" alt="not found" />Your personality, your style, youtself</p>
            <p className= "ml-5"  ><img src="circle.png" alt="not found"/>The fine reputation of the company you work for</p> */}
            {/* <button type="button" className="btn btn-secondary ">Previous</button>  */}
            <NavLink to={props.visit2} className="btn btn-secondary">
            {props.btprevoius}</NavLink>
            <NavLink to={props.visit} className="btn btn-primary Next">
            {props.btname}</NavLink> 
            </div>
            </div>
            
            </>
      )
}
export default Common;