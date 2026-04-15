/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tx-ink text-tx-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-display text-4xl uppercase tracking-tighter text-tx-red">
              Bucky's Burgs
            </span>
            <p className="font-display text-[10px] uppercase tracking-[0.4em] mt-2 opacity-60">
              The Taste of Texas Since 1974
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-tx-red transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-tx-red transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-tx-red transition-colors"><Twitter size={24} /></a>
          </div>

          <div className="text-center md:text-right">
            <p className="font-sans text-sm opacity-60">
              © 2024 Bucky's Burgs. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
