import { useNavigate } from "react-router";

function ExclusiveServices() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-[5rem] xl:gap-[20rem] py-16 px-4 lg:px-10 xl:px-[10rem]">
      <div className="w-[25rem] xl:w-full flex flex-col items-center text-center max-w-xl">
        <span className="uppercase text-sm tracking-wider">FROM HOME</span>
        <h2 className="text-4xl font-bold mt-4">Enjoy exclusive services</h2>
        <p className="mt-4 text-lg">
          Benefit from personalised gift wrapping, flexible payment and shipping
          options, and access to 24/7 customer support – all from the comfort of
          your home.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-8 py-3 bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] transition-colors cursor-pointer"
        >
          Contact us
        </button>
      </div>
      <div className="w-full lg:w-1/2">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="//images.ctfassets.net/8cd2csgvqd3m/4gS6SfNhmtWpgnHR8ehvo3/3a2974a90362385453a9d6728b85a5c5/A1_of_a_kind_2025_Beosound_A1_3rd_Gen_Digital_EN_1920x1920_Crop_Clean_00171.png?q=90&fm=webp&w=1440&h=1440&fit=fill"
          />
          <source
            media="(min-width: 768px)"
            srcSet="//images.ctfassets.net/8cd2csgvqd3m/4gS6SfNhmtWpgnHR8ehvo3/3a2974a90362385453a9d6728b85a5c5/A1_of_a_kind_2025_Beosound_A1_3rd_Gen_Digital_EN_1920x1920_Crop_Clean_00171.png?q=90&fm=webp&w=1024&h=1024&fit=fill"
          />
          <img
            src="//images.ctfassets.net/8cd2csgvqd3m/4gS6SfNhmtWpgnHR8ehvo3/3a2974a90362385453a9d6728b85a5c5/A1_of_a_kind_2025_Beosound_A1_3rd_Gen_Digital_EN_1920x1920_Crop_Clean_00171.png?q=90&fm=webp&w=375&h=375&fit=fill"
            alt="Beosound A1 3rd gen on sand"
            className="w-full h-auto"
          />
        </picture>
      </div>
    </div>
  );
}

export default ExclusiveServices;
