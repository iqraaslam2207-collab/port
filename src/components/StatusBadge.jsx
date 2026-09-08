export default function StatusBadge({ label, className = "inline-flex" }) {
  return (
    <span
      className={`items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-950/70 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-300 ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      {label}
    </span>
  );
}
