import React from 'react'
import "./myregfrom.css"

function Regform() {
  return (
<form>
<div class="form-floating mb-3 user">
  <input type="Username" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Username</label>
</div>
<div class="form-floating mb-3 pass">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div class="form-floating mb-3 pass"> 
 
  <input type="submit" value="Log in"/>

</div>
</form>
  )
}

export default Regform