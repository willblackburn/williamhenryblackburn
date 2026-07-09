export type WorkCategory = 'photography' | 'paintings' | 'sketches' | 'architecture';

export type WorkItem = {
  src: string;
  alt: string;
};

export type WorksByCategory = Record<WorkCategory, WorkItem[]>;

export const worksByCategory: WorksByCategory = {
  photography: [
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/girl-laying-on-grass.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/girl-on-boat-2.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/girl-laying-on-concrete.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/four-women-in-nepal.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-dancer-show.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/girl-ballet.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/india-woman-photoshoot-1.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/girl-ballet-by-window-1.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-woman-wwith-satchel.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/girl-ballet-by-window-2.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/hindu-faces-4.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/woman-stocking-2.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/girl-ballet-by-window-3.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/girl-ballet-by-window-5.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/soldier-helping-children.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/stockings-photoshoot-1.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/lady-in-stockings-1.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/boats-in-river.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/woman-sewing.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-woman-sitting.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-woman-sitting-2.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-woman-sitting-3.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-woman-smiling.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/child-poverty-india.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-man-pose.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/three-women-sitting.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-woman-dancing-1.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/indian-rail-workshop.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/two-people-india.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/hindu-faces-6.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/scenic-island.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/india-dancer.webp', alt: '' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/photography/hindu-faces-7.webp', alt: '' },
  ],
  paintings: [
    { src: '/img/paintings/whb-001.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-002.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-003.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-004.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-005.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-006.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-007.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-008.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-009.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-010.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-011.webp', alt: 'indian girl lying on grass photography' },
    { src: '/img/paintings/whb-012.webp', alt: 'indian girl lying on grass photography' },
  ],
  sketches: [
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/soldiers-fighting.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/three-barns.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/ras-dance-ranjana.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/khanduk.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/vile-park.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/stahankas.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/animal-in-field.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/dhanlaxmi-sleeping.webp', alt: 'indian girl lying on grass photography' },
  ],
  architecture: [
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/tower-a.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/tower-b.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/tower-c.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/tower-d.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/hallway-a.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/boac-room-a.webp', alt: 'indian girl lying on grass photography' },
    { src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/boac-room-b.webp', alt: 'indian girl lying on grass photography' },
  ],
};
