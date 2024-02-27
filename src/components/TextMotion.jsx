import { motion } from "framer-motion";

export default function TextMotion() {
  const message = "We Are Enjoying Reactive Accelator Course";
  const wordArray = message.split("");
  console.log(wordArray);
  return (
    <div className="text-2xl m-4 text-center">
      {wordArray.map((word, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index / 20 }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
