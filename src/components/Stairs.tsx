import React from 'react';
import { motion } from "framer-motion";

function Stairs() {
    const stairAnimation = {
        initial: {
            top: "0%",
        },
        animate: {
            top: "100%",
        },
        exit: {
            top: ["100%", "0%"],
        },
    };

    const reverseIndex = (index: number) => {
        const totalStep = 6;
        return totalStep - index - 1;
    };

    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-gray-700 relative"
                />
            ))}
        </>
    );
}

export default Stairs;
