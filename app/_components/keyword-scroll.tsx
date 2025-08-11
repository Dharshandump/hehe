const KEYWORDS = [
  'React.js', 'React Native', 'Typescript', 'Javascript',
  'Node.js', 'Express.js', 'Next.js', 'Python', 'C++',
  'REST APIs', 'TailwindCss', 'SQL', 'Firebase', 'MongoDB',
  'Gemini API', 'GIT', 'HTML5', 'CSS3'
];

export function KeywordScroll() {
  return (
    <div className="my-16 overflow-hidden w-full">
      <p className="text-2xl font-bold uppercase pb-4">Skills</p>

      <div className="flex flex-wrap gap-4 text-xl">
        {KEYWORDS.map((keyword, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-lg border border-white/10 bg-white/10 backdrop-blur-md shadow-md text-white transition-transform duration-300 hover:-translate-y-1"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}
