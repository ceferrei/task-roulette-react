import { Header } from "@/components/Header";
import { MonthlyChallenge } from "@/components/MonthlyChallenge";
import ResetButton from "@/components/ResetButton";
import StatsCard from "@/components/StatsCard";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { CheckCircle, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <MonthlyChallenge />
        <TaskForm />
        <div className="grid md:grid-cols-2 gap-6 ">
          <TaskList
            title="Pending Tasks"
            icon={<Clock className="h-5 w-5 text-orange-500" />}
            // tasks={pendingTasks}
          />
          <TaskList
            title="Completed Tasks"
            icon={<CheckCircle className="h-5 w-5 text-green-500" />}
          />
        </div>
        <StatsCard />
        <div className="flex justify-center py-4">
          <ResetButton />
        </div>
      </div>
    </div>
  );
}
