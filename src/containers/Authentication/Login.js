import React, { Component } from "react";
import FormLayout from "../../components/FormLayout/";
import { Button, FormGroup, Col } from "reactstrap";
import InputElement from "../../components/Input/";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }
  onChangeHandler(event) {
    let user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
  }
  onSubmit() {
    let user = { ...this.state.user };
    if (user.email && user.password) {
      this.props.loginUser(user);
      let compRef = this;
      setTimeout(() => {
        let loginError = compRef.props.loginError;
        compRef.Toaster(compRef, loginError);
      }, 1000);
    } else {
      toast.error("Please Enter Valid Email/Password...", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }
  Toaster(compRef, loginError, actionName) {
    if (!loginError) {
      toast.success("Login Successfull...", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      setTimeout(() => {
        compRef.redirectFunction();
      }, 1000);
    } else {
      toast.error("Invalid Email/Password...", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }
  redirectFunction() {
    this.props.history.push("/");
    localStorage.setItem("user", this.state.user.email);
  }
  render() {
    return (
      <FormLayout>
        <h1>Login</h1>
        <p className="text-muted">Sign In to your account</p>
        <FormGroup row>
          <Col md="6" xs="12">
            <InputElement
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              icon="icon-envelope"
              onchanged={event => this.onChangeHandler(event)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="6">
            <InputElement
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              icon="icon-key"
              onchanged={event => this.onChangeHandler(event)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col xs="12" md="6">
            <Button color="primary" onClick={this.onSubmit.bind(this)}>
              Login
            </Button>
          </Col>
          <Col md="6">
            <Button color="link">Forgot password?</Button>
            <ToastContainer autoClose={2000} />
          </Col>
        </FormGroup>
      </FormLayout>
    );
  }
}
const mapStateToProps = state => {
  return {
    loginError: state.auth.loginError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(actions.loginUser(user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
