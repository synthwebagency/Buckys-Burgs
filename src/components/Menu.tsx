/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const menuData = {
  BURGERS: [
    {
      name: "The Lone Star Bacon",
      price: "14.99",
      description: "Double Texas beef stacked with triple smoked bacon, sharp cheddar, grilled onions, and Bucky’s signature BBQ sauce. Big, bold, and built like Texas itself."
    },
    {
      name: "Austin Heat",
      price: "13.99",
      description: "Juicy beef patty with jalapeño bacon, melted pepper jack, habanero aioli, and crispy onions. A fiery kick with every bite."
    },
    {
      name: "The Cowboy Classic",
      price: "11.99",
      description: "Straightforward and timeless — single beef patty, thick-cut bacon, fresh lettuce, tomato, pickles, and classic mustard. No nonsense, just flavor."
    },
    {
      name: "Ranch Hand BBQ",
      price: "16.99",
      description: "Loaded with a beef patty, slow-cooked pulled pork, crispy bacon, onion rings, and smoky ranch dressing. Heavy, messy, and worth it."
    }
  ],
  SIDES: [
    { name: "Fries", price: "3.99", description: "Golden, crispy, and salted just right. The perfect partner." },
    { name: "Onion Rings", price: "4.99", description: "Thick-cut, crunchy, and full of flavor with every bite." },
    { name: "Mashed Potatoes", price: "4.49", description: "Creamy, buttery, and smooth with a rich homestyle taste." }
  ],
  DRINKS: [
    { name: "Coke", price: "2.49", description: "Ice-cold and refreshing." },
    { name: "Sprite", price: "2.49", description: "Light, crisp, and clean." },
    { name: "Pepsi", price: "2.49", description: "Bold cola flavor, served chilled." },
    { name: "Water", price: "1.49", description: "Pure and simple." },
    { name: "Lone Star Beer", price: "5.99", description: "Classic Texas brew, cold and smooth." }
  ],
  DESSERTS: [
    { name: "Pecan Pie", price: "5.99", description: "Sweet, nutty, and rich with a golden crust." },
    { name: "Peach Cobbler", price: "5.49", description: "Warm peaches baked with a soft, buttery topping." },
    { name: "Texas Sheet Cake", price: "5.99", description: "Moist chocolate cake with a smooth, rich frosting." }
  ]
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-tx-white">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl uppercase text-tx-ink mb-4"
          >
            BUCKY’S BURGS — <span className="text-tx-red">MENU</span>
          </motion.h2>
          <div className="w-32 h-2 bg-tx-red mx-auto"></div>
        </div>

        <div className="space-y-24">
          {Object.entries(menuData).map(([category, items], catIndex) => (
            <div key={category}>
              <motion.h3 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl uppercase text-tx-blue border-b-4 border-tx-blue pb-2 mb-12 inline-block"
              >
                {category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col group"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-display text-2xl uppercase text-tx-ink group-hover:text-tx-red transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-1 border-b-2 border-dotted border-tx-ink/20 mx-4 h-0 self-center"></div>
                      <span className="font-display text-2xl text-tx-red">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-tx-cream border-4 border-tx-ink text-center">
          <h3 className="font-display text-3xl uppercase text-tx-red mb-4">Ready to Eat?</h3>
          <p className="font-serif italic text-xl text-tx-blue mb-8">Swing by or order for pickup. We're waiting for ya.</p>
          <button className="bg-tx-red text-tx-white px-12 py-5 font-display text-xl uppercase tracking-widest hover:bg-tx-blue transition-all duration-300">
            Order Pickup Now
          </button>
        </div>
      </div>
    </section>
  );
}
