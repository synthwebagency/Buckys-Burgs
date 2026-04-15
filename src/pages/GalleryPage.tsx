import Gallery from "../components/Gallery";
import { motion } from "motion/react";

export default function GalleryPage() {
  return (
    <div className="pt-20 min-h-screen bg-tx-cream">
      <div className="py-20 text-center bg-tx-blue text-tx-white">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-display text-6xl md:text-9xl uppercase"
        >
          The <span className="text-tx-red">Gallery</span>
        </motion.h1>
      </div>
      
      <Gallery />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/images/gallery-texas-sunset-vibes.jpg",
              "/images/gallery-grill-master-action.jpg",
              "/images/gallery-diner-booth-vintage.jpg",
              "/images/gallery-bucky-fans-eating.jpg",
              "/images/gallery-bacon-stack-detail.jpg",
              "/images/gallery-austin-street-view.jpg"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group overflow-hidden border-4 border-tx-ink aspect-square"
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-tx-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
