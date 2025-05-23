import Button from "../../UI/Button";

function SignUp() {
  return (
    <section className="bg-[#fcfaef] py-20 text-center">
      <div className="flex flex-col items-center space-y-6 max-w-xl mx-auto">
        {/* <!-- Envelope Icon --> */}
        <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 4h16v16H4V4zm0 0l8 8 8-8"
            />
          </svg>
        </div>

        {/* <!-- Heading --> */}
        <h2 className="text-sm tracking-widest font-medium uppercase">
          Join the House of Bang & Olufsen
        </h2>

        {/* <!-- Description --> */}
        <p className="text-gray-700 max-w-md text-base leading-relaxed">
          Enjoy new and limited products, exclusive events, special offers and
          much more before anyone else.
        </p>

        <Button type="secondary">Sign up now</Button>
      </div>
    </section>
  );
}

export default SignUp;
