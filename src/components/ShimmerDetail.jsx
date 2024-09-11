const ShimmerDetail = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center animate-pulse">
        <div className="w-40 h-40 bg-gray-300 rounded-full mb-4" />
        <div className="w-48 h-6 bg-gray-300 mb-4 rounded" />
        <div className="w-40 h-4 bg-gray-300 mb-2 rounded" />
        <div className="w-40 h-4 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default ShimmerDetail;
