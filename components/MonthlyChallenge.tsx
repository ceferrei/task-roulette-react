import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, CheckCircle, Shuffle, Timer } from 'lucide-react';
import { Button } from './ui/button';
import {
  type Task,
  type MonthlyChallenge as MonthlyChallengeType,
  CATEGORIES,
} from '@/types/task';
import { Badge } from './ui/badge';

interface MonthlyChallengeProps {
  currentTask: Task | null | undefined;
  currentChallenge: MonthlyChallengeType | null;
  pendingTasks: Task[];
  daysRemaining: number;
  isOverdue: boolean;
  onSpinRoulette: () => void;
  onCompleteTask: (id: string) => void;
}

export function MonthlyChallenge({
  currentTask,
  currentChallenge,
  pendingTasks,
  daysRemaining,
  isOverdue,
  onSpinRoulette,
  onCompleteTask,
}: MonthlyChallengeProps) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setTimeout(() => {
        onSpinRoulette();
        setIsSpinning(false);
      }, 550);
    }
  };
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
      <CardContent className="text-center space-y-4">
        {isSpinning ? (
          <SpinningState />
        ) : currentTask && currentChallenge ? (
          <ActiveChallenge
            task={currentTask}
            challenge={currentChallenge}
            daysRemaining={daysRemaining}
            isOverdue={isOverdue}
            onComplete={() => onCompleteTask(currentTask.id)}
            onChooseAnother={handleSpin}
            canChooseAnother={pendingTasks.length > 0}
          />
        ) : (
          <IdleState onSpin={handleSpin} canSpin={pendingTasks.length > 0} />
        )}
      </CardContent>
    </Card>
  );
}

function IdleState({
  onSpin,
  canSpin,
}: {
  onSpin: () => void;
  canSpin: boolean;
}) {
  return (
    <div className="py-8">
      <div className="text-6xl mb-4">🎲</div>
      <Button
        onClick={onSpin}
        size="lg"
        className="text-white bg-indigo-600 hover:bg-indigo-700"
      >
        <Shuffle className="h-5 w-5 mr-2" />
        Spin the Die
      </Button>
      {!canSpin && (
        <p className="text-sm text-gray-500 mt-2">Add some tasks first!</p>
      )}
    </div>
  );
}

function SpinningState() {
  return (
    <div className="py-8">
      <div className="animate-spin text-6xl mb-4">🎯</div>
      <p className="text-lg text-gray-600">Choosing your next adventure...</p>
    </div>
  );
}

function ActiveChallenge({
  task,
  challenge,
  daysRemaining,
  isOverdue,
  onComplete,
  onChooseAnother,
  canChooseAnother,
}: {
  task: Task;
  challenge: MonthlyChallengeType;
  daysRemaining: number;
  isOverdue: boolean;
  onComplete: () => void;
  onChooseAnother: () => void;
  canChooseAnother: boolean;
}) {
  return (
    <div className="space-y-6">
      <div className="text-2xl font-semibold text-gray-800 p-4 bg-indigo-50 rounded-lg">
        {task.title}
      </div>
      <div className="flex items-center justify-center gap-4 flex-wra">
        <Badge className={CATEGORIES[task.category].color}>
          {CATEGORIES[task.category].icon} {CATEGORIES[task.category].label}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {challenge.month}
        </Badge>
        <Badge
          variant="outline"
          className={`flex items-center gap-1 ${
            isOverdue
              ? 'bg-red-100 text-red-800'
              : daysRemaining <= 7
                ? 'bg-orange-100 text-orange-800'
                : 'bg-blue-100 text-blue-800'
          }`}
        >
          <Timer className="h-3 w-3" />
          {challenge.dueDate}
        </Badge>
      </div>
      <div className="text-gray-600">
        <p>
          <strong className="mr-1">Started:</strong>
          {new Date(challenge.startDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="text-gray-600">
          <strong className="mr-1">Due:</strong>
          {new Date(challenge.dueDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button onClick={onComplete} className="bg-green-600 text-white">
          <CheckCircle className="h-4 w-4 mr-2" />
          Mark as Complete
        </Button>
        <Button
          variant="outline"
          onClick={onChooseAnother}
          disabled={!canChooseAnother}
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Choose Another
        </Button>
      </div>
    </div>
  );
}
