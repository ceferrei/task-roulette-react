'use client';

import { Header } from '@/components/Header';
import { MonthlyChallenge } from '@/components/MonthlyChallenge';
import { ResetButton } from '@/components/ResetButton';
import { StatsCard } from '@/components/StatsCard';
import { TaskForm } from '@/components/TaskForm';
import { TaskList } from '@/components/TaskList';
import { CheckCircle, Clock } from 'lucide-react';
import { useTasks } from '@/hooks/useTasks';
import { useMonthlyChallenge } from '@/hooks/useMonthlyChallenge';

export default function Home() {
  const {
    tasks,
    pendingTasks,
    completedTasks,
    addTask,
    deleteTask,
    completeTask,
    resetTasks,
  } = useTasks();
  const {
    currentChallenge,
    createChallenge,
    clearChallenge,
    getDaysRemaining,
    isOverdue,
  } = useMonthlyChallenge();

  const getCurrentTask = () => {
    if (!currentChallenge) return null;
    return tasks.find((task) => task.id === currentChallenge.taskId);
  };

  const handleSpinRoulette = () => {
    if (pendingTasks.length === 0) return;

    const randomIndex = Math.floor(Math.random() * pendingTasks.length);
    const selectedTask = pendingTasks[randomIndex];
    createChallenge(selectedTask);
  };

  const handleCompleteTask = (id: string) => {
    completeTask(id);
    if (currentChallenge?.taskId === id) {
      clearChallenge();
    }
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
    if (currentChallenge?.taskId === id) {
      clearChallenge();
    }
  };

  const handleReset = () => {
    resetTasks();
    clearChallenge();
  };

  const currentTask = getCurrentTask();
  const daysRemaining = getDaysRemaining();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <MonthlyChallenge
          currentTask={currentTask}
          currentChallenge={currentChallenge}
          pendingTasks={pendingTasks}
          daysRemaining={daysRemaining}
          isOverdue={isOverdue()}
          onSpinRoulette={handleSpinRoulette}
          onCompleteTask={handleCompleteTask}
        />
        <TaskForm onAddTask={addTask} />
        <div className="grid md:grid-cols-2 gap-6">
          <TaskList
            title="Pending Tasks"
            tasks={pendingTasks}
            icon={<Clock className="h-5 w-5 text-orange-500" />}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
            emptyMessage="Congratulations! All tasks completed! 🎉"
            showCompleteButton={true}
          />

          <TaskList
            title="Completed Tasks"
            tasks={completedTasks}
            icon={<CheckCircle className="h-5 w-5 text-green-500" />}
            onDeleteTask={handleDeleteTask}
            emptyMessage="No completed tasks yet."
          />
        </div>
        <StatsCard totalTasks={tasks.length} completedTasks={completedTasks.length}/>
        <div className="flex justify-center py-4">
          <ResetButton onReset={handleReset} />
        </div>
      </div>
    </div>
  );
}
