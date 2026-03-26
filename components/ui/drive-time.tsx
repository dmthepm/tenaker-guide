import { Car } from "@phosphor-icons/react/dist/ssr";

interface DriveTimeProps {
  time: string;
}

export function DriveTime({ time }: DriveTimeProps) {
  return (
    <div className="flex items-center gap-1 bg-border/50 text-muted text-xs font-mono px-2.5 py-1 rounded-lg shrink-0">
      <Car size={14} />
      <span>{time}</span>
    </div>
  );
}
