import { useNavigate } from "react-router";

export default function CommercialSpacePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full text-black">
      {/* Title Section */}
      <section className="text-center px-4 pt-20">
        <p className="uppercase text-sm tracking-widest mb-2">
          Bang & Olufsen Professional
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Commercial Space
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Transforming corporate interior spaces with sound and visual
          sustainable solutions
        </p>
      </section>

      {/* First Video */}
      <section className="w-full mt-10">
        <div className="max-w-8xl mx-auto px-4">
          <video
            src="https://videos.ctfassets.net/8cd2csgvqd3m/1rwZWiPqn8ue9mEmRXvG5G/9340220ea862d5f75928a1b7edf06a25/Corporate_-_Commercial_Space_-_video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[700px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* Paragraph + Reach Out */}
      <section className="text-left max-w-5xl px-4 md:px-0 my-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Acoustic and visual excellence in commercial spaces
        </h2>
        <p className="text-lg mb-6">
          Bang & Olufsen transforming corporate spaces into dynamic environments
          that engage, inform and inspire. Significantly enhancing the overall
          user experience of the space. Maximising audio visual impact while
          ensuring functionality and usability. High fidelity audio visual
          solutions, an integral part of modern corporate spaces, seamlessly
          blend innovative technology with Danish craft and iconic designs to
          create immersive brand experiences.
        </p>
        <div className="flex justify-center">
          <button
            className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer "
            onClick={() => navigate("/reach-out")}
          >
            Reach out
          </button>
        </div>
      </section>

      {/* Flex Sections */}
      <section className="flex flex-col gap-20 px-4 md:px-20 w-full">
        {/* 1st Flex */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Maximize your space. Maximize the impact
            </h3>
            <p className="text-base">
              Our range of products has been designed and crafted to produce the
              best possible experience in different settings. Whether it’s a
              restaurant audio system, a sound system for showroom, or speakers
              for store. Taking into consideration the size and shape of rooms -
              factors that can influence acoustic excellence. High fidelity.
              Literally. From the ceilings if need be. Curved walls, hard
              surfaces or open floor plans can all create challenges. Challenges
              to some. Not to us.
            </p>
          </div>
          <img
            src="https://images.ctfassets.net/8cd2csgvqd3m/7cVYwjUxYJfMBvhwdz6oxw/20facf6b475e2628cefd295b64ba4578/Narrative-beosound-theatre-commercial-space-s2000x2000px.jpg?q=90&fm=webp&w=1380&h=1380&fit=fill"
            alt="First"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>

        {/* 2nd Flex */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Form and function</h3>
            <p className="text-base">
              Our products can be customized to fit into any interior, whatever
              your space and needs. Adding to the overall aesthetics. Reflecting
              your brand and bringing to life immersive experiences. Select from
              a wide range of carefully curated colours, materials, sizes and
              placement options to complement your interior. Future-proof
              designs – with easily upgradeable software and hardware when the
              time comes.
            </p>
          </div>
          <img
            src="https://images.ctfassets.net/8cd2csgvqd3m/4NgdeBfnl2KK8IufeOZ6Gx/76df7ed29dc66b0a6acedefa40143bf0/sef.jpg?q=90&fm=webp&w=1380&h=1380&fit=fill"
            alt="Second"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>

        {/* 3rd Flex */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Integration made easy
            </h3>
            <p className="text-base">
              Seamless integration of our products within existing
              infrastructure. Unlock new interactions and enhance engagement
              with your brand with intuitive interfaces and stunning high
              fidelity sound and vision. Set different moods and tones within
              your space. Redefine how users interact with your brand. And how
              you interact with your commercial sound system.
            </p>
          </div>
          <img
            src="https://images.ctfassets.net/8cd2csgvqd3m/6xDEeIfGOwLBAZl98GofnN/04311bd3393520efc960380e1f0c6631/Narrative-beosound-celestial-commercial-space-s2000x2000px.jpg?q=90&fm=webp&w=1380&h=1380&fit=fill"
            alt="Third"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>
      </section>

      {/* Second Video (Replaces Third Image as per your correction) */}
      <section className="w-full mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <video
            src="https://videos.ctfassets.net/8cd2csgvqd3m/4wjMvwiDeDkJHb1epkj24R/2cf6b0537d57b972ce7d98c9f1c62e2b/Partner_Benefit.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[800px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="w-full bg-gray-100 text-center py-16 mt-20 px-4">
        <h4 className="text-xl font-medium mb-4">Ready to listen</h4>
        <p className="text-base max-w-2xl mx-auto mb-6">
          Reach out to our experts from the business development team to learn
          more about how we work with companies to develop bespoke solutions
          that sound as good as they look.
        </p>
        <button
          className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
          onClick={() => navigate("/reach-out")}
        >
          Reach out
        </button>
      </section>
    </div>
  );
}
