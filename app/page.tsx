import { About } from './_components/about';
import { Blog } from './_components/blog';
import { Experiments } from './_components/experiments';
import { Experience } from './_components/experience';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import { Skills } from './_components/skills';
import { SkipToContentLink } from './_components/skip-link';
import { Wrapper } from './_components/wrapper';

export default function Home() {
  return (
    <Wrapper>
      <SkipToContentLink />
      <Header />
      
      <main id="content" className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed on large screens */}
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight gradient-text sm:text-5xl">
                <a href="/">Santhosh Rahul</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-secondary sm:text-xl">
                Full Stack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-secondary">
                Building scalable web applications with modern technologies and clean code.
              </p>
              
              {/* Navigation for large screens */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {[
                    { name: 'About', href: '#about' },
                    { name: 'Experience', href: '#experience' },
                    { name: 'Skills', href: '#skills' },
                    { name: 'Experiments', href: '#experiments' },
                    { name: 'Certifications', href: '#certifications' },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        className="group flex items-center py-3 nav-link"
                        href={item.href}
                      >
                        <span className="nav-indicator mr-4 h-px w-8 bg-secondary transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-primary group-focus-visible:text-primary">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Right Column - Scrollable content */}
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Skills />
            <Experiments />
            <Blog />
            <Footer />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}