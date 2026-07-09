import { GalleryWheel } from '@/components/gallery/GalleryWheel';
import type { WorkCategory } from '@/data/works';
import { worksByCategory } from '@/data/works';

type WorksGalleryProps = {
  category: WorkCategory;
};

export function WorksGallery({ category }: WorksGalleryProps) {
  const items = worksByCategory[category];

  return (
    <div className="portfolio-item-container" id="home">
      <div className={`section filter-grid-gallery gallery-wheel`} id={category}>
        <GalleryWheel>
          <div className="gallery">
            {items.map((item, index) => (
              <div className="image-wrapper" key={`${item.src}-${index}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="photo"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : undefined}
                />
              </div>
            ))}
          </div>
        </GalleryWheel>
      </div>
    </div>
  );
}
