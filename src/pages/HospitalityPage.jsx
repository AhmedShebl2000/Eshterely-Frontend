import React from "react";
import { useNavigate } from "react-router";

export default function HospitalityPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-6 pt-32 text-center">
      {/* Top Title Section */}
      <p className="uppercase tracking-widest text-sm text-gray-600 mb-2">
        Bang & Olufsen Professional
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">Hospitality</h1>
      <p className="max-w-2xl text-gray-700 mb-8">
        Welcome your guests with prestigious audio experiences.
      </p>

      {/* Fullscreen Video */}
      <video
        className="w-full h-auto rounded-lg shadow-lg mb-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://videos.ctfassets.net/8cd2csgvqd3m/3aQBhNhjsK5jX7rjGOWKRP/ae4ce450f898d14b2b50103cce879f13/Corporate_-_Hospitality_-_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Section Under the Video */}
      <div className="max-w-5xl text-left space-y-6 mb-20">
        <h2 className="text-3xl font-semibold text-center">
          Enhancing the hotel experience
        </h2>
        <p>
          Enter the world of Bang & Olufsen and spoil your guests with
          exceptional sound and immersive cinematic TV experiences. Create the
          perfect atmosphere for their stay—from arrival to departure—offering
          high fidelity audio and visual moments.
        </p>
        <p>
          Our products are timeless, iconic, and designed to last. With solid
          materials like aluminium and oak, easily upgradable covers, and smart
          software, Bang & Olufsen products fit any luxury hotel interior—now
          and in the future.
        </p>
        <div className="text-center">
          <button
            onClick={() => navigate("/reach-out")}
            className="mt-2 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer"
          >
            Reach out
          </button>
        </div>
      </div>

      {/* Section 1: Image Right */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto mb-20">
        <div className="w-full lg:w-1/2 text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Functionality. Design. Craftsmanship.
          </h2>
          <p>
            Timeless designs and craft that create an inviting atmosphere.
            Danish design and honest materials chosen for beauty, comfort, and
            longevity.
          </p>
          <p>
            We don’t just make sound systems—we sculpt them. Nearly a century of
            dedication to audio perfection, visible in every detail.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.ctfassets.net/8cd2csgvqd3m/4MFCexTjVgL5GAH1DglyOr/b6ddc5bbebcb9074e9330d566786ba4e/Narrative-beovision-Theatre-hospitality-s2000x2000px.jpg?q=90&fm=webp&w=1380&h=1380&fit=fill"
            alt="Beovision Theatre"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 2: Video Left */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto mb-20">
        <div className="w-full lg:w-1/2">
          <video
            className="w-full h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.ctfassets.net/8cd2csgvqd3m/2JuQb44on2uLGKuJJoSzkR/eeb835294e5de59f951bd71de91f6089/Corporate_-_Hospitality_-_Beovision_Theatre_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full lg:w-1/2 text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            See. Hear. Feel. More.
          </h2>
          <p>
            With our hotel sound systems, deliver carefully curated vibes—from
            relaxing to energetic—using high fidelity audio that evokes emotion.
            Memorable hotel moments. Every time.
          </p>
        </div>
      </div>

      {/* Section 3: Image Right */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto mb-20">
        <div className="w-full lg:w-1/2 text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Connecting with you and your guests
          </h2>
          <p>
            Innovative UI/UX, smart connectivity, and future-ready sound
            systems. Let guests connect their devices with ease and enjoy
            seamless, luxurious sound.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.ctfassets.net/8cd2csgvqd3m/1TJa814mJxE1MaI0AjN89b/1069fecc7856dcdb93cb819672bff440/Narrative-beovision-harmony-Hospitality-s2000x2000px.jpg?q=90&fm=webp&w=1380&h=1380&fit=fill"
            alt="Beovision Harmony"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Final Video Section */}
      <div className="w-full max-w-7xl mx-auto">
        <video
          className="w-full h-auto rounded-lg shadow-lg mb-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.ctfassets.net/8cd2csgvqd3m/4rfrKu5bzGSux5qWUbFCsd/a1d23f45946d8da2bac5efcedafc6921/Corporate_-_Hospitality_-_Dangleterre_-_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 w-full py-16 px-4 text-center">
        <h3 className="text-xl font-medium mb-4">
          Ready to elevate hospitality?
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Talk to our business experts to build custom audio-visual experiences
          for your luxury hotel or resort.
        </p>
        <button
          onClick={() => navigate("/reach-out")}
          className="px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition cursor-pointer"
        >
          Reach out
        </button>
      </div>

      {/* !!!!!!!!!!!!!!!!!! */}
    </div>
  );
}
