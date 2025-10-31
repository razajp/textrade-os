export default function NotificationMenu({ onClose }) {
  const notifications = [
    { id: 1, message: "New user logged in" },
    { id: 2, message: "Backup completed successfully" },
  ];

  return (
    <div
      className="absolute bottom-12 right-0 bg-white border shadow-md rounded-lg w-64 p-3 z-50"
      onMouseLeave={onClose}
    >
      <h3 className="font-semibold mb-2 text-gray-700">Notifications</h3>
      {notifications.length ? (
        notifications.map((n) => (
          <p key={n.id} className="text-sm text-gray-600 border-b py-1 last:border-none">
            {n.message}
          </p>
        ))
      ) : (
        <p className="text-sm text-gray-500">No new notifications</p>
      )}
    </div>
  );
}
