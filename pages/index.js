import React, { Component } from 'react'
import { Step1, Step2, Step3, Step4 } from "../Forms";

export default class GettingStarted extends Component {
  state = { step: 1, firstname: "", lastname: "", email: "", postcode: "", addresspostcode: "", phone: "", street: "", suburb: "", state: "", optin: "" }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = (formId) => {
    var form = document.getElementById(formId);
    if(form.reportValidity()){
      const { step } = this.state;
      this.setState({ step: step + 1 });
    }
  }

  // Handle fields change
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { firstname, lastname, email, postcode, phone, street, suburb, state, optin, addresspostcode} = this.state;
    const values = { firstname, lastname, email, postcode, phone, street, suburb, state, optin, addresspostcode }
    switch(step) {
      case 1: 
        return (
          <Step1 
            nextStep={ this.nextStep }
            handleInputChange={ this.handleInputChange }
            values={ values }
            />
        )
      case 2: 
        return (
          <Step2 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleInputChange={ this.handleInputChange }
            values={ values }
            />
        )
      case 3: 
          return (
            <Step3 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleInputChange={ this.handleInputChange }
            values={ values }
              />
        )
        default: 
        // do nothing
    }
  }
}