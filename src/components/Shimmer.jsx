const Shimmer = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Items List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center animate-pulse"
          >
            <div className="w-20 h-20 bg-gray-300 rounded-full mb-4" />
            <div className="w-32 h-6 bg-gray-300 mb-2 rounded" />
            <div className="w-24 h-4 bg-gray-300 mb-1 rounded" />
            <div className="w-24 h-4 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
