'use client';

import { useInView as useFramerInView } from 'framer-motion';
import { RefObject, useMemo } from 'react';

interface UseOptimizedInViewOptions {
  once?: boolean;
  amount?: number;
  margin?: string;
}

export const useOptimizedInView = (
  ref: RefObject<Element>,
  options: UseOptimizedInViewOptions = {}
) => {
  const {
    once = true,
    amount = 0.3,
    margin = '0px'
  } = options;

  // Memorizar las opciones para evitar re-renders innecesarios
  const memoizedOptions = useMemo(() => ({
    once,
    amount,
    margin: margin as any // Type assertion para compatibility
  }), [once, amount, margin]);

  return useFramerInView(ref, memoizedOptions);
};

export default useOptimizedInView;
