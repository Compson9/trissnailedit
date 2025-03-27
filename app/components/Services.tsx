"use client";

import { useState } from "react";
import { InstagramIcon, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

export default function Services() {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    thumbnail: string;
    title: string;
  } | null>(null);

  const services = [
    {
      title: "Nails",
      description: "Professional nail care services including manicures, nail art, and extensions",
      price: "Starting from $30",
      image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Pedicure",
      description: "Luxurious pedicure treatments for ultimate foot care and relaxation",
      price: "Starting from $45",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Mink Lash Extensions",
      description: "Premium mink lash extensions for a glamorous, natural look",
      price: "Starting from $120",
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Ombré Brows",
      description: "Professional ombré brow treatment for perfect, natural-looking brows",
      price: "Starting from $250",
      image: "https://images.unsplash.com/photo-1594076482669-876a7ee8e1c0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Piercing",
      description: "Safe and professional piercing services with premium jewelry options",
      price: "Starting from $35",
      image: "https://images.unsplash.com/photo-1595575593724-88f3b03b1dba?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const videos = [
    {
      id: "1",
      thumbnail: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
      title: "Nail Art Design"
    },
    {
      id: "2",
      thumbnail: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop",
      title: "Pedicure Process"
    },
    {
      id: "3",
      thumbnail: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop",
      title: "Lash Extension Application"
    },
    {
      id: "4",
      thumbnail: "https://images.unsplash.com/photo-1594076482669-876a7ee8e1c0?q=80&w=800&auto=format&fit=crop",
      title: "Ombré Brows Process"
    }
  ];

  return (
    <main className="bg-white">
      {/* Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pt-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-red-500 font-semibold">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105
                  ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white hover:bg-red-50 border-red-500 text-red-500"
              onClick={() => window.open('https://instagram.com', '_blank')}
            >
              <InstagramIcon className="mr-2 h-5 w-5" />
              View More on Instagram
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video">
            {/* Replace with actual video player component */}
            <div className="w-full h-full bg-black flex items-center justify-center text-white">
              <p>Video Player Placeholder for: {selectedVideo?.title}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}