"use client"
import { useState, useRef, useEffect } from "react";
import { InstagramIcon, PlayCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    thumbnail: string;
    title: string;
    videoUrl?: string;
  } | null>(null);
  
  const [isHovering, setIsHovering] = useState<string | null>(null);

  // Service cards with modern design
  const services = [
    {
      title: "Nails",
      description: "Professional nail care services including manicures, nail art, and extensions",
      price: "Starting from ₵ 100",
      image: "/nails.jpg"
    },
    {
      title: "Pedicure",
      description: "Luxurious pedicure treatments for ultimate foot care and relaxation",
      price: "Starting from  ₵ 100",
      image: "/pedicure.jpg"
    },
    {
      title: "Mink Lash Extensions",
      description: "Premium mink lash extensions for a glamorous, natural look",
      price: "Starting from ₵ 100",
      image: "/mint.jpg"
    },
    {
      title: "Ombré Brows",
      description: "Professional ombré brow treatment for perfect, natural-looking brows",
      price: "Starting from ₵ 100",
      image: "/brows.jpg"
    },
    {
      title: "Piercing",
      description: "Safe and professional piercing services with premium jewelry options",
      price: "Starting from ₵ 100",
      image: "/piercing.jpg"
    }
  ];

  // Video gallery with improved bento grid layout
  const videos = [
    {
        id: "3",
        thumbnail: "/lash.jpg",
        title: "Lash Extension Application",
        videoUrl: "/lashVid.mp4"
      },
    {
      id: "1",
      thumbnail: "/thumb1.jpg",
      title: "Nails",
      videoUrl: "/vid1.mp4"
    },
    {
      id: "2",
      thumbnail: "/mint.jpg",
      title: "Eye lash fixing",
      videoUrl: "/mintVid.mp4"
    },
    
    {
      id: "4",
      thumbnail: "lash2.jpg",
      title: "Eye lash hybrid process",
      videoUrl: "/lash2Vid.mp4"
    },
    {
      id: "5",
      thumbnail: "/nails.jpg",
      title: "Nails fixing",
      videoUrl: "/nails.mp4"
    },
    {
      id: "6",
      thumbnail: "/hand.jpg",
      title: "Nail Art Highlights",
      videoUrl: "/hand.mp4"
    }
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset video when closed
  useEffect(() => {
    if (!selectedVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [selectedVideo]);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <main className="bg-white overflow-hidden">
      {/* Services Section with Modern Cards */}
      <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-gray-100"
          >
            Premium Beauty Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Indulge in our premium beauty treatments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div
                  style={{ backgroundImage: `url(${service.image})` }}
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-block py-1 px-2.5 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full mb-3">
                    {service.price}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-end items-center">
                    <Link
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://www.picktime.com/009fd765-a783-4506-a80c-114fd53e8ebd"
                    >
                    <Button
                    variant="outline"
                    className="text-xs tracking-wider uppercase font-semibold border-gray-300 text-gray-800 hover:bg-gray-100"
                  >
                    Book now
                  </Button>
                    </Link>  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Gallery Section with Improved Bento Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-gray-200"
            >
              Watch & Learn
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              id="about"
              className="mt-6 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl"
            >
              Our Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
            >
              Explore our stunning portfolio of beauty transformations
            </motion.p>
          </div>

          {/* Enhanced Bento Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:-translate-y-2 ${
                  index === 0 
                    ? 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-2' 
                    : index === 3 
                      ? 'sm:col-span-2 lg:col-span-1' 
                      : index === 5 
                        ? 'lg:col-span-2'
                        : ''
                }`}
                onClick={() => setSelectedVideo(video)}
                onMouseEnter={() => setIsHovering(video.id)}
                onMouseLeave={() => setIsHovering(null)}
                style={{ 
                  height: index === 0 ? 'auto' : 'auto',
                  minHeight: '220px'
                }}
              >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <div
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: isHovering === video.id ? 1 : 0.8, 
                    opacity: isHovering === video.id ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center z-30"
                >
                  <div className="bg-white/30 backdrop-blur-md rounded-full p-3">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white hover:bg-gray-50 cursor-pointer border-gray-300 text-gray-800 hover:border-gray-400 transition-all duration-300"
              onClick={() => window.open('https://www.instagram.com/triss_nailed_it?igsh=MXg3NWwwbDFqaHB2YQ==', '_blank')}
            >
              <InstagramIcon className="mr-2 h-5 w-5" />
              View More on Instagram
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Video Dialog/Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black overflow-hidden rounded-2xl border-0">
          <div className="relative aspect-video">
            {selectedVideo && (
              <>
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 rounded-full transition-colors duration-200 z-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
