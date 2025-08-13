import { SectionTitle } from './section-title';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5/CSS3', level: 95 }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'Python', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'Firebase', level: 85 },
      { name: 'MongoDB', level: 78 }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'React Native', level: 75 },
      { name: 'Blockchain', level: 70 },
      { name: 'AI/ML Integration', level: 72 },
      { name: 'C++', level: 80 },
      { name: 'SQL', level: 85 }
    ]
  }
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Technical skills"
    >
      <SectionTitle>
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Skills & Expertise
        </h2>
      </SectionTitle>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="skill-card rounded-xl p-6 hover-lift"
            style={{
              animationDelay: `${categoryIndex * 0.1}s`
            }}
          >
            <h3 className="mb-6 text-lg font-semibold gradient-text">
              {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="group">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">
                      {skill.name}
                    </span>
                    <span className="text-xs text-secondary">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="h-2 bg-card rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 ease-out group-hover:glow-purple"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Tags */}
      <div className="mt-12">
        <h3 className="mb-6 text-lg font-semibold gradient-text-alt text-center">
          Additional Technologies
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Gemini API', 'Vercel', 'ShadCN UI', 'Drizzle ORM', 
            'Supabase', 'WebSockets', 'Redux Toolkit', 'React Router',
            'Stripe Integration', 'JWT Authentication', 'Docker'
          ].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary hover:border-primary/50 hover:glow-cyan transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}