'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MeteorProps {
  number?: number;
}

export default function Meteors({ number = 20 }: MeteorProps) {
  const [meteors, setMeteors] = useState<Array<{ id: number; delay: number; duration: number; left: string }>>([]);

  useEffect(() => {
    const meteorArray = Array.from({ length: number }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      left: Math.random() * 100 + '%',
    }));
    setMeteors(meteorArray);
  }, [number]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute top-0 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          style={{ left: meteor.left }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 10 + 5,
          }}
        >
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[1px] w-[50px] -translate-y-1/2 -translate-x-1/2 rotate-45 bg-gradient-to-r from-slate-500 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}