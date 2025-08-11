import { Socials } from './socials';
import Image from 'next/image'
import LinkTree from '@/public/linktree-seeklogo.png'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#experiments', label: 'Experiments' },
  { href: '#certifications', label: 'Certifications' }
]

export function Header() {

  const orchestration = [
    "slide-in-from-right-64 duration-700 ease-in-cubic-gs",
    "slide-in-from-left-48 duration-700 linear",
    "slide-in-from-bottom-24 duration-500 ease-out"
  ]

  const duration = ['duration-200', 'duration-500', 'duration-700', 'duration-1000']

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>

        <h1 className={`${orchestration[0]} animate-fade-in text-4xl font-bold tracking-tight text-primary dark:text-slate-200 sm:text-5xl`}>
          <a href="/">Santhosh Rahul</a>
        </h1>
        <div className='flex items-center gap-3'>
          <h2 className={`${orchestration[1]} animate-fade-in mt-3 text-lg font-medium tracking-tight text-secondary sm:text-xl flex gap-6`}>
          An aspiring Software Engineer 
            <a href="https://linktr.ee/rahull.in" target="_blank" rel="noopener noreferrer">
          <Image
            src={LinkTree}
            alt="Linktree logo"
            width={20} 
            height={20}
          />
        </a>
          </h2>
        </div>
        <h2 className='mt-2 font-semibold'>#open_to_work</h2>
        <p className={`${orchestration[2]} animate-fade-in text-sm mt-4 max-w-xs leading-normal text-slate-400`}>
        Crafting seamless digital experiences with code, creativity, and purpose.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {LINKS.map((link, i) => (
              <li key={link.href} className={`animate-fade-in slide-in-from-right slide-in-from-bottom ${duration[i]} ease-out`}>
                <a className="group flex items-center py-3" href={link.href}>
                  <span className="nav-indicator mr-4 h-px w-8 bg-secondary dark:group-hover:bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:group-hover:text-slate-200 group-hover:text-secondary group-focus-visible:text-slate-200">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <Socials />
      </div>
    </header>
  )
}
