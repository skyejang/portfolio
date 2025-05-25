import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white/70 border-2 border-slate-300 rounded-sm p-4 h-[280px] flex flex-col justify-end">
      <div className="skeleton h-6 w-3/4 mb-4 rounded"></div>
      <div className="skeleton h-4 w-full mb-2 rounded"></div>
      <div className="skeleton h-4 w-1/2 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
