import { motion } from "framer-motion";

export const MyComponent = () => (
  <motion.div
    className="bg-red-500 w-40 h-40 m-5 "
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }}
  />
);
