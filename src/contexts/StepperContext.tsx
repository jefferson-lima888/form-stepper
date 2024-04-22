"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type StepperContextType = {
  steps: string[];
  currentStep: number;
  complete: boolean;
  handleNext: () => void;
  handleBack: () => void;
};

const StepperContext = createContext<StepperContextType>({
  steps: ["Carrinho", "Dados da conta", "Entrega ou retirada", "Pagar"],
  currentStep: 1,
  complete: false,
  handleNext: () => {},
  handleBack: () => {},
});

type StepperProviderProps = {
  children: ReactNode;
};

export const StepperProvider = ({ children }: StepperProviderProps) => {
  const steps = ["Carrinho", "Dados da conta", "Entrega ou retirada", "Pagar"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNext = () => {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
    console.log(
      "NXT Step: ",
      currentStep,
      steps.length,
      setComplete,
      setCurrentStep
    );
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <StepperContext.Provider
      value={{ steps, currentStep, complete, handleNext, handleBack }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = () => useContext(StepperContext);
