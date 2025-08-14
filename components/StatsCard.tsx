import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard() {
  return (
    <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm">Total Tasks</div>
          </div>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold">0%</div>
            <div className="text-sm">Progress</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
