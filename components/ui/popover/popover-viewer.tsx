"use client";

import { useState } from 'react';

// import { truncate } from '@/lib/utils';

import { BlurImage } from '../../blur-image'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../popover'

type PopoverViewerProps = {
  title: string,
  description: string,
  tags: string[],
  image: { src: string; width?: number, height?: number; alt: string },
  children: React.ReactNode
}

export function PopoverViewer({ title, description, tags, image, children }: PopoverViewerProps) {

  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <Popover open={open}>
      <PopoverTrigger
        asChild
        onMouseEnter={toggleOpen}
        onMouseLeave={toggleOpen}
        className=''
      >
        {children}
      </PopoverTrigger>
      <PopoverContent side="top" sideOffset={0} className="bg-white/20 backdrop-blur-lg">
        <BlurImage src={image.src} alt={image.alt} />
        {/* <h3 className="pt-2 font-semibold">Tech Stack</h3> */}
        {!!tags.length ? (
          
          <div className="flex flex-wrap gap-2 mt-3">
        {/* <h3 className="pb-3 font-semibold">Tech Stack</h3> */}
            {tags.map((tag, i) => (
              <span key={i} className="px-1 py-0.5 text-xs text-accent dark:text-white bg-secondary rounded-md">{tag}</span>
            ))}
          </div>
        ) : (
          <div>
            {/* <p className="py-2 text-xs">{truncate(description, 120)}</p> */}
          </div>
        )}
      </PopoverContent >
    </Popover >
  )
}
