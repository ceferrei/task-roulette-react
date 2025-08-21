import React, { useState } from 'react';
import { Button } from './ui/button';
import { RotateCcw } from 'lucide-react';
import { log } from 'console';

interface ResetButtonProps {
  onReset: () => void;
}

export function ResetButton({ onReset }: ResetButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleReset = () => {
    if (!isConfirming) {
      setIsConfirming(true);
      setTimeout(() => setIsConfirming(false), 3000); // Auto-cancel after 3 seconds
      return;
    }
    onReset();
    setIsConfirming(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={handleReset}
      variant={isConfirming ? 'destructive' : 'outline'}
      size="sm"
      className="gap-2"
    >
      <RotateCcw className="h-4 w-4" />
      {isConfirming ? 'Click again to confirm' : 'Reset App'}
    </Button>
  );
}
