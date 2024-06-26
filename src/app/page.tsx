import { Stepper } from "@/components/stepper";
import { Stepper2 } from "@/components/stepper2";
import { StepperProvider } from "@/contexts/StepperContext";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-screen items-center justify-center my-0 mx-4">
      <StepperProvider>
        <Stepper />
      </StepperProvider>
      <Stepper2 />
    </div>
  );
}
