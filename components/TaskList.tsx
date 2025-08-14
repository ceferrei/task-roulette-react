import React from "react";
import { type Task } from "@/types/task"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface TaskListProps {
    icon: React.ReactNode,
    title: string
    // tasks: Task[],
}

export default function TaskList({icon, title}:TaskListProps) {
  return (
    <Card >
      <CardHeader>
              <CardTitle className="flex items-center gap-2">{icon}{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
}
