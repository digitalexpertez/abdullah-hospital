"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/data/inner-pages";

const categories = [
  "All",
  "Infrastructure",
  "Rooms & wards",
  "Equipment",
  "Departments",
  "Facilities",
];

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const visibleImages = images.filter(
    (image) => category === "All" || image.category === category,
  );
  const activeImage = activeIndex === null ? null : visibleImages[activeIndex];

  const closeLightbox = () => {
    setActiveIndex(null);
    previouslyFocusedRef.current?.focus();
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? null : (index + 1) % visibleImages.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null
            ? null
            : (index - 1 + visibleImages.length) % visibleImages.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, visibleImages.length]);

  const openImage = (index: number) => {
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    setActiveIndex(index);
  };

  return (
    <>
      <div className="gallery-filters" aria-label="Filter gallery images">
        {categories.map((item) => (
          <button
            type="button"
            key={item}
            className={`filter-chip${category === item ? " is-active" : ""}`}
            aria-pressed={category === item}
            onClick={() => {
              setCategory(item);
              setActiveIndex(null);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="inner-gallery-grid">
        {visibleImages.map((image, index) => (
          <motion.button
            type="button"
            className="inner-gallery-item"
            key={image.src}
            onClick={() => openImage(index)}
            aria-label={`Open image: ${image.caption}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.42,
              delay: reduceMotion ? 0 : (index % 4) * 0.06,
            }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
          >
            <span className="inner-gallery-image">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 650px) 100vw, (max-width: 980px) 50vw, 33vw"
              />
              <span className="gallery-zoom" aria-hidden="true">
                View image
              </span>
            </span>
            <span className="inner-gallery-caption">
              <strong>{image.caption}</strong>
              <small>{image.category}</small>
            </span>
          </motion.button>
        ))}
      </div>
      <p className="editorial-note">
        These are representative stock image placeholders, not photographs of
        Abdullah Hospital. Replace them with approved hospital images before
        launch.
      </p>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeLightbox();
            }}
          >
            <div className="lightbox-panel">
              <button
                ref={closeButtonRef}
                className="lightbox-close"
                type="button"
                onClick={closeLightbox}
                aria-label="Close image viewer"
              >
                <X size={21} />
              </button>
              {visibleImages.length > 1 && (
                <>
                  <button
                    className="lightbox-arrow lightbox-previous"
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      setActiveIndex((index) =>
                        index === null
                          ? null
                          : (index - 1 + visibleImages.length) %
                            visibleImages.length,
                      )
                    }
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="lightbox-arrow lightbox-next"
                    type="button"
                    aria-label="Next image"
                    onClick={() =>
                      setActiveIndex((index) =>
                        index === null
                          ? null
                          : (index + 1) % visibleImages.length,
                      )
                    }
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              <div className="lightbox-image-wrap">
                <AnimatePresence mode="wait">
                  <motion.div
                    className="lightbox-image"
                    key={activeImage.src}
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2 }}
                  >
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      sizes="90vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="lightbox-caption">
                {activeImage.caption} <span>·</span> {activeIndex! + 1} /{" "}
                {visibleImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
