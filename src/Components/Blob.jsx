import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Blob = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const svgPosInfo = ref.current?.getBoundingClientRect();
  const svgLeft = svgPosInfo?.left ?? 0;
  const svgTop = svgPosInfo?.top ?? 0;
  const svgWidth = svgPosInfo?.width ?? 0;
  const svgHeight = svgPosInfo?.height ?? 0;

  const svgCenterX = svgLeft + svgWidth / 2;
  const svgCenterY = svgTop + svgHeight / 2;

  const deltaX = mouse.x - svgCenterX;
  const deltaY = mouse.y - svgCenterY;

  const mouseMoveHandler = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div className='flex justify-center items-center h-screen  top-0 left-0 w-full z-0 overflow-x-hidden'>
      <div ref={ref} className='blur-[80px]'>
        <motion.div
          animate={{
            translateX: deltaX * 0.1,
            translateY: deltaY * 0.1,
          }}
          transition={{
            ease: 'easeOut',
          }}
        >
          <svg id='visual' viewBox='0 0 900 900' width='400' height='400'>
            <g transform='translate(438.0412544889116 514.5293211898284)'>
              <motion.path
                d='M278.3 -286.1C344.5 -212.1 370.7 -106.1 360.2 -10.5C349.8 85.1 302.5 170.2 236.3 213.3C170.2 256.5 85.1 257.8 5.7 252.1C-73.8 246.4 -147.5 233.9 -216 190.7C-284.5 147.5 -347.8 73.8 -337.4 10.4C-327 -53 -243.1 -106.1 -174.6 -180.1C-106.1 -254.1 -53 -349 26.5 -375.6C106.1 -402.1 212.1 -360.1 278.3 -286.1'
                fill='#32323c'
                animate={{
                  d: [
                    'M278.3 -286.1C344.5 -212.1 370.7 -106.1 360.2 -10.5C349.8 85.1 302.5 170.2 236.3 213.3C170.2 256.5 85.1 257.8 5.7 252.1C-73.8 246.4 -147.5 233.9 -216 190.7C-284.5 147.5 -347.8 73.8 -337.4 10.4C-327 -53 -243.1 -106.1 -174.6 -180.1C-106.1 -254.1 -53 -349 26.5 -375.6C106.1 -402.1 212.1 -360.1 278.3 -286.1',
                    'M161.1 -165.6C216.1 -106.1 273 -53 282 9C290.9 70.9 251.9 141.9 196.9 184.7C141.9 227.6 70.9 242.3 -6.5 248.8C-83.9 255.2 -167.8 253.5 -223 210.7C-278.2 167.8 -304.6 83.9 -315.7 -11.1C-326.7 -106.1 -322.5 -212.1 -267.3 -271.6C-212.1 -331.1 -106.1 -344.1 -26.5 -317.6C53 -291 106.1 -225.1 161.1 -165.6',
                    'M212.9 -225.7C262.2 -163.6 279.1 -81.8 272.1 -7.1C265 67.6 234 135.3 184.6 210.3C135.3 285.3 67.6 367.6 7.3 360.3C-53 353 -106.1 256.1 -164.4 181.1C-222.7 106.1 -286.4 53 -301 -14.6C-315.6 -82.3 -281.2 -164.5 -222.9 -226.7C-164.5 -288.9 -82.3 -330.9 -0.2 -330.7C81.8 -330.5 163.6 -287.9 212.9 -225.7',
                    'M185 -160.1C259.6 -110.3 353.8 -55.2 352.8 -1.1C351.7 53 255.4 106.1 180.7 146.9C106.1 187.7 53 216.4 -5.2 221.6C-63.4 226.7 -126.8 208.5 -201.8 167.6C-276.8 126.8 -363.4 63.4 -374.4 -11C-385.3 -85.3 -320.6 -170.6 -245.6 -220.5C-170.6 -270.3 -85.3 -284.7 -15.1 -269.6C55.2 -254.5 110.3 -210 185 -160.1',
                  ],
                  fill: ['#32323c'],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  duration: 5,
                }}
              ></motion.path>
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Blob;