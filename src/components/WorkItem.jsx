export default function WorkItem({ title, imageUrl }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
}
