import { Component } from "react";
import "../Style/CreateAccount.scss"
import user from "../Images/user.jpg"
import arrowleft from "../Images/arrow-left.jpg"
import { Link } from "react-router-dom";

class CreateAccount extends Component {
  constructor() {
    super()
    this.state = {
      myfirst: '',
      mylast: '',
      myname: '',
      mypass: ''
    }
  }

  myFirstchange = (event) => {
    this.setState({ myfirst: event.target.value })
  }

  myLastchange = (event) => {
    this.setState({ mylast: event.target.value })
  }

  myNamechange = (event) => {
    this.setState({ myname: event.target.value })
  }
  myPasschange = (event) => {
    this.setState({ mypass: event.target.value })
  }

  mySubmitfunction = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="account">
        <div className='container'>
          <form onSubmit={this.mySubmitfunction}>
            <div className="create">
              <ul>
                <li>
                  <Link to="/"><img src={arrowleft} /></Link>
                </li>
                <li>
                  <img src={user} />
                </li>
                <li>
                  <h5>Account</h5>
                </li>
              </ul>

            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-5">
                  <div class="card">
                    <h2 class="card-title text-center">Register</h2>
                    <div class="card-body py-md-4">

                      <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="Name" />
                      </div>
                      <div class="form-group">
                        <input type="email" class="form-control" id="email" placeholder="Email" />
                      </div>
                      <div class="form-group">
                        <input type="password" class="form-control" id="password" placeholder="Password" />
                      </div>
                      <div class="form-group">
                        <input type="password" class="form-control" id="confirm-password" placeholder="confirm-password" />
                      </div>
                      <div class="d-flex flex-row align-items-center justify-content-between">
                        <div className="acc-btn">
                          <Link to="/signin"><button class="btn btn-success">Login</button></Link>
                        </div>
                        <div className="acc-btn1">
                          <button class="btn btn-success">Create Account</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    )
  }
}
export default CreateAccount