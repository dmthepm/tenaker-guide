interface TagPillProps {
  label: string;
  variant?: "default" | "accent";
}

export function TagPill({ label, variant = "default" }: TagPillProps) {
  return (
    <span
      className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-full ${
        variant === "accent"
          ? "bg-accent/10 text-accent"
          : "bg-sage/40 text-sage-dark"
      }`}
    >
      {label}
    </span>
  );
}
