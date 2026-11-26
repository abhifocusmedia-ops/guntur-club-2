
import Image from "next/image";

interface PhotoProps {
  src: string | null;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

export default function Photo({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 55vw",
  quality = 95,
}: PhotoProps) {
  return (
    <div className={`card-image ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className="image-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-10 text-center bg-gradient-to-br from-[#31241c] to-[#140d0c]">
          <span className="eyebrow">
            Official facility image to be added
          </span>
        </div>
      )}
    </div>
  );
}
