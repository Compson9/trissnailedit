import React from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="w-full bg-black py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-white">Trissnailedit</h3>
            <p className="text-gray-400 max-w-xs">
              Elevating your natural beauty with premium services and expert care.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Contact Us</h3>
            <p className="text-gray-400">Kasoa</p>
            <p className="text-gray-400">Near The Great Lamptey Mills Senior High School</p>
            <p className="text-gray-400">+233 0203963693</p>
          </div>
          
          {/* Hours Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Hours</h3>
            <div className="text-gray-400">
              <p>Monday - Friday: 9am - 8pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: 11am - 5pm</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="pt-4">
              <h3 className="font-bold text-lg mb-3 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-300" />
                </a>
                <a 
                  href="https://www.tiktok.com/@triss_nailed_it?_t=ZM-8v3vHrCgjaA&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="TikTok"
                >
                  {/* Using FontAwesome TikTok SVG */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512" 
                    className="h-5 w-5 text-gray-300"
                    fill="currentColor"
                  >
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/546411192" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Trissnailedit. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
