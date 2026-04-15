/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Hero() {
  const featuredBurgers = [
    {
      name: "The Lone Star Bacon",
      price: "14.99",
      image: "/images/hero-lone-star-bacon.png"
    },
    {
      name: "Austin Heat",
      price: "13.99",
      image: "/images/hero-austin-heat.png"
    },
    {
      name: "The Cowboy Classic",
      price: "11.99",
      image: "/images/hero-cowboy-classic.png"
    },
    {
      name: "Ranch Hand BBQ",
      price: "16.99",
      image: "/images/hero-ranch-hand-bbq.png"
    }
  ];

  return (
    <section id="home" className="pt-32 pb-20 bg-tx-cream min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12 border-b-8 border-tx-ink pb-6"
        >
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl uppercase text-tx-red tracking-tighter">
            Bigger In Texas
          </h1>
        </motion.div>

        {/* 4 Big Burger Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {featuredBurgers.map((burger, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-visible"
            >
              <div className="aspect-square overflow-visible flex items-center justify-center">
                <img 
                  src={burger.image} 
                  alt={burger.name} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-8 text-center">
                <h3 className="font-display text-3xl md:text-4xl uppercase text-tx-ink group-hover:text-tx-red transition-colors">
                  {burger.name}
                </h3>
                <span className="block font-display text-2xl md:text-3xl text-tx-red mt-2">
                  {burger.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
