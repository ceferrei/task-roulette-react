import React from 'react';
import { House } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center space-y-2">
      <div className="flex items-center justify-center gap-2 mb-4">
        <House className="text-indigo-600 h-8 w-8" />
        <h1 className="text-4xl font-bold text-gray-900">Task Roulette</h1>
      </div>
      <p className="text-gray-600 text-lg">
        Let fate choose which home problem to solve this month!
      </p>
    </div>
  );
}
