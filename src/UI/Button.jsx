function Button({ children, type, onClick, width }) {
  if (type === "primary")
    return (
      <button
        onClick={onClick}
        className="cursor-pointer bg-yellow-400 hover:bg-[#FAF9F3]  text-black font-medium py-2 px-6 rounded-full transition-colors duration-200"
      >
        {children}
      </button>
    );

  if (type === "secondary")
    return (
      <button
        onClick={onClick}
        className={`cursor-pointer border border-black text-black bg-[#FAF9F3] hover:bg-black hover:text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 w-${width}`}
      >
        {children}
      </button>
    );

  if (type === "danger")
    return (
      <button
        onClick={onClick}
        className={`cursor-pointer border border-red-500 text-white bg-red-500 hover:bg-red-400 font-medium py-2 px-6 rounded-full transition-colors duration-300 w-${width}`}
      >
        {children}
      </button>
    );

  return (
    <button
      onClick={onClick}
      className="bg-[#ffc356] py-2  rounded-3xl cursor-pointer w-50 md:w-80"
    >
      {children}
    </button>
  );
}

export default Button;
