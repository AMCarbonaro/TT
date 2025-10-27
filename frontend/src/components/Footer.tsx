import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-bg-tertiary mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Teen Tiny
            </h3>
            <p className="text-text-secondary mb-4 max-w-md">
              Curated content collections with professional streaming quality and exclusive performer profiles.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/step-brother-adin" className="text-text-secondary hover:text-text-primary transition-colors">
                  Step Brother Adin
                </Link>
              </li>
              <li>
                <Link href="/collections/teen-blowjobs" className="text-text-secondary hover:text-text-primary transition-colors">
                  Teen Blowjobs
                </Link>
              </li>
              <li>
                <Link href="/collections/adin-goes-to-japan" className="text-text-secondary hover:text-text-primary transition-colors">
                  Adin Goes To Japan
                </Link>
              </li>
              <li>
                <Link href="/collections/tiny-ass-worship" className="text-text-secondary hover:text-text-primary transition-colors">
                  Tiny Ass Worship
                </Link>
              </li>
              <li>
                <Link href="/collections/lets-rape-him" className="text-text-secondary hover:text-text-primary transition-colors">
                  Lets Rape Him
                </Link>
              </li>
              <li>
                <Link href="/collections/kawaii-kink" className="text-text-secondary hover:text-text-primary transition-colors">
                  Kawaii Kink
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/2257" className="text-text-secondary hover:text-text-primary transition-colors">
                  2257 Statement
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-text-secondary hover:text-text-primary transition-colors">
                  DMCA Notice
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-text-secondary hover:text-text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-text-secondary hover:text-text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bg-tertiary mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-tertiary text-sm">
            © 2024 Teen Tiny. All rights reserved.
          </p>
          <p className="text-text-tertiary text-sm mt-2 md:mt-0">
            You must be 18+ to access this content
          </p>
        </div>
      </div>
    </footer>
  );
}
