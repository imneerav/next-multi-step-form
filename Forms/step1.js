import React from "react";
import NMFDInput from '../elements/input';
import NMFDButton from '../elements/button';
import NMFDSubtitle from '../elements/subtitle';
import { Progress } from 'rbx';

const Step1 = ({values, handleInputChange, nextStep}) => {
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep('step1Form');
    return false;
  }
  
  return (
    <div className="step1 container is-max-desktop">
        <NMFDSubtitle>We would like to get to know you first</NMFDSubtitle>
        <p className="content-para">Please enter your information here.</p>
        <p>&nbsp;</p>
        <Progress className="progress is-success" data-label="33%" value={33} max={100} />
        <form id="step1Form" autoComplete="chrome-off">
          <input type="hidden" name="formstep" value="step1Form" />
            {/* Personal Info */}
            {/*First Name*/}
            <NMFDInput name="firstname" type="text" autoComplete="firstname" placeholder="First Name"
              onChange={handleInputChange} value={values.firstname} required />
            {/*Last Name*/}
            <NMFDInput name="lastname" type="text" autoComplete="lastname" placeholder="Last Name"
              onChange={handleInputChange} value={values.lastname} required />
            {/*Email*/}
            <NMFDInput name="email" type="email" autoComplete="email" placeholder="Email Address"
              onChange={handleInputChange} value={values.email} required />
            {/*Postcode*/}
            <NMFDInput name="postcode" type="text" autoComplete="postcode" placeholder="Postcode"
              onChange={handleInputChange} value={values.postcode} required />
            {/*Contact phone number*/}
            <NMFDInput name="phone" type="phone" autoComplete="phone" placeholder="Contact phone number"
                onChange={handleInputChange} value={values.phone} />
          
            <input name="bot-field" type="text" onChange={handleInputChange} style={{ display: "none" }} />
          
            <NMFDButton onClick={Continue} align="centered" className="green" type="submit">
              <span>Save & Continue</span>
            </NMFDButton>
        </form>
    </div>
  );
}

export default Step1;