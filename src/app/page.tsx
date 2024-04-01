import { Stepper } from "@/components/stepper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-screen items-center justify-center">
      <Stepper />
    </div>
  );
}
