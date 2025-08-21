import React from 'react';
import { type Task, CATEGORIES } from '@/types/task';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle, Trash2 } from 'lucide-react';

interface TaskListProps {
  icon: React.ReactNode;
  title: string;
  tasks: Task[];
  onCompleteTask?: (id: string) => void;
  onDeleteTask?: (id: string) => void;
  emptyMessage?: string;
  showCompleteButton?: boolean;
}

export function TaskList({
  icon,
  title,
  tasks,
  onCompleteTask,
  onDeleteTask,
  emptyMessage,
  showCompleteButton = false,
}: TaskListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title} ({tasks.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-lg ${task.completed ? 'bg-green-50' : 'bg-gray-50'}`}
            >
              <div className="flex-1">
                <p
                  className={`font-medium text-sm ${task.completed ? 'line-through text-gray-600' : ''}`}
                >
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className={CATEGORIES[task.category].color}>
                    {CATEGORIES[task.category].icon}{' '}
                    {CATEGORIES[task.category].label}
                  </Badge>
                  {task.completedDate && (
                    <span className="text-xs text-gray-500">
                      Completed on {task.completedDate}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                {!task.completed && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={()=> onCompleteTask?.(task.id)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                )}

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onDeleteTask?.(task.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
