import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function ViewResumeButton() {
  return (
    <div className="mt-8">
      <Button
        asChild
        className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-black font-semibold px-6 py-3 rounded-lg hover:glow-purple transition-all duration-300 hover:-translate-y-1"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Download size={18} />
          View Resume
        </a>
      </Button>
    </div>
  );
}