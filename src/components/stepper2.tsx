"use client";
import React, { useState } from "react";
// import { Button } from '@adobe/react-spectrum';

export const Stepper2 = () => {
  const steps = ["Carrinho", "Dados da conta", "Entrega ", "Pagar"];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
        gap: "10px",
      }}
    >
      {steps.map((step, index) => (
        <button
          className={currentStep === index ? "cta" : "secondary"}
          key={index}
          //   variant={currentStep === index ? 'cta' : 'secondary'}
          onClick={() => setCurrentStep(index)}
        >
          {step}
        </button>
      ))}
    </div>
  );
};
