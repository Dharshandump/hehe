const KEYWORDS = [
  'React.js', 'React Native', 'Typescript', 'Javascript',
  'Node.js', 'Express.js', 'Next.js', 'Python', 'C++',
  'REST APIs', 'TailwindCss', 'SQL', 'Firebase', 'MongoDB',
  'Gemini API', 'GIT', 'HTML5', 'CSS3'
];

export function KeywordScroll() {
  return (
    <div className="my-16 overflow-hidden w-full">
      <h2 className="text-2xl font-bold uppercase pb-4 gradient-text">Skills</h2>

      <div className="flex flex-wrap gap-4 text-xl">
        {KEYWORDS.map((keyword, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-lg border border-secondary/20 bg-card backdrop-blur-md shadow-md text-primary transition-all duration-300 hover:-translate-y-1 hover:glow-cyan hover:border-secondary/40"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
      {/* Animated Background with Geometric Shapes */}
  // Generate particles
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        {particles}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }}
    />
          background: `radial-gradient(circle 800px at var(--x, 50%) var(--y, 50%), rgba(179, 71, 217, 0.1), rgba(255, 102, 204, 0.05) 50%, transparent 70%)`

}
