/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-tx-white min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-6xl md:text-8xl uppercase mb-8 text-tx-red">
              Find <span className="text-tx-blue">Us</span>
            </h2>
            <div className="w-24 h-2 bg-tx-red mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="bg-tx-red p-6 text-tx-white">
                <MapPin size={32} />
              </div>
              <h4 className="font-display text-2xl uppercase text-tx-ink">Location</h4>
              <p className="font-sans text-lg text-gray-600">123 Cowboy Way<br />Austin, TX 78701</p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="bg-tx-red p-6 text-tx-white">
                <Phone size={32} />
              </div>
              <h4 className="font-display text-2xl uppercase text-tx-ink">Call Bucky</h4>
              <p className="font-sans text-lg text-gray-600">(512) 555-BURG</p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="bg-tx-red p-6 text-tx-white">
                <Clock size={32} />
              </div>
              <h4 className="font-display text-2xl uppercase text-tx-ink">Hours</h4>
              <p className="font-sans text-sm text-gray-600 uppercase tracking-widest">
                Mon-Thu: 11am - 10pm<br />
                Fri-Sun: 11am - Midnight
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
