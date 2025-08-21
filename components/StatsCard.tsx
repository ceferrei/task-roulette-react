import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  totalTasks: number;
  completedTasks: number;
}
export function StatsCard({ totalTasks, completedTasks }: StatsCardProps) {
  const progressPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
      <CardContent className="pt-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">{totalTasks}</div>
            <div className="text-sm">Total Tasks</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{completedTasks}</div>
            <div className="text-sm">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{progressPercentage}%</div>
            <div className="text-sm">Progress</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
