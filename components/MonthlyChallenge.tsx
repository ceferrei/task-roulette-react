import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shuffle } from "lucide-react";
import { Button } from "./ui/button";

export function MonthlyChallenge() {
  return (
    <Card className="border-2 border-indigo-200 bg-white/80 backdrop-blur text-center">
      <CardHeader>
        <CardTitle className="text-2xl text-indigo-700">
          Monthly Challenge
        </CardTitle>
        <CardDescription>
          Spin the roulette to discover your challenge!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Idlestate />
      </CardContent>
    </Card>
  );
}

function Idlestate() {
  return (
    <div className="py-8">
      <div className="text-6xl mb-4">🎲</div>
      <Button size="lg">
        <Shuffle className="h-5 w-5 mr-2" />
        Spin the Die
      </Button>
    </div>
  );
}
