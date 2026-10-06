const Loader = ({ text = "Loading..." }) => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50
    text-slate-900 z-50"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="w-16 h-16 rounded-full border-4 border-primary-light
        border-t-primary animate-spin"
        />
      </div>
    </div>
  );
};

export default Loader;
