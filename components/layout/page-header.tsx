interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-12 pb-8 md:pt-16 md:pb-10 px-6 max-w-5xl mx-auto">
      <h1 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-muted text-base md:text-lg max-w-[55ch] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
