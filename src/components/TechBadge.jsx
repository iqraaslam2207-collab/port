export default function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-paper px-2.5 py-1 text-[11px] font-medium text-ink">
      {label}
    </span>
  );
}
