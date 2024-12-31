const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-accent border-t-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-8 w-8 animate-ping rounded-full bg-accent/30"></div>
        </div>
      </div>
      <p className="mt-4 text-sm text-white/60">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
