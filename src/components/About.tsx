/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-tx-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/about-bucky-shack.jpg" 
              alt="Bucky's Original Shack" 
              className="border-[10px] border-tx-white shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-tx-red p-8 shadow-2xl transform rotate-3">
              <p className="font-display text-4xl uppercase leading-none text-tx-white">Since '74</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-6xl md:text-8xl uppercase mb-8 leading-tight text-tx-red">
              Texas <br />
              <span className="text-tx-blue">Original</span>
            </h2>
            
            <div className="space-y-6 font-sans text-lg md:text-xl text-tx-ink leading-relaxed">
              <p>
                Bucky started with a small trailer and a big dream in the heart of the Texas desert. 
                He knew three things: beef should be thick, bacon should be smoked, and hospitality should be as big as the sky.
              </p>
              <p className="font-serif italic text-tx-blue text-2xl">
                "No shortcuts. No gimmicks. Just Bucky's."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
