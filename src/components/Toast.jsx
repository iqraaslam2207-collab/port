import { usePortfolio } from "../context/PortfolioContext.jsx";

export default function Toast() {
  const { toast } = usePortfolio();
  if (!toast) return null;

  return (
    <div
      role="status"
      className="glass glow-border fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full px-4 py-2 text-sm text-ink"
    >
      {toast}
    </div>
  );
}
