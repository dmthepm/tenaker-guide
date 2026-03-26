export function Footer() {
  return (
    <footer className="border-t border-border mt-16 py-8 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-muted">
          Made with love by{" "}
          <a
            href="https://devonmeadows.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
          >
            Devon
          </a>
        </p>
        <p className="text-xs text-muted/60 mt-1">
          <a
            href="mailto:hi@imdevon.com"
            className="hover:text-accent transition-colors"
          >
            hi@imdevon.com
          </a>
        </p>
      </div>
    </footer>
  );
}
