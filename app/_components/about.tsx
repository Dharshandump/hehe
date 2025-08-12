import { View } from 'lucide-react';
import { SectionTitle } from './section-title';
import { ViewResumeButton } from './buttons/view-resume-btn';

export function About() {
  return (
    <section
      id='about'
      className='scroll-mt-16 lg:scroll-mt-24'
      aria-label='About me'
    >
      <SectionTitle>
        <h2 className='text-sm font-bold uppercase tracking-widest'>About</h2>
      </SectionTitle>
  <p className='mb-4 text-pretty'>
    Hi, I&apos;m <span className="gradient-text font-semibold">Rahul</span> — a full-stack developer passionate about building scalable and intuitive digital products. I work with technologies like <span className="text-secondary font-medium">Next.js, TypeScript, TailwindCSS, and ShadCN</span> to deliver fast, accessible, and visually polished web experiences. I enjoy bridging the gap between design and engineering, ensuring each product is functional and user-focused.
  </p>
  <p className='mb-4 text-pretty'>
    My work spans across <span className="text-secondary font-medium">AI, blockchain, and real-time web systems</span>. Projects like <strong className="gradient-text">HerSafe</strong> (a safety app using ML and blockchain) and <strong className="gradient-text">AI Blog</strong> (an AI-assisted writing tool with Gemini API) reflect my interest in solving meaningful problems through code. I'm comfortable working across the stack and adapting quickly to new libraries, tools, or frameworks.
  </p>
  <p className='mb-4 text-pretty'>
    Outside of development, I lead the <strong className="gradient-text">YUVA VIIT</strong> chapter, where I've organized tech events, hackathons, and workshops that bring students closer to real-world innovation. I believe in <span className="text-secondary font-medium">teamwork, constant learning, and using tech for impact</span>.
  </p>
  <p className='text-pretty'>
    I'm always exploring new ideas — whether it's experimenting with <span className="text-secondary font-medium">AI tools</span>, contributing to projects, or helping a vision come to life. <span className="gradient-text font-semibold">Let's build something impactful together.</span>
  </p>
      <ViewResumeButton />
    </section>
  );
}
