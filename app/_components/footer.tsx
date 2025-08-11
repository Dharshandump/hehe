import Image from 'next/image'
import LinkTree from '@/public/linktree-seeklogo.png'

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p   className='flex py-2'>
        You have come a long way! Lets connect and build something extraordinary!🚀
      </p>
      <p className="ml-auto flex gap-4 items-center">
        &copy; {new Date().getFullYear()} Santhosh Rahul. 
        <a href="https://linktr.ee/rahull.in" target="_blank" rel="noopener noreferrer">
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
