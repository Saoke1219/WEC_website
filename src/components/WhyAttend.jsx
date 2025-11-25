export default function WhyAttend() {
  const bullets = [
    "Shape real outcomes through a working forum designed for action—not ceremony—where strategies evolve into deliverable pathways.",
    "Engage directly with global leaders across government, industry, finance, technology, and development who are driving the next phase of the energy transition.",
    "Co-create an actionable agenda through high-level plenaries, interactive sessions, and collaborative working groups.",
    "Access emerging opportunities in renewable-first systems, hydrogen development, and integrated clean-energy value chains.",
    "Build cross-continental partnerships that connect Africa’s transition with global markets, supply chains, and resilience efforts.",
    "Gain early insight into the ideas, investments, and innovations shaping the World Energy Congress 2026 in Riyadh.",
    "Expand your network through curated events designed to spark meaningful connections, collaboration, and long-term partnerships.",
    "Experience Nairobi’s energy—a dynamic environment that inspires fresh thinking and offers a vibrant cultural backdrop for collaboration.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
        POWERING FUTURES, POWERING POSSIBILITY
      </h2>

      <p className="text-sm sm:text-base text-gray-100 mb-6 leading-relaxed max-w-4xl">
        Africa’s energy transition stands at a decisive inflection point, and so does the global market that surrounds it. As the world moves from net-zero pledges to real implementation, Africa is no longer a frontier of potential but a system actor whose choices will shape resilience, competitiveness and energy security around the world.
      </p>

      <p className="text-sm sm:text-base text-gray-100 mb-6 leading-relaxed max-w-4xl">
        The World Energy Council Conference 2026, held under the theme Powering Futures: Powering Possibility, creates a results-focused platform that brings together governments, energy leaders, financiers, innovators, and development partners to align renewable-first systems with the policy, capital, and partnerships needed to realize them.
      </p>

      <p className="text-sm sm:text-base text-gray-100 mb-6 leading-relaxed max-w-4xl">
        Co-hosted by the Kenya and South Africa Member Committees of the World Energy Council, the conference provides a collaborative space for designing an actionable agenda that connects energy access and equity with industrial competitiveness and global stability. The focus is on implementation, coordination, and system design, ensuring that ideas translate into real progress.
      </p>

      <p className="text-sm sm:text-base text-gray-100 mb-10 leading-relaxed max-w-4xl">
        Our work in Nairobi will help establish the foundation of a continental platform for renewable and hydrogen cooperation and inform Africa’s collective contribution to the World Energy Congress in Riyadh.
        It is a moment to shape solutions that elevate shared opportunity and expand the possibilities of a more secure and resilient global energy future.
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 text-sm sm:text-base text-gray-100">
        {bullets.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#f7a24b]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

  