// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import React from 'react';

// export default function PageTransition({ children }: { children: React.ReactNode }) {
//     const pathname = usePathname();

//     // Animation variants for fade-in and fade-out
   
//     const pageVariants = {
//         initial: { opacity: 0, x: -100 },
//         animate: { opacity: 10, x: 0 },
//         exit: { opacity: 0, x: -100,  },
//     };


//     const pageTransition = { duration: 0.8 };

//     return (
//         <AnimatePresence mode="wait">
//             <motion.div
//                 key={pathname} // Key is necessary for AnimatePresence to detect page change
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 variants={pageVariants}
//                 transition={pageTransition}
//                 style={{ width: '100%', height: '100%' }} // Optional styling
//             >
//                 {children}
//             </motion.div>
//         </AnimatePresence>
//     );
// }









'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Animation variants
    const pageVariants = {
        initial: { opacity: 0, x: -200 }, // Start off-screen left
        animate: { opacity: 1, x: 0 },   // Fully visible and centered
        exit: { opacity: 0, scale: 200   },  // Scale down and fade out
    };

    const pageTransition = { duration: 0.5 };

    return (
        <AnimatePresence  initial={false}>
            <motion.div
                key={pathname} // Detect page changes
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
                style={{
                    position: 'absolute', // Absolute during animation
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
