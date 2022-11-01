import React from 'react';
import {motion} from 'framer-motion'
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const svgVariants = {
    start:{
        // opacity:0,
        // pathLength: 0,
        stroke: "#10b981",
    },
    finished: {
        // opacity:1,
        // pathLength: 1,
        stroke: "#064e3b",
        transition: {
            duration: 1.8,
            ease: 'easeInOut'
        }
    }
}


const pathVariants = {
    start:{
        opacity:0,
        pathLength: 0,
    },
    finished: {
        opacity:[0.7,1],
        pathLength: [0,1],
        pathLength: 1,
        transition: {
            // delay: 0.5,
            duration: 3,
            ease: 'easeInOut',
            stiffness: 260,
            repeat: Infinity,
            repeatDelay: 3
        }
    }
}


const Loading = ({...props}) => {
    return (
        <motion.div {...props} className='relative w-full min-h-screen flex justify-center items-center'>
            {/* <motion.div className='w-20 h-20 bg-white'
                // initial={{ scale: 0 }}
                // animate={{ scale: 1 }}
                variants={svgVariants}
                // transition={{
                //   type: "spring",
                //   stiffness: 2600,
                //   damping: 260
                // }}
                // animate={{
                //   scale: [1, 2, 2, 1, 1],
                //   rotate: [0, 0, 270, 270, 0],
                //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                // }}
            >
            </motion.div> */}
            <motion.svg variants={svgVariants} initial="start" animate="finished" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} className="w-24 h-24 stroke-primary-500">
                <motion.path  variants={pathVariants} initial="start" animate="finished" d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></motion.path>
                <ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse><ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse>
                <path d="M8 16h8v2H8z"></path>
            </motion.svg>

        </motion.div>
    );
}

export default Loading;
