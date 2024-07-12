export default function Carousel({ images }) {
  // Duplicate images to create a continuous effect
  const doubledImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden h-[40rem] w-full">
      <div className="flex whitespace-nowrap animate-moveAcrossScreen">
        {doubledImages.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-[60rem] h-[40rem] mx-2">
            <img src={img.src} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
