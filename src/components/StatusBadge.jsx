export default function StatusBadge({ label, className = "inline-flex" }) {
  return (
    <span
      className={`items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mute ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
      </span>
      {label}
    </span>
  );
}
