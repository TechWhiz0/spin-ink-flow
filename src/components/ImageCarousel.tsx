import { useState } from "react";
import { IoClose } from "react-icons/io5";

const ImageCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="w-full bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Project Gallery
          </h3>

          <div className="space-y-8">
            {/* Row 1: 1.png and 3.png side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="overflow-hidden rounded-2xl border border-border bg-card cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal("/1.png")}
              >
                <img
                  src="/1.png"
                  alt="Gallery image 1"
                  className="w-full h-[480px] md:h-[700px] object-cover"
                />
              </div>
              <div 
                className="overflow-hidden rounded-2xl border border-border bg-card cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal("/3.png")}
              >
                <img
                  src="/3.png"
                  alt="Gallery image 3"
                  className="w-full h-[480px] md:h-[700px] object-cover"
                />
              </div>
            </div>

            {/* Row 2: 2.png full width */}
            <div 
              className="overflow-hidden rounded-2xl border border-border bg-card cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal("/2.png")}
            >
              <img
                src="/2.png"
                alt="Gallery image 2"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <IoClose className="w-10 h-10" />
            </button>
            <img
              src={selectedImage}
              alt="Full size gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;




