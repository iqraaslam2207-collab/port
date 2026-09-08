export default function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
      {label}
    </span>
  );
}
