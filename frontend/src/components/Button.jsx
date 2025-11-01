export default function Button({ children, variant="green-btn", className, ...props }) {
  let styles = "";
  switch (variant) {
    case 'green-btn':
        styles = "bg-[#127475] text-white hover:bg-[#0c5f60]";
      break;
    
    case 'border-btn':
        styles = "bg-[#f8fbfb] hover:bg-[#f0f6f6] text-[#0c5f60] border border-gray-300";
      break;

    default:
        styles = "bg-[#127475] text-white hover:bg-[#0c5f60]";
      break;
  }
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-xl transition ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
