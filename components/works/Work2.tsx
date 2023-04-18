import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

export const Work2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Work 2</h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          quaerat beatae et voluptatem aliquam eligendi doloremque, ut
          dignissimos. Quaerat, totam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iste, accusantium eius ducimus excepturi eligendi
          nesciunt modi quibusdam sit? Saepe, modi!
        </li>
      </ul>
    </motion.div>
  );
};
