import React, { Component } from 'react'

export default class UserSignup extends Component {
    constructor() {
        super()

        this.state = {
            signup_code: "",
            email: "",
            personal_code: Math.floor(Math.random() * 899999 + 100000),
            error: false
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        
        fetch("https://127.0.0.1:5000/user/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                signup_code: this.state.signup_code,
                personal_code: this.state.personal_code
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data == "User added successfully") {
                this.props.history.push("/end")
            }            
            else {
                this.setState({ error: true })
            }
        })
        .catch(error => {
            console.log("Error creating user: ", error)
            this.setState({ error: true })
        })
        
    }

    render() {
        return (
            <div className='page-wrapper'>
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign up here!</h1>
                        
                        <div className="wrapper">
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                            />
                        </div>

                        <div className="wrapper">
                            Your friend's code:
                            <input
                                type="text"
                                name="signup_code"
                                value={this.state.signup_code}
                                onChange={this.handleChange}
                                placeholder="Signup Code"
                            />
                        </div>
                        <div className="wrapper">
                            I love my code. It is {this.state.personal_code}
                        </div>

                        <div className="button">
                            <button type="submit">
                                Sign up
                            </button>
                        </div>

                    </form>
                    {this.state.error ? <p>Error signing up... Please try again later</p> : null}
                    
                </div>
            </div>
        )
    }
}