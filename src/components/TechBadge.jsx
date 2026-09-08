export default function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800/80 bg-zinc-900/40 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-300">
      {label}
    </span>
  );
}
