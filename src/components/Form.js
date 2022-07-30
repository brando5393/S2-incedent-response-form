import React, { useState, useEffect } from "react";
import FormHeader from "./FormHeader";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import axios from "axios";
import SelectItem from "./SelectItem";

const Form = () => {
  // STATE DECLARATIONS
  const [departments, setDepartments] = useState(["Testing"]);
  const [severityLevels, setseverityLevels] = useState([]);
  const [functionalImpactLevels, setfunctionalImpactLevels] = useState([]);
  const [informationImpactLevels, setinformationImpactLevels] = useState([]);
  const [recoverabilityLevels, setrecoverabilityLevels] = useState([]);
  // FUNCTIONS
  const getFormSettings = () => {
    axios
      .get("formSettings.json")
      .then((res) => {
        console.log(res);
      })
      .then((data) => {
        setDepartments(data);
        // setseverityLevels(data.incidentInformation.severityLevels);
        // setfunctionalImpactLevels(
        //   data.incidentInformation.functionalImpactLevels
        // );
        // setinformationImpactLevels(
        //   data.incidentInformation.informationImpactLevels
        // );
        // setrecoverabilityLevels(data.incidentInformation.recoverabilityLevels);
      });
  };
  useEffect(() => {
    getFormSettings();
  }, []);
  return (
    <div>
      <form>
        <div className="row">
          <div className="col s12">
            <FormHeader text="Employee Information" />
          </div>
        </div>
        <div className="row">
          <div className="col l12">
            <TextInput
              placeholderText="John Doe"
              id="employeeName"
              type="text"
              labelText="Full Name"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <TextInput
              placeholderText="Phone"
              id="employeePhoneNumber"
              type="text"
              labelText="Phone Number"
              required
            />
          </div>
          <div className="col s6">
            <TextInput
              placeholderText="jDoe@discountjuiceshop.com"
              type="email"
              labelText="E-mail"
              required
            />
          </div>
          <div className="row">
            <div className="col s6">
              <TextInput
                placeholderText="Please enter your employee ID"
                id="employeeId"
                type="number"
                labelText="Employee ID"
              />
            </div>
            <div className="col s6">
              <SelectInput>
                {/* {departments.map((department) => (
                <SelectItem itemValue={department} itemText={department} />
              ))} */}
              </SelectInput>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
