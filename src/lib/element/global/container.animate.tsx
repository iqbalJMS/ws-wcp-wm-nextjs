'use client';

import { motion } from 'framer-motion';
import React from 'react';

type T_AnimationContainerProps = {
  children: React.ReactNode;
};

const ContainerAnimation: React.FC<T_AnimationContainerProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ContainerAnimation;
