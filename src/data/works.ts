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
    {
      src: '/img/paintings/whb-001.webp',
      alt: 'William Henry Blackburn painting of a figure dressing beside a bed with blue bedding',
    },
    {
      src: '/img/paintings/whb-002.webp',
      alt: "Meena Engrossed, 1970 pastel and charcoal drawing by William Henry Blackburn of a woman reading on a sofa",
    },
    {
      src: '/img/paintings/whb-003.webp',
      alt: 'William Henry Blackburn studio painting of a reclining nude figure seen from behind beside an easel',
    },
    {
      src: '/img/paintings/whb-004.webp',
      alt: 'William Henry Blackburn interior painting of a figure in a turquoise robe seated at a table',
    },
    {
      src: '/img/paintings/whb-005.webp',
      alt: 'William Henry Blackburn 1988 painting of a nude woman adjusting a stocking beside a vanity mirror',
    },
    {
      src: '/img/paintings/whb-006.webp',
      alt: 'William Henry Blackburn painting of two women at a counter, one in a blue striped shirt and one in a blue hat',
    },
    {
      src: '/img/paintings/whb-007.webp',
      alt: 'William Henry Blackburn dressing-room painting of women preparing among costume racks',
    },
    {
      src: '/img/paintings/whb-008.webp',
      alt: 'William Henry Blackburn garden painting of an elderly woman in blue with two cream-coloured dogs',
    },
    {
      src: '/img/paintings/whb-009.webp',
      alt: "Bharatnatyam dancers, 1953 charcoal and pastel drawing by William Henry Blackburn",
    },
    {
      src: '/img/paintings/whb-010.webp',
      alt: 'William Henry Blackburn painting of a woman seen from behind arranging her long dark hair',
    },
    {
      src: '/img/paintings/whb-011.webp',
      alt: 'William Henry Blackburn impressionist painting of ballerinas rehearsing in a sunlit studio',
    },
    {
      src: '/img/paintings/whb-012.webp',
      alt: 'William Henry Blackburn oil portrait of a woman with curly reddish-blonde hair in a dark vest',
    },
    {
      src: '/img/paintings/whb-013.webp',
      alt: 'William Henry Blackburn painting of young dancers in pink costumes in a blue-lit rehearsal room',
    },
  ],
  sketches: [
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/soldiers-fighting.webp',
      alt: 'William Henry Blackburn ink drawing of a uniformed figure tending to a child, signed W. Blackburn',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/three-barns.webp',
      alt: 'William Henry Blackburn black-and-white print of rural barns and outbuildings beneath a dark hillside',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/ras-dance-ranjana.webp',
      alt: 'Ras Dance Ranjana, William Henry Blackburn ink drawing of two Indian dancers against mountain peaks',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/khanduk.webp',
      alt: 'Khanduk Khel, William Henry Blackburn ink drawing of two figures in traditional Indian dress playing a ball game',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/vile-park.webp',
      alt: 'Vile Parle, William Henry Blackburn ink sketch of three women in saris seated beside a Titli Sabun poster',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/stahankas.webp',
      alt: 'Sthanakas, William Henry Blackburn ink drawing of three Indian classical dancers including Manipuri costumes',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/animal-in-field.webp',
      alt: 'William Henry Blackburn charcoal drawing of a dark animal behind a stone wall in a rocky rural landscape',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/sketches/dhanlaxmi-sleeping.webp',
      alt: 'William Henry Blackburn line drawing of Dhanlaxmi reclining in glasses with hands folded on her chest',
    },
  ],
  architecture: [
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/tower-a.webp',
      alt: 'William Henry Blackburn exhibition pavilion model with a lattice tower, curved roofs and zigzag display panels',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/tower-b.webp',
      alt: 'William Henry Blackburn modernist pavilion model with a tall lattice tower and slender supporting poles',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/tower-c.webp',
      alt: 'William Henry Blackburn exhibition model with a central lattice mast and perimeter banner poles',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/tower-d.webp',
      alt: 'William Henry Blackburn circular pavilion model with a tapering lattice tower and surrounding display masts',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/hallway-a.webp',
      alt: 'William Henry Blackburn architectural scale model of a long modernist interior with open roof beams',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/boac-room-a.webp',
      alt: 'B.O.A.C. exhibition stand model by William Henry Blackburn with Speedbird branding and brochure displays',
    },
    {
      src: 'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/architectural design/boac-room-b.webp',
      alt: 'B.O.A.C. exhibition booth model showing Speedbird routes graphics and aircraft-fin wall panels',
    },
  ],
};
