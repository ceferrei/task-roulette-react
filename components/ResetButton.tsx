import React from "react";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

export default function ResetButton() {
  return (
    <Button className="bg-white text-gray-600">
      <RotateCcw className="" />
      Reset App
    </Button>
  );
}
