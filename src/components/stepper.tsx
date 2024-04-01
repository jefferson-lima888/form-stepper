"use client";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import "./stepper.css";

export const Stepper = () => {
  const steps = ["Carrinho", "Dados da conta", "Entrega ", "Pagar"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNext = () => {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className={"step"}>
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className=" text-gray-400">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="bg-orange-600 hover:bg-orange-500 text-white font-medium px-7 py-1.5 rounded"
          onClick={handleNext}
        >
          {/* Next {currentStep} */}
          {currentStep === steps.length ? "Finalizar" : "Próximo"}
        </button>
      )}
    </>
  );
};
