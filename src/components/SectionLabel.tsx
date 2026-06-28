import type { ReactNode } from 'react';

/**
 * Amber section heading used to mark the start of a content block
 * (e.g. EDUCATION, WORK EXPERIENCE). The leading dash helps the reader
 * distinguish one section from the next.
 */
export function SectionLabel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-mono text-[#F59E0B] text-[11px] uppercase tracking-[0.15em] flex items-center gap-3 ${className}`}
    >
      <span aria-hidden className="inline-block h-px w-6 bg-[#F59E0B]/60" />
      <span>{children}</span>
    </h2>
  );
}
