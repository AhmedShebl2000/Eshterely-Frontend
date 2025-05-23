function Button({ children }) {
  return (
    <button className="bg-[#ffc356] py-2  rounded-3xl cursor-pointer w-50 md:w-80">
      {children}
    </button>
  );
}

export default Button;
