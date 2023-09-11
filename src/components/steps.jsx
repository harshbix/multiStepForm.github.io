import React from "react";

const Steps = () => {
  const steps = [
    null,
    {
      step: "step 1",
      detail: "your info",
    },
    {
      step: "step 2",
      detail: "select plan",
    },
    {
      step: "step 3",
      detail: "add ons",
    },
    {
      step: "step 4",
      detail: "summary",
    },
  ];
  delete steps[0];

  return (
    <div className="p-3 rounded bg-success">
      <ol>
        {steps.map((step, count) => (
          <li className="row">
            <span className="col-1 text-center fs-6">{count}</span>
            <div className="details col">
              <h6 className="text-muted text-uppercase">{step.step}</h6>
              <h6 className="text-white text-uppercase">
                {step.detail}
              </h6>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;
