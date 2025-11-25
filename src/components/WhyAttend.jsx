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
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          POWERING FUTURES, POWERING POSSIBILITY
        </h2>
  
        <p className="text-sm sm:text-base text-gray-100 mb-6 leading-relaxed">
          Co-hosted by the Kenya and South Africa Member Committees of the World
          Energy Council, the conference provides a collaborative space for
          designing an actionable agenda that connects energy access and equity
          with industrial competitiveness and global stability.
        </p>
  
        <p className="text-sm sm:text-base text-gray-100 mb-8 leading-relaxed">
          The focus is on implementation, coordination, and system design,
          ensuring that ideas translate into real progress and that Africa’s
          transition helps shape a more secure and resilient global energy future.
        </p>
  
        <ul className="grid gap-4 sm:grid-cols-2 text-sm sm:text-base text-gray-100">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#f7a24b]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  