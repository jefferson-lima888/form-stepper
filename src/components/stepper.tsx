"use client";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import "./stepper.css";
import { IconBadge } from "./icon-badge";

export const Stepper = () => {
  const steps = ["Carrinho", "Dados da conta", "Entrega ", "Pagar"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNext = () => {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 justify-between rounded border border-gray-200 bg-white py-5 px-0">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className={"step"}>
              {i + 1 < currentStep || complete ? (
                <IconBadge onClick={handleBack} />
              ) : (
                i + 1
              )}
            </div>
            {/* <p className=" text-gray-400 mt-3 xs:text-sm xs:w-[4.5rem] xs: self-end">
              {step}
            </p> */}
            <p className=" text-gray-400 mt-3 text-sm w-[4.5rem] self-end relative left-3 md:left-[-0.75rem]">
              {step}
            </p>
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
