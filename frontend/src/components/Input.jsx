export default function Input({ label, ...props }) {
  return (
    <div>
      {label && <label className="block mb-1">{label}</label>}
      <input
        {...props}
        className="w-full border border-gray-300 rounded-xl ps-4 p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
