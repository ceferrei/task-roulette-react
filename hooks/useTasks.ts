'use client';

import type { Task } from '@/types/task';
import { useState } from 'react';

const DEFAULT_TASKS: Task[] = [
  {
    id: '1',
    title: 'Buy curtains for living room',
    category: 'hard',
    completed: false,
  },
  {
    id: '2',
    title: 'Buy new refrigerator',
    category: 'hard',
    completed: true,
  },
  {
    id: '3',
    title: 'Fix hallway closet rod',
    category: 'medium',
    completed: false,
  },
  {
    id: '4',
    title: 'Reorganize clothes closet',
    category: 'easy',
    completed: false,
  },
  {
    id: '5',
    title: 'Buy plants for balcony',
    category: 'easy',
    completed: false,
  },
  {
    id: '6',
    title: 'Install kitchen shelves',
    category: 'medium',
    completed: false,
  },
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  const addTask = (title: string, category: Task['category']) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: title.trim(),
      category,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completeTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: true,
              completedDate: new Date().toLocaleDateString('en-US'),
            }
          : task
      )
    );
  };

  const resetTasks = () => {
    setTasks(DEFAULT_TASKS);
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return {
    tasks,
    addTask,
    deleteTask,
    completeTask,
    resetTasks,
    pendingTasks,
    completedTasks,
  };
}
