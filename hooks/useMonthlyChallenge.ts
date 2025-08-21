'use client';

import { useState } from 'react';
import type { MonthlyChallenge, Task } from '@/types/task';

export function useMonthlyChallenge() {
  const [currentChallenge, setCurrentChallenge] =
    useState<MonthlyChallenge | null>(null);

  const createChallenge = (selectedTask: Task): MonthlyChallenge => {
    const now = new Date();
    const startDate = now.toISOString().split('T')[0];
    const dueDate = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate()
    )
      .toISOString()
      .split('T')[0];
    const month = now.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    const newChallenge: MonthlyChallenge = {
      taskId: selectedTask.id,
      startDate,
      dueDate,
      month,
    };

    setCurrentChallenge(newChallenge);
    return newChallenge;
  };

  const clearChallenge = () => {
    setCurrentChallenge(null);
  };

  const getDaysRemaining = (): number => {
    if (!currentChallenge) return 0;
    const today = new Date();
    const due = new Date(currentChallenge.dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const isOverdue = (): boolean => {
    if (!currentChallenge) return false;
    const today = new Date();
    const due = new Date(currentChallenge.dueDate);
    return today > due;
  };

  return {
    currentChallenge,
    createChallenge,
    clearChallenge,
    getDaysRemaining,
    isOverdue,
  };
}
