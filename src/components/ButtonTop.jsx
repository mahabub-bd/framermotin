import { motion } from "framer-motion";

export default function ButtonTop() {
  return (
    <div className="m-5 flex flex-col w-20 gap-2 ">
      <motion.button
        className="bg-black text-white p-1 border rounded-md"
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Tap Me
      </motion.button>
      <motion.button
        className="bg-black text-white p-1 border rounded-md"
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
      >
        Tap Me
      </motion.button>
    </div>
  );
}
