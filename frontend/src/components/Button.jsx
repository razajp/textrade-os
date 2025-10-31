export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-[#127475] text-white py-2 rounded-xl hover:bg-[#0c5f60] transition"
    >
      {children}
    </button>
  );
}
