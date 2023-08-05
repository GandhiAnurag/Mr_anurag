import React, {useState} from 'react'

function HookCounter3() {
    const [name,setName]=useState({FirstName:'',LastName:'',MiddleName:''})
  return (
    <div>
        <form>
      <input type="text" value={name.FirstName} onChange={e1 =>setName({...name,FirstName:e1.target.value})}/>
      <input type="text" value={name.LastName} onChange={e1 =>setName({...name,LastName:e1.target.value})} />
      <input type="text" value={name.Middlename} onChange={e1 =>setName({...name,Middlename:e1.target.value})}/>
      <h2>Your First Name is  - {name.FirstName}</h2> 
       <h2>Your Last Name is  - {name.LastName}</h2>
       <h2>Your Middle Name is  - {name.Middlename}</h2>
      {/* <h2>{JSON.stringify(name)}</h2> */}
      </form>
    </div>
  )
}

export default HookCounter3