import React from "react";

export default function ReachOutPage() {
  return (
    <div className="text-black font-sans">
      {/* Header */}
      <div className="text-center py-12">
        <p className="uppercase tracking-wide text-sm">
          Bang & Olufsen Professional
        </p>
        <h1 className="text-4xl font-semibold mt-2">Reach Out</h1>
      </div>

      {/* Video Section */}
      <div className="w-full h-[60vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://videos.ctfassets.net/8cd2csgvqd3m/1FjfaBImEcAmhblTOcKqCd/e69e34da1cfde4c97c752397090613a7/Corporate_-_Reach_Out_-_Lobby_-_video.mp4"
        />
      </div>

      {/* Contact Text */}
      <div className="max-w-3xl mx-auto text-center px-4 py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s continue the conversation
        </h2>
        <p className="mb-4 text-gray-700">
          Feel free to reach out if you have any questions or want some expert
          advice. We’d love to hear from you and continue the conversation.
        </p>
        <p className="text-gray-700">
          You’ll see we’re truly committed to elevating your business through
          superior immersive audio visual experiences. Think of this as an
          opportunity to get to know each other – to discuss in more details how
          Bang & Olufsen can specifically help your business. Sound good?
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-gray-50 py-12 flex flex-col items-center px-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center">
              <span className="text-3xl">✉️</span>
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">Ready to LISTEN</h3>
          <p className="max-w-md mx-auto text-sm text-gray-700 mb-2">
            Our dedicated, experienced team will help you with everything you
            need to create seamless luxury immersive experiences.
          </p>
          <p className="text-sm text-blue-900 mb-6">
            professional@bang-olufsen.dk
          </p>
          <button className="px-8 py-2 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            Contact
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-16">
        {[
          {
            title: "Hospitality",
            img: "https://images.ctfassets.net/8cd2csgvqd3m/5Ilev8ZjKBK5y9q55gt8Jg/34fec7b602cce0d31067c98b0630d630/Corporate-hospitality-Landscape-s2000x2800.jpg?q=90&fm=webp&w=480&h=600&fit=fill",
          },
          {
            title: "Yachts",
            img: "https://images.ctfassets.net/8cd2csgvqd3m/6C6oS7fOFOgObYmAvTL3U7/e9d14fd6938332c2333e6a3a7918a782/Corporate-Yacht-Landscape-s2000x2800.jpg?q=90&fm=webp&w=480&h=600&fit=fill",
          },
          {
            title: "Commercial Space",
            img: "https://images.ctfassets.net/8cd2csgvqd3m/7wCgO2F33HPsS1rUwtsLAY/f989d8808580016709d477951b551aae/Corporate-commercial-space-Landscape-s2000x2800.jpg?q=90&fm=webp&w=480&h=600&fit=fill",
          },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">
              Bang & Olufsen Professional
            </p>
            <h4 className="text-lg font-semibold">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
