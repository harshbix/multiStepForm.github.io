import React, { useState } from "react";

const Steps = () => {
  const [steps, setSteps] = useState([
    {
      step: "step 1",
      detail: "your info",
      selected: true,
    },
    {
      step: "step 2",
      detail: "select plan",
      selected: false,
    },
    {
      step: "step 3",
      detail: "add-ons",
      selected: false,
    },
    {
      step: "step 4",
      detail: "summary",
      selected: false,
    },
  ]);
 

  const handleRadioChange = (count) => {
    const updatedSteps = steps.map((step, index) => ({
      ...step,
      selected: index === count,
    }));
    setSteps(updatedSteps);
  };

  return (
    <div className="p-3 rounded steps">
      <ul>
        {steps.map((step, count) => (
          <li key={count} className="row my-4">
            <label className="col-1 text-center fs-6">
              <input
                type="radio"
                name="stepRadio"
                checked={step.selected}
                onChange={() => handleRadioChange(count)}
              />
            </label>
            <div className="details col">
              <h6 className="text-muted text-uppercase m-0">{step.step}</h6>
              <h6 className="text-white text-uppercase m-0 fw-bold">
                {step.detail}
              </h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
