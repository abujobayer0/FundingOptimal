export default function FeatureRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2 justify-between text-gray-100">
        <div className="w-5">
          <span className="size-4 flex items-center justify-center rounded-full border-[2px] border-white text-xs">
            ?
          </span>
        </div>
        <span className="text-sm text-gray-400/80">{label}</span>
      </div>
      <span className="text-gray-300 text-sm font-medium">{value}</span>
    </div>
  );
}
