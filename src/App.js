import { useState } from "react";
import "./App.css";

function App() {

    const [formData, setFormData]= useState ({
      firstname:"", lastName:"", email:"", country:"India", 
      streetaddress:"", city:"", state:"", postalcode:"", 
      comments:false, candidates:false, offers:false, pushNotifications:""
    })

    function changeHandler(event){
      const {name, value, checked, type} = event.target;
      setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value }));
    }

    function submitHandler(event){
      event.preventDefault();

      console.log("Printing The Value");
      console.log(formData);
    }

  return (
    <div className="flex flex-col items-center mt-2">
        <div><h1>Registration Form</h1></div>
        <form onSubmit={submitHandler}>
       
        <br/>
        <label htmlFor="firstname">First Name:</label>
        <br/>
        <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="First Name"
        value={formData.firstname}
        onChange={changeHandler}
        className="outline"
        />
     
        <br/>
        <label htmlFor="lastName">Last Name:</label>
        <br/>
        <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
        />
       
        <br/>
        <label htmlFor="email">Email Address:</label>
        <br/>
        <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <label htmlFor="country">Choose a Country :</label>
        <br/>
        <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"
        >
        
          <option>India</option>
          <option>US</option>
          <option>Canada</option>
          <option>Austrila</option>
        </select>

        <br/>
        <label htmlFor="streetaddress">Street address:</label>
        <br/>
        <input
        type="text"
        name="streetaddress"
        id="streetaddress"
        placeholder="Street address"
        value={formData.streetaddress}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <label htmlFor="City">City:</label>
        <br/>
        <input
        type="text"
        name="city"
        id="city"
        placeholder="City"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <label htmlFor="state">state:</label>
        <br/>
        <input
        type="text"
        name="state"
        id="state"
        placeholder="State"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <label htmlFor="postalcode">Postal Code:</label>
        <br/>
        <input
        type="number"
        name="postalcode"
        id="postalcode"
        placeholder="Postal Code"
        value={formData.postalcode}
        onChange={changeHandler}
        className="outline"
        />
        <br/>
        <br/>
        <fieldset>
          <leged>
            By Email:
          </leged>
          
         <div className="flex ">
         <input 
          id="comments"
          name="comments"
          type="checkbox"
          checked={formData.comments}
          onChange={changeHandler}
          />
           <div>
            <label htmlFor="comments">Comments</label>
            <p>Get Notified When Someone post a comment on a posting.</p>
           </div>
         </div>

         <div className="flex ">
         <input 
          id="candidates"
          name="candidates"
          type="checkbox"
          checked={formData.candidates}
          onChange={changeHandler}
          />
           <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get Notified When a candidate applyies for the job.</p>
           </div>
         </div>


         <div className="flex ">
         <input 
          id="offers"
          name="offers"
          type="checkbox"
          checked={formData.offers}
          onChange={changeHandler}
          />
           <div>
            <label htmlFor="offers">Offers</label>
            <p>Get Notified When a candidate Accept or reject an offer .</p>
           </div>
         </div>
        </fieldset>

        <br/>
        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via sms to your mobile phone</p>

          <input 
          type="radio"
          id="pushEverythings"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}
          />
          <label htmlFor="pushEverythings"> Everything</label> 
          <br/>

          <input 
          type="radio"
          id="pushemail"
          name="pushNotifications"
          value="Same as Email"
          onChange={changeHandler}
          />
          <label htmlFor="pushemail"> Same as Email</label>
          <br/>

          <input 
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No Push Notification"
          onChange={changeHandler}
          />
          <label htmlFor="pushNothing"> No Push Notification</label>

        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-1 px-3">Save</button>
      </form>
      <br/>
      <br/>
    </div>
  );
}

export default App;
