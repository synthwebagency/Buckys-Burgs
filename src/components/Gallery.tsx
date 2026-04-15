/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Gallery() {
  const labels = ["Sizzling Grills", "Fresh Brioche", "Thick Cut Bacon", "Austin Nights", "Join the Club"];
  
  return (
    <section id="gallery" className="bg-tx-blue border-t-4 border-tx-ink h-44 flex overflow-hidden">
      {labels.map((label, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`flex-1 border-r-2 border-white/20 flex items-center justify-center text-tx-white font-display text-[10px] md:text-xs uppercase tracking-widest text-center px-4 relative group cursor-pointer ${index === labels.length - 1 ? 'bg-tx-red' : ''}`}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          <span className="relative z-10">{label}</span>
        </motion.div>
      ))}
    </section>
  );
}
