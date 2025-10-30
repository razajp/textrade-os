export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-[#127475] text-white py-2 rounded-xl hover:bg-[#127475]/85 transition"
    >
      {children}
    </button>
  );
}
