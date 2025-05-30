import { useNavigate } from "react-router";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen px-6 pt-32 text-center">
        {/* Headings */}
        <p className="uppercase tracking-widest text-sm text-gray-600 mb-2">
          Audio and visual for businesses
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Bang & Olufsen Professional
        </h1>
        <p className="max-w-2xl text-gray-700 mb-8">
          Bang & Olufsen creates bespoke sound experiences to amplify customer
          engagement. Discover how our iconic audio designs and innovative
          technology play an integral role in enhancing audio experiences for
          customers.
        </p>

        <video
          className="w-full h-auto rounded-lg shadow-lg mb-12"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.ctfassets.net/8cd2csgvqd3m/5oXejW1WMhDNe2y2A6dE7f/173c0134532ce6811fec7658a950de60/Bang___Olufsen_Professional.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Article Section */}
        <div className="max-w-5xl text-left space-y-6 mb-20">
          <h2 className="text-3xl font-semibold text-center">
            Seamless integrated brand experiences
          </h2>
          <p>
            At Bang & Olufsen, we’re dedicated to transforming every sound
            experience your clients have with your business, into truly
            memorable ones.
          </p>
          <p>
            Whether that’s including a premium cinematic theatre experience with
            Dolby Atmos surround sound to your hotel rooms or suites so your
            guests experience all the thrills and drama of authentic, powerful
            sound.
          </p>
          <p>
            Or, getting your client on board with a rich and powerful
            high-fidelity audio experience to complement their high-spec yacht.
          </p>
          <p>
            Or even, captivating and engaging your customers like never before
            in your foyer or VIP lounge with surround sound and spatial audio.
          </p>
          <p>
            Tailor-made, rich, immersive sound experiences delivered without
            compromise. Seamless interfaces putting you and your clients in
            control.
          </p>
        </div>

        {/* Hospitality Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 px-6 max-w-7xl mx-auto mb-20">
          {/* Video (left side) */}
          <div className="w-full lg:w-1/2">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://videos.ctfassets.net/8cd2csgvqd3m/7LK6hGcvNSVRChrKn1Vhkg/6fe4955c51fd69d060202ab029f68949/Brand_Audio_and_Visual_Hospitality.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text (right side) */}
          <div className="w-full lg:w-1/2 text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Hospitality</h2>
            <p>
              Bang & Olufsen has extensive experience working closely with
              global luxury hospitality groups. We not only deliver and install
              our products for luxury hotels, we also develop solutions that
              fully integrate our products into the hotel’s electronic
              infrastructure.
            </p>
            <p>
              So hotels can tailor controls and information flow on TVs and
              connect speakers with room connectivity to deliver the best audio
              and visual experience for guests. Taking their luxury stay to
              another level.
            </p>

            {/* Hospitality Button */}

            <button
              onClick={() => navigate("/hospitality")}
              className="mt-2 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Yachts Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 px-6 max-w-7xl mx-auto mb-20">
          {/* Text (left side) */}
          <div className="w-full lg:w-1/2 text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Yachts</h2>
            <p>
              Bang & Olufsen delivers tailor-made solutions for OEMs
              incorporating our sound and vision experiences when private
              customers are designing their new yacht or jet. We collaborate
              with OEMs to support their requirements and AV-system integration.
            </p>
            <p>
              Enabling the customer to be in total control — whether they use
              multi-room functions or operate it through a computer system.
              Seamless interfaces make navigation easy.
            </p>
            <p>Stunning designs. High fidelity at the touch of a button.</p>

            {/* Yachts Button */}

            <button
              onClick={() => navigate("/yachts")}
              className="mt-2 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer"
            >
              Learn more
            </button>
          </div>

          {/* Image (right side) */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.ctfassets.net/8cd2csgvqd3m/5pdsKJ1goOmbJCTeKXRiBH/4a77bfd140fcd5e02c50d7cf7f45088d/240627_Beo_Xyachts151477.jpg?q=90&fm=webp&w=1380&h=1380&fit=fill"
              alt="Yacht"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Commercial Space Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 px-6 max-w-7xl mx-auto mb-20">
          {/* Video (left side) */}
          <div className="w-full lg:w-1/2">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://videos.ctfassets.net/8cd2csgvqd3m/5qAoygfPMzgtLX2HhNw0KT/073e3c9f1751ecfa99b93534c7518213/Brand_Audio_and_Visual_Commercial_Space.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text (right side) */}
          <div className="w-full lg:w-1/2 text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Commercial Space
            </h2>
            <p>
              Bang & Olufsen elevates any commercial space with a premium sound
              and visual experience. Bespoke AV solutions designed to enhance
              your space and experience.
            </p>
            <p>
              From statement speakers to subtle setups, we help you find
              solutions that are music to your clients’ eyes and ears. Creating
              immersive moments that truly connect.
            </p>

            {/* Commercial-Space Button */}
            <button
              onClick={() => navigate("/commercial-space")}
              className="mt-2 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-100 w-full py-16 px-4 text-center">
          <h3 className="text-xl font-medium mb-4">Ready to listen</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Reach out to our experts from the business development team to learn
            more about how we work with companies to develop bespoke solutions
            that sound as good as they look.
          </p>
          {/* Reach-Out Button */}
          <button
            onClick={() => navigate("/reach-out")}
            className="px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition cursor-pointer"
          >
            Reach out
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
