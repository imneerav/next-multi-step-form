import React from "react";
import NMFDButton from '../elements/button';
import NMFDInput from '../elements/input';
import NMFDCheckbox from '../elements/checkbox';
import NMFDSubtitle from '../elements/subtitle';
import { Progress } from 'rbx';

const Step2 = ({values, handleInputChange, nextStep, prevStep}) => {
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep('step2Form');
    return false;
  }
  
  // for back event listener
  const GoBack = e => {
    e.preventDefault();
    prevStep();
  }

  return (
      <div className="step2 container is-max-desktop">
        <form id="step2Form" autoComplete="chrome-off">
            <input type="hidden" name="formstep" value="step2Form" />
            <input type="hidden" name="email" value={values.email} />
            <NMFDSubtitle>Where can we send you cool stuff?</NMFDSubtitle>
            <Progress className="progress is-success" data-label="66%" value={66} max={100} />
            {/*Address*/}
            <h3 className="subtitle has-text-primary pl-30">Address details</h3>
            <NMFDInput name="street" type="text" autoComplete="street" placeholder="No#/Street Address" 
                onChange={handleInputChange} value={values.street} />
            
            <div className="field is-horizontal">
              <NMFDInput name="suburb" type="text" autoComplete="suburb" placeholder="Suburb"
                  onChange={handleInputChange} value={values.suburb} />
              
              <NMFDInput name="state" type="text" autoComplete="state" placeholder="State/Province"
                  onChange={handleInputChange} value={values.state} />
              
              <NMFDInput name="addresspostcode" type="text" autoComplete="postcode" placeholder="Postcode"
                  onChange={handleInputChange} value={values.addresspostcode} />
            </div>
          {/* Opt-in/out */}
          <NMFDCheckbox name="optin" placeholder="Please do not send me updates from this site" />
              
            <input name="bot-field" type="text" onChange={handleInputChange} style={{ display: "none" }} />
            <div className="field is-grouped has-text-centered is-centered" align="centered" style={{"justify-content":"center"}}>
              <div className="control">
                <NMFDButton align="centered" className="green half-left" type="submit" onClick={GoBack}>
                    <span className="icon">
                      <i className="fas fa-caret-left"></i>
                    </span>
                    <span>Back</span>
                </NMFDButton>
              </div>
              <div className="control">
                <NMFDButton align="centered" className="green half-right" onClick={Continue} type="submit">
                  <span>Next</span>
                  <span className="icon">
                    <i className="fas fa-caret-right"></i>
                  </span>
                </NMFDButton>
              </div>
            </div>
        </form>
      </div>
  );
};

export default Step2;