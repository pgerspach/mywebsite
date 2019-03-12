import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.message);
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ name: "", email: "", message: "" });
    document.alert("Your message has been sent to Patrick!");
  };
  render() {
    return (
      <div className="contact-wrap flex-column">
        <div style={{ alignSelf: "flex-start", fontSize: "35px" }}>Contact</div>
        <p style={{ fontSize: "22px" }}>
          I would love to talk. Please fill out your information with a message
          and I will reach out to you. Or, you can contact me directly at the
          email and phone provided above.
        </p>
        <form onSubmit={this.handleSubmit} className="contact-form flex-column">
          <label>
            Name
            <input
              name="name"
              type="text"
              className="contact-input contact-input-name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              className="contact-input contact-input-email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              type="text"
              className="contact-input contact-input-message"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Why are you reaching out?"
            />
          </label>
          <input
            className="contact-input contact-input-submit"
            onClick={this.handleSubmit}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
export default ContactForm;
