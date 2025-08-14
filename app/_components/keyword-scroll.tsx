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
      <div className="flex flex-wrap gap-3 justify-center">
        {KEYWORDS.map((keyword, index) => (
          <span
            key={keyword}
            className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary hover:border-primary/50 hover:glow-cyan transition-all duration-300 hover:-translate-y-1"
            style={{
              animationDelay: `${index * 0.05}s`
            }}
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}