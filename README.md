# 🎯 Task Roulette

A React application that randomly selects home improvement tasks to tackle each month. Perfect for procrastinators who need fate to decide which household problem to solve next!
## Demo

<div align="center">
  <video src="./public/taskRoulette.mp4" controls width="600">
    Seu navegador não suporta o elemento de vídeo.
  </video>
</div>

##  Features

- **Random Task Selection**: Spin the roulette to randomly choose your monthly challenge
- **Monthly Challenges**: Track your current task with start/due dates and countdown timer
- **Task Management**: Add, categorize (Easy/Medium/Hard), and delete tasks
- **Progress Tracking**: Mark tasks as complete and view your accomplishment history
- **Local Storage**: All data persists in your browser
- **Responsive Design**: Works seamlessly on desktop and mobile devices

##  Built With

- **React 18** with TypeScript
- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Lucide React** icons
- **Local Storage** for data persistence

##  How It Works

1. **Add Tasks**: Input your home improvement tasks and categorize them by difficulty
2. **Spin the Roulette**: Let the app randomly select your monthly challenge
3. **Track Progress**: Monitor your current task with a built-in countdown timer
4. **Complete Tasks**: Mark tasks as done and build your completion history
5. **Stay Motivated**: View your overall progress and completed task statistics

##  Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ceferrei/task-roulette-react.git
cd task-roulette
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser


##  Key Components

- **Task Interface**: TypeScript interface defining task structure
- **Monthly Challenge System**: Tracks current task with dates and countdown
- **Roulette Animation**: Spinning animation for task selection
- **Category System**: Easy/Medium/Hard task classification
- **Statistics Dashboard**: Progress tracking and completion metrics

##  Customization

### Adding New Categories
Modify the `CATEGORIES` object in `app/page.tsx`:

```typescript
const CATEGORIES = {
  easy: { label: "Easy", color: "bg-green-100 text-green-800", icon: "🟢" },
  medium: { label: "Medium", color: "bg-yellow-100 text-yellow-800", icon: "🟡" },
  hard: { label: "Hard", color: "bg-red-100 text-red-800", icon: "🔴" },
  // Add your custom category here
}
```

### Styling
The app uses Tailwind CSS. Modify classes in the JSX or extend the theme in `tailwind.config.js`.

##  Data Storage

All data is stored in the browser's localStorage:
- `taskRoulette`: Array of all tasks
- `monthlyChallenge`: Current monthly challenge details


##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


**Happy Task Tackling!** 🏠✨
