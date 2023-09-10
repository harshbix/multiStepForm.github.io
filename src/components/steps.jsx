import React from "react";

const Steps = () => {
  const steps = [
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

  return (
    <div>
      <ol start={1}>
        {steps.map((step, count) => (
          <li key={count}>
             {step.step} <br /> {step.detail}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;
