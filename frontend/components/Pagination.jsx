import { motion } from "framer-motion";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {/* Previous Page Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-[#27272c]/50 text-white/30 cursor-not-allowed" : "bg-[#27272c] text-white/60 hover:bg-accent/20"}`}
      >
        Previous
      </motion.button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-accent text-white" : "bg-[#27272c] text-white/60 hover:bg-accent/20"}`}
        >
          {index + 1}
        </motion.button>
      ))}

      {/* Next Page Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-[#27272c]/50 text-white/30 cursor-not-allowed" : "bg-[#27272c] text-white/60 hover:bg-accent/20"}`}
      >
        Next
      </motion.button>
    </div>
  );
};

export default Pagination;
