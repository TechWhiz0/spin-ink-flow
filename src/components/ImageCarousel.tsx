const ImageCarousel = () => {
  return (
    <section className="w-full bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
          Project Gallery
        </h3>

        <div className="space-y-8">
          {/* Row 1: 1.png and 3.png side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src="/1.png"
                alt="Gallery image 1"
                className="w-full h-[480px] md:h-[700px] object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src="/3.png"
                alt="Gallery image 3"
                className="w-full h-[480px] md:h-[700px] object-cover"
              />
            </div>
          </div>

          {/* Row 2: 2.png full width */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src="/2.png"
              alt="Gallery image 2"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;




