import { Component } from "react";
import user from "../Images/user.jpg"
import arrowleft from "../Images/arrow-left.jpg"
import "../Style/Signin.scss"
import { Link } from "react-router-dom";


class Signin extends Component {
    constructor() {
        super()
        this.state = {
            myname: '',
            mypass: ''
        }
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
            <div className="login">
                <div className='container'>
                    <form onSubmit={this.mySubmitfunction}>
                        <div className="signin">
                            <ul>
                                <li>

                                    <Link to="/"><img src={arrowleft} /></Link>
                                </li>
                                <li>
                                    <img src={user} />
                                </li>
                                <li>
                                    <h5>
                                        Account
                                    </h5>
                                </li>
                            </ul>

                        </div>
                        <p>Sign-in Account</p>

                        <div class="sign01">
                            <label for="email">Email</label>
                            <input type="email" name="email" autocomplete="off" placeholder="email@example.com" />
                        </div>
                        <div class="sign01">
                            <label for="password">Password</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="forgetpassword">
                           
                            <a href="" className="">
                                <Link to="/signup">Create Account?</Link>
                            </a>
                        </div>
                        <div className="login-btn">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signin