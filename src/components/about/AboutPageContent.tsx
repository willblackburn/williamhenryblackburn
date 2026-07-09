import Link from 'next/link';

import { HoverHeading } from '@/components/motion/HoverHeading';
import { clientAccountPeriods } from '@/data/clientAccounts';

export function AboutPageContent() {
  return (
    <div className='portfolio-item-container'>
      {/* Section About — img4 */}
      <div className='section project-about img4 is-bg-visible' id='about'>
        <div className='biography'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h1'>
              Artist, Draughtsman &amp; Art Director
            </HoverHeading>
          </div>
          <p className='about-info'>
            William Henry Blackburn (1918–1995) was a British artist,
            draughtsman, calligrapher, exhibition designer and art director
            whose career moved between fine art, wartime service, India and
            commercial design. Husband to Dhanlaxmi Mehta and father to Munindra
            Nigel Blackburn, he built a working life that joined artistic
            sensitivity with technical precision.
          </p>
          <p className='about-info'>
            His archive reveals a rare breadth of practice: paintings, drawings,
            calligraphy, photography, exhibition models, advertising work and
            public display design. He was not a painter alone, but a
            multidisciplinary visual artist whose work united studio art,
            lettering, draughtsmanship and professional design.
          </p>
        </div>
      </div>

      {/* Section About — img6 */}
      <div className='section project-about img6' id='keymer'>
        <div className='biography-a'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h2'>
              D.J. Keymer, Bombay &amp; Calcutta
            </HoverHeading>
          </div>
          <p className='about-info'>
            William joined D.J. Keymer &amp; Co. Ltd. as Art Director in Bombay
            before transferring to the Calcutta head office, working within one
            of India&apos;s most important mid-century advertising and design
            environments. The agency&apos;s studios paired experienced art
            direction with younger visualisers finding their feet—some of whom
            would later become central to Indian design and film culture.
          </p>
          <p className='about-info'>
            The Calcutta circle was historically significant. William worked
            there with figures of comparable standing, including{' '}
            <a
              href='https://en.wikipedia.org/wiki/Annada_Munsi'
              target='_blank'
              rel='noopener noreferrer'>
              Annada Munshi
            </a>
            ,{' '}
            <a
              href='https://en.wikipedia.org/wiki/Signet_Press'
              target='_blank'
              rel='noopener noreferrer'>
              D.K. Gupta
            </a>{' '}
            and{' '}
            <a
              href='https://en.wikipedia.org/wiki/Satyajit_Ray'
              target='_blank'
              rel='noopener noreferrer'>
              Satyajit Ray
            </a>
            —names that would come to define Indian advertising, publishing,
            typography and film culture.
          </p>
          <p className='about-info'>
            Much of his Keymer work has remained in the family archive for more
            than thirty years and has never been publicly shown, even though it
            belongs to the same wider design world. The agency later became
            part of the lineage that led to{' '}
            <a
              href='https://www.ogilvy.com/'
              target='_blank'
              rel='noopener noreferrer'>
              Ogilvy Benson &amp; Mather
            </a>{' '}
            in India.
          </p>
          <p className='about-info'>
            <Link href='/archive/dj-keymer'>D.J. Keymer archive page</Link>
          </p>

          <div
            className='about-archive'
            aria-label='Archive material from D.J. Keymer'>
            <div className='about-archive-grid'>
              <div className='image-wrapper'>
                <img
                  src='/img/dj-keymer-staff.png'
                  alt='D.J. Keymer staff photograph, Calcutta office'
                  className='photo'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section About — img7 */}
      <div className='section project-about img7' id='commercial'>
        <div className='biography'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h3'>
              Commercial Design, Public Exhibitions &amp; Client Accounts
            </HoverHeading>
          </div>

          {clientAccountPeriods.map((period) => (
            <div className='keymer-period' key={period.heading}>
              <h3 className='about-period-heading'>{period.heading}</h3>
              <ul className='about-account-list'>
                {period.accounts.map((account) => (
                  <li key={account}>{account}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section About — img1 */}
      <div className='section project-about img1' id='about'>
        <div className='biography-a'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h2'>Paintings &amp; Works on Paper</HoverHeading>
          </div>
          <p className='about-info'>
            Alongside his commercial and public design work, William maintained
            a substantial body of paintings, drawings and studies across several
            decades. His subjects range from Indian figures, landscapes and
            scenes of daily life to quieter works made at home in England.
          </p>
          <p className='about-info'>
            The paintings show the same disciplined eye found in his
            draughtsmanship and lettering: structure, movement, balance and
            atmosphere. Much of this work has remained within the family
            collection since his death, making the archive an important
            rediscovery rather than a familiar public record.
          </p>
        </div>
      </div>

      {/* Section About — img8 */}
      <div className='section project-about img8' id='calligraphy'>
        <div className='biography'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h2'>
              Calligraphy, Lettering &amp; Inscription Design
            </HoverHeading>
          </div>
          <p className='about-info'>
            William&apos;s work in calligraphy and lettering formed an important
            part of his wider design practice. Alongside painting, exhibition
            work and commercial art direction, he produced inscription designs,
            decorative lettering and carefully structured written layouts that
            show the same precision found throughout his draughtsmanship.
          </p>
          <p className='about-info'>
            A surviving design reference sheet shows him setting out
            requirements for commissioned inscription work in great detail,
            including copy length, historical information to be supplied,
            preferred colour combinations and alternative geometric formats in
            which lettering could be arranged. His work included formal
            calligraphic layouts, inscription planning and decorative
            letterforms intended for presentation pieces and commemorative use.
          </p>
          <p className='about-info'>
            His calligraphy and lettering were widely respected within his
            professional circle. In 1947, after being admitted as an Associate
            of the Incorporated Institute of British Decorators, William was
            invited to design a bookplate for the Institute&apos;s rebuilt
            library in London. Across these works, his lettering brought
            together an artistic eye with structure, balance, order and design
            craftsmanship.
          </p>
        </div>
      </div>

      {/* Section About — img0 */}
      <div className='section project-about img0' id='about'>
        <div className='biography'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h2'>
              Detached Royal Engineers in India
            </HoverHeading>
          </div>
          <p className='about-info'>
            William&apos;s wartime service began in Britain with the King&apos;s
            Royal Rifle Corps and the Royal Engineers, before his skills as an
            artist and draughtsman led to more specialist military work. He
            conducted a School of Art for the Services under South East Army
            Command at Oxford, where drawing, mapping, model-making, instruction
            and technical visualisation had direct wartime value.
          </p>
          <p className='about-info'>
            From 1942 to 1945 he served in India as detached Royal Engineers,
            attached to the Government of India&apos;s Information and
            Broadcasting Department during the wider Burma campaign against
            Japan. His India years sat within the command world of Field Marshal{' '}
            <a
              href='https://en.wikipedia.org/wiki/Claude_Auchinleck'
              target='_blank'
              rel='noopener noreferrer'>
              Sir Claude John Eyre Auchinleck
            </a>
            , whose signed photograph, dated 21 March 1944, remained in
            William&apos;s possession.
          </p>
          <p className='about-info'>
            As a Royal Engineer, William also worked on bridge-building. That
            engineering side of his service belongs naturally to the India/Burma
            wartime world of roads, river crossings, military movement,
            logistics and visual documentation. His work brought together
            practical engineering, draughtsmanship, public information and the
            discipline of wartime communication.
          </p>
          <div
            className='about-archive'
            aria-label="Archive material from William's Royal Engineers service in India">
            <div className='about-archive-grid'>
              <div className='image-wrapper'>
                <img
                  src='/img/auchinleck.webp'
                  alt='Signed photograph of Field Marshal Sir Claude Auchinleck, dated 21 March 1944'
                  className='photo'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section About — img3 */}
      <div className='section project-about img3' id='about'>
        <div className='bio-image'></div>
        <div className='biography-c'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h2'>Wartime Exhibition Design</HoverHeading>
          </div>
          <p className='about-info'>
            In India, William&apos;s wartime design work moved beyond ordinary
            military duty into official publicity, recruitment, exhibition and
            public-information projects. Attached to the Government of
            India&apos;s Information and Broadcasting Department, he worked on
            visual material and exhibitions in New Delhi, Lahore and across
            India, using design to explain, promote and support the wider war
            effort.
          </p>
          <p className='about-info'>
            William worked alongside{' '}
            <a
              href='https://artuk.org/discover/artists/baines-harry-19101995'
              target='_blank'
              rel='noopener noreferrer'>
              Frederick Harry &ldquo;Harry&rdquo; Baines
            </a>{' '}
            in this specialist exhibition and information world. Both men were
            Royal Engineers artist-draughtsmen connected to government publicity
            and display work in India. Their work brought together drawing,
            murals, lettering, industrial subjects, exhibition stands,
            pavilions, public displays and visual promotion.
          </p>
          <p className='about-info'>
            This was also the context in which William produced studies of
            Indian architecture, sculpture and cave temples, including work
            connected to Cave 16, the Kailasa Temple at Ellora. Surviving
            archive references link these drawings to the wider Hyderabad
            archaeological world of Ellora documentation, placing them within a
            serious artistic, historical and institutional setting rather than
            as casual travel sketches.
          </p>
          <p className='about-info'>
            Their connection continued after India. In September 1946, William
            and Baines exhibited together at India House, Aldwych, in a Royal
            India Society exhibition of drawings from India, including studies
            from the Ellora Caves. The exhibition, opened by Sir William Barton,
            presented their Indian work in an official cultural setting and
            confirmed the importance of their shared artistic, documentary and
            exhibition practice.
          </p>
        </div>
      </div>

      {/* Section About — img2 */}
      <div className='section project-about img2' id='about'>
        <div className='biography-b'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h2'>Love For India</HoverHeading>
          </div>
          <p className='about-info'>
            India became one of the defining chapters of William&apos;s life,
            both personally and artistically. He married Dhanlaxmi Mehta, a
            mathematician and professor from a distinguished Indian family, and
            together they later moved back to England, settling in Wimbledon,
            London, where they raised their son, Munindra Nigel Blackburn, known
            as Nigel.
          </p>
          <p className='about-info'>
            Nigel grew up within a family shaped by education, service and
            medicine. He trained at King&apos;s College Hospital and went on to
            become a substantive orthopaedic consultant, continuing a wider
            family tradition of professional discipline, public service and
            medical life.
          </p>
          <p className='about-info'>
            William&apos;s Indian years were lived against the intensity of
            wartime and postwar change. He was there during the Bengal Famine of
            1943, the Burma campaign, the final years of British India, and the
            country&apos;s movement toward independence. For an already
            established artist, India offered not only subject matter, but a
            world of human observation, visual richness, professional
            opportunity and lasting personal connection.
          </p>
          <p className='about-info'>
            His work from this period reflects that depth. India appears in his
            paintings, drawings, photographs, cave studies, exhibition designs
            and studies of daily life — not as distant travel imagery, but as
            part of the lived world that shaped his family, his career and his
            imagination. From Ellora and Aurangabad to Bombay, Calcutta, New
            Delhi and Lahore, India remained central to the story of
            William&apos;s life. When Dhanlaxmi died in the early 1990s, he
            ensured her ashes were spread in the River Ganges.
          </p>
        </div>
      </div>

      {/* Section About — img5 */}
      <div className='section project-about img5' id='about'>
        <div className='biography'>
          <div className='about-sticky-heading'>
            <HoverHeading as='h2'>Photographer</HoverHeading>
          </div>
          <p className='about-info'>
            Photography sat naturally alongside William&apos;s drawing and
            painting. He used the camera as a visual notebook: gathering
            reference, studying gesture and form, recording people, places,
            rivers, boats, streets and everyday life around him.
          </p>
          <p className='about-info'>
            Many of the photographs from his India years stand as works in their
            own right. They show the same attention to composition that shaped
            his paintings, exhibition design and art direction. Seen together,
            the photographs help reveal how he looked at the world before
            translating it into drawing, paint, lettering or design.
          </p>
        </div>
      </div>
    </div>
  );
}
