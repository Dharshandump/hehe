import Link from 'next/link';
import { ModeToggle2 } from '@/components/ui/ThemeToggle';
import { DevSheet } from '@/components/dev-sheet';
import { Socials } from './socials';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experiments', href: '#experiments' },
  { name: 'Certifications', href: '#certifications' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold gradient-text hover:glow-cyan transition-all duration-300">
              Santhosh Rahul
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium text-secondary hover:text-primary transition-all duration-300 px-3 py-2 rounded-md hover:glow-cyan"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Socials />
            <ModeToggle2 />
            <DevSheet />
          </div>
        </div>
      </div>
    </header>
  );
}