

const SkeletonCard = () => {
  return (
    <div className="animate-pulse border border-gray-200 rounded-xl bg-gray-100 shadow-sm">
      <div className="h-36 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
