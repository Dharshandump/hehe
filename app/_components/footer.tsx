import Image from 'next/image'
import LinkTree from '@/public/linktree-seeklogo.png'

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-secondary sm:pb-0">
      <p   className='flex py-2'>
        You have come a long way! <span className="gradient-text font-medium ml-1">Let's connect and build something extraordinary!</span>🚀
      </p>
      <p className="ml-auto flex gap-4 items-center">
        &copy; {new Date().getFullYear()} <span className="gradient-text font-medium">Santhosh Rahul</span>. 
        <a href="https://linktr.ee/rahull.in" target="_blank" rel="noopener noreferrer" className="hover:glow-cyan transition-all duration-300">
          <Image
            src={LinkTree}
            alt="Linktree logo"
            width={20} 
            height={20}
          
          />
        </a>
      </p>
    </footer>
  )
}
