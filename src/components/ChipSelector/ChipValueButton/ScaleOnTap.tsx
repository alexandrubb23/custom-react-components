import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const ScaleOnTap = ({
  children,
  scale = 0.85,
}: PropsWithChildren<{ scale?: number }>) => (
  <motion.div whileTap={{ scale }}>{children}</motion.div>
);

export default ScaleOnTap;
