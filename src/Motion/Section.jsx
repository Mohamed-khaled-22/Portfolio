import React from "react";
import { motion } from "motion/react";

export default function Section({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.05 }}
            className="p-10 my-10 bg-white rounded-2xl shadow-lg"
        >
            {children}
        </motion.div>
    );
}