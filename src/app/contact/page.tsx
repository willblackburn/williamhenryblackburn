import { FadeIn } from '@/components/motion/FadeIn';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'Contact | William Henry Blackburn Archive Enquiries',
  description:
    'Enquiries about William Henry Blackburn artworks, prints, archive access, and licensing. Contact the family archive for originals, reproductions, and research about the British artist and Art Director.',
  path: '/contact',
  ogTitle: 'Contact | William Henry Blackburn Archive Enquiries',
});

export default function ContactPage() {
  return (
    <div className="portfolio-item-container" id="home">
      <div className="section project-about img-contact" id="about">
        <FadeIn className="biography-b">
          <h2>Enquiries</h2>

          <div className="contact-form">
            <form
              name="contact"
              method="POST"
              action="/contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don&apos;t fill this out:
                  <input name="bot-field" type="text" />
                </label>
              </p>
              <p>
                <label className="contact-label">
                  Your Name:
                  <input className="contact-input" type="text" name="name" />
                </label>
              </p>
              <p>
                <label className="contact-label">
                  Your Email:
                  <input className="contact-input" type="email" name="email" />
                </label>
              </p>
              <p>
                <label className="contact-label">
                  Message:
                  <textarea
                    className="contact-input contact-textarea"
                    name="message"
                    rows={6}
                  />
                </label>
              </p>
              <p>
                <button className="contact-send" type="submit">
                  Send
                </button>
              </p>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
