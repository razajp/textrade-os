export default function NavItem({ icon, label, tooltip, onClick, active = false }) {
  return (
    <button
      onClick={onClick}
      className={`relative p-2.5 rounded-xl group
        ${active ? "bg-[#127475] text-white" : "hover:bg-[#d3f0f0] text-gray-700"}
      `}
    >
      {icon}

      {/* Tooltip (only when inactive) */}
      {!active && tooltip && (
        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-[#127475]/85 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-80 whitespace-nowrap">
          {tooltip}
        </span>
      )}
    </button>
  );
}
