import React from 'react'

const Form = ({type}) => {

  return (
    <div>
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">password123</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" class="form-check-input"></input>
      Check me out
    </label>
  </div>
  <button type="submit" className={`btn btn-${type}`}>Submit</button>
</form>
</div>
  )

}




export default Form
