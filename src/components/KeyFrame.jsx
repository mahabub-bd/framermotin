import { motion } from "framer-motion";

export default function KeyFrame() {
  return (
    <motion.div
      className="bg-blue-500 border w-32 h-32 m-5"
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 90, 180, 270, 0],
      }}
    />
  );
}
