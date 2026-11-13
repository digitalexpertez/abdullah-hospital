/* oxlint-disable react/only-export-components */
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { PageHero } from "@/components/inner-page-ui";
import { galleryImages } from "@/data/inner-pages";

export const metadata = {
  title: "Gallery | Abdullah Hospital",
  description:
    "Browse illustrative image placeholders for Abdullah Hospital. Replace with approved hospital photographs before launch.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="A look around"
        title={
          <>
            Spaces for care, <em>connection and comfort.</em>
          </>
        }
        description="Explore a visual gallery framework for the hospital. These images are representative stock placeholders, not actual Abdullah Hospital photographs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="inner-section">
        <div className="site-shell">
          <div className="gallery-page-heading">
            <div>
              <span className="eyebrow">
                <span />
                Gallery preview
              </span>
              <h2>
                Discover the <em>details.</em>
              </h2>
              <p>
                Filter by category, then select an image to view it larger.
                Approved hospital photography can be added in the gallery data
                file.
              </p>
            </div>
            <span className="gallery-count-note">
              {galleryImages.length} illustrative placeholders
            </span>
          </div>
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>
    </main>
  );
}
