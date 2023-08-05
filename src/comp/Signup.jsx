import React from 'react'
import"./Signup.css"

function Signup() {
  return (
    <div className='main'>
   <div className='full'>
   <form>
        <h1 className='header'>Sign up</h1>
 
    <div className="form-group">
      <label for="InputFullname" className="form-label mt-4 label">Fullname</label>
      <input type="Fullname" className="form-control first" id="InputFullname" aria-describedby="emailHelp" placeholder=""/>
    </div>
    <div className="form-group">
      <label for="InputFullname" className="form-label mt-4 label">Email Address</label>
      <input type="Email Address" className="form-control second" id="InputFullname" aria-describedby="emailHelp" placeholder=""/>
    </div>
    <div className="form-group">
      <label for="InputFullname" className="form-label mt-4 label">Contact No.</label>
      <input type="Contact No." className="form-control third" id="InputFullname" aria-describedby="emailHelp" placeholder=""/>
    </div>
   
   <div className='radio1'>
   <label htmlFor="label">Gender</label>
    <div class="form-check">
    {/* <label for="InputFullname" className="form-label mt-4 label">Gender</label> */}
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>


</div>
<input type="submit" value="Sign in" className="button"/>

    </form>
    </div>
    </div>
  )
}

export default Signup