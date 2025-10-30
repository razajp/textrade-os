export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
