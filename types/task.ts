export interface Task {
  id: string;
  title: string;
  category: 'easy' | 'medium' | 'hard';
  completed: boolean;
  completedDate?: string;
  startedDate?: string;
  dueDate?: string;
}

export interface MonthlyChallenge {
  taskId: string | null;
  startDate: string;
  dueDate: string;
  month: string;
}

export const CATEGORIES = {
  easy: { label: 'Easy', color: 'bg-green-100 text-green-800', icon: '🟢' },
  medium: {
    label: 'Medium',
    color: 'bg-yellow-100 text-yellow-800',
    icon: '🟡',
  },
  hard: { label: 'Hard', color: 'bg-red-100 text-red-800', icon: '🔴' },
} as const;
