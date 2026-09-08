export default function StatusBadge({ label, className = "inline-flex" }) {
  return (
    <span
      className={`items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-[11px] font-medium text-forest ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-mango" />
      {label}
    </span>
  );
}
