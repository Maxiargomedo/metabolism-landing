'use client';

import { useEffect, useRef, useState } from 'react';

let gsap: any = null;
let ScrollTrigger: any = null;

export function useGSAP() {
  const containerRef = useRef<HTMLElement>(null);
  const tlRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    const initializeGSAP = async () => {
      try {
        // Dynamic imports to prevent SSR issues
        const gsapModule = await import('gsap');
        const scrollTriggerModule = await import('gsap/ScrollTrigger');

        gsap = gsapModule.gsap;
        ScrollTrigger = scrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Default animations for elements with data attributes
          gsap.utils.toArray('[data-animate="fade-up"]').forEach((element: any) => {
            gsap.fromTo(element, 
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  end: 'bottom 15%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          });

          gsap.utils.toArray('[data-animate="fade-in"]').forEach((element: any) => {
            gsap.fromTo(element,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  end: 'bottom 15%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          });

          gsap.utils.toArray('[data-animate="slide-left"]').forEach((element: any) => {
            gsap.fromTo(element,
              { opacity: 0, x: 100 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  end: 'bottom 15%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          });

          gsap.utils.toArray('[data-animate="slide-right"]').forEach((element: any) => {
            gsap.fromTo(element,
              { opacity: 0, x: -100 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  end: 'bottom 15%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          });

          gsap.utils.toArray('[data-animate="scale-up"]').forEach((element: any) => {
            gsap.fromTo(element,
              { opacity: 0, scale: 0.8 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  end: 'bottom 15%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          });
        }, containerRef.current);

        return () => ctx.revert();
      } catch (error) {
        console.error('Error initializing GSAP:', error);
      }
    };

    initializeGSAP();
  }, [isClient]);

  const createTimeline = (options?: any) => {
    if (gsap) {
      tlRef.current = gsap.timeline(options);
      return tlRef.current;
    }
    return null;
  };

  return {
    containerRef,
    tlRef,
    createTimeline
  };
}
