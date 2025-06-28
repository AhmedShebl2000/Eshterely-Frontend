import { useNavigate } from "react-router";

export default function YachtsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      {/* Hero Section */}
      <section className="w-full text-center px-6 pt-32">
        <p className="uppercase tracking-widest text-sm text-gray-600 mb-2">
          Bang & Olufsen Professional
        </p>
        <h1 className="text-4xl font-semibold mb-3">Yachts</h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Audio and visual experiences to match those amazing seascapes.
        </p>
      </section>

      {/* First Video */}
      <div className="w-full mt-10">
        <video
          className="w-full h-auto object-cover"
          src="https://videos.ctfassets.net/8cd2csgvqd3m/3yI0G89l1zZNArSdGXWpkv/008720e791bff9cbb951a5ff40ab8a72/Corporate_-_Yachts_-_video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Centered Section with Button */}
      <section className="w-full px-6 py-20 bg-white flex flex-col items-center text-center max-w-6xl">
        <h2 className="text-3xl font-medium mb-4">
          Reaching new depths in sound and visual
        </h2>
        <p className="text-gray-700 max-w-2xl mb-6">
          Bang & Olufsen is transforming home entertainment experiences in
          yachts. Unparalleled depth of craft, design and aesthetics with audio
          precision and visual fidelity. Delivering the ultimate soundscapes and
          immersive visual experiences to rival those amazing seascapes. Bring
          Bang & Olufsen on board and you bring with it a century of Danish
          craft and timeless iconic designs. Dedication to form and function,
          texture and detail. Pleasure cruising at its finest. Superior and
          luxurious immersive audio visual experiences for your clients – it’s
          our pleasure.
        </p>
        <button
          className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer"
          onClick={() => navigate("/reach-out")}
        >
          Reach out
        </button>
      </section>

      {/* Combined Image + Video Section */}
      <section className="flex flex-col gap-20 w-full px-6 py-20 max-w-6xl">
        {/* Row 1: Text + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Left */}
          <div>
            <h3 className="text-2xl font-medium mb-4">
              At home entertainment experiences. At sea
            </h3>
            <p className="text-gray-700">
              Bang & Olufsen offers the opportunity to include our iconic TVs
              and speakers with exceptional sound and visual fidelity as part of
              premium feature upgrades for your customers customizing their
              yacht. Our speakers and TVs can be seamlessly installed and
              integrated into their yacht’s AV system. Streamlining the whole
              entertainment experience across all decks and rooms on the yacht.
            </p>
          </div>
          {/* Image Right */}
          <div>
            <img
              src="https://images.ctfassets.net/8cd2csgvqd3m/6D91LoougMVWwiGt7Ustsf/3335a6371c63e23cf9bd9aa0e2571876/Narrative-beolab-8-Yachts-s2000x2000px.jpg?q=90&fm=webp&w=1380&h=1380&fit=fill"
              alt="Yacht speaker"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Row 2: Video + Text */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Video Left */}
          <div>
            <video
              className="w-full h-[600px] object-cover rounded-lg"
              src="https://videos.ctfassets.net/8cd2csgvqd3m/6xkowfR5kdv3HfRCW29ROl/2e983700225605445f26b49a36a2a8b5/Corporate_-_Yachts_-_Level_video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          {/* Text Right */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Customisation is key</h3>
            <p className="text-gray-700">
              Your clients expect a high level of customization options for
              their chosen yacht. And that goes for their entertainment systems,
              too. We offer a comprehensive selection of iconic products not to
              mention colours, finish and materials to complement their chosen
              interior design. And should they have something more unique in
              mind, our atelier program is on standby to create bespoke products
              for your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-[#f9f9f9] px-6 py-20 flex flex-col items-center text-center">
        <h3 className="text-xl font-medium mb-4">Ready to listen</h3>
        <p className="text-gray-700 max-w-xl mb-6">
          Reach out to our experts from the business development team to learn
          more about how we work with companies to develop bespoke solutions
          that sound as good as they look.
        </p>
        <button
          className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition font-semibold cursor-pointer"
          onClick={() => navigate("/reach-out")}
        >
          Reach out
        </button>
      </section>
    </div>
  );
}
