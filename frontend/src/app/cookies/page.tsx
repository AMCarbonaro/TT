export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          Cookie Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-text-secondary">
          <p className="text-center mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              enabling certain functionality.
            </p>
            <p className="mb-4">
              Cookies can be "session" cookies (deleted when you close your browser) or "persistent" 
              cookies (remain on your device for a set period).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Essential Cookies</h3>
              <p className="mb-2">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Authentication:</strong> Remember your login status</li>
                <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
                <li><strong>Age Verification:</strong> Remember your age verification status</li>
                <li><strong>Session Management:</strong> Maintain your session while browsing</li>
              </ul>
              <p className="text-sm text-text-tertiary">
                <strong>Lifetime:</strong> Session or up to 30 days
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Analytics Cookies</h3>
              <p className="mb-2">
                These cookies help us understand how visitors use our website.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Usage Statistics:</strong> Track page views and user behavior</li>
                <li><strong>Performance Monitoring:</strong> Identify and fix technical issues</li>
                <li><strong>Content Optimization:</strong> Improve user experience</li>
              </ul>
              <p className="text-sm text-text-tertiary">
                <strong>Lifetime:</strong> Up to 2 years
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Preference Cookies</h3>
              <p className="mb-2">
                These cookies remember your choices and preferences.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Language Settings:</strong> Remember your preferred language</li>
                <li><strong>Display Preferences:</strong> Remember your viewing preferences</li>
                <li><strong>Cookie Consent:</strong> Remember your cookie choices</li>
              </ul>
              <p className="text-sm text-text-tertiary">
                <strong>Lifetime:</strong> Up to 1 year
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Marketing Cookies</h3>
              <p className="mb-2">
                These cookies are used to deliver relevant advertisements and track marketing effectiveness.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Advertising:</strong> Show relevant ads based on your interests</li>
                <li><strong>Retargeting:</strong> Remind you of our service on other websites</li>
                <li><strong>Conversion Tracking:</strong> Measure marketing campaign effectiveness</li>
              </ul>
              <p className="text-sm text-text-tertiary">
                <strong>Lifetime:</strong> Up to 2 years
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              We may use third-party services that set their own cookies:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Payment Processors:</strong> Secure payment processing</li>
              <li><strong>Analytics Services:</strong> Website usage analysis</li>
              <li><strong>Content Delivery:</strong> Faster content loading</li>
              <li><strong>Social Media:</strong> Social sharing functionality</li>
            </ul>
            <p className="mb-4">
              These third parties have their own privacy policies and cookie practices. 
              We recommend reviewing their policies for more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to Manage Cookies</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Cookie Consent Banner</h3>
              <p className="mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your preferences</li>
                <li>Change your settings at any time</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Browser Settings</h3>
              <p className="mb-4">
                You can also manage cookies through your browser settings:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Cookie Preference Center</h3>
              <p className="mb-4">
                You can update your cookie preferences at any time by visiting our 
                <a href="/cookie-preferences" className="text-accent-primary hover:underline"> Cookie Preference Center</a>.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Impact of Disabling Cookies</h2>
            <p className="mb-4">
              If you disable cookies, some features of our website may not work properly:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You may need to log in repeatedly</li>
              <li>Your preferences won't be remembered</li>
              <li>Some content may not load correctly</li>
              <li>Age verification may be required on each visit</li>
              <li>Personalized features may not be available</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Cookie Consent Withdrawal</h2>
            <p className="mb-4">
              You can withdraw your consent for non-essential cookies at any time by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Using our cookie preference center</li>
              <li>Adjusting your browser settings</li>
              <li>Clearing your browser's cookie data</li>
              <li>Contacting us at privacy@teentiny.com</li>
            </ul>
            <p className="mb-4">
              Withdrawing consent will not affect the lawfulness of processing based on consent 
              before its withdrawal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any 
              material changes by posting the updated policy on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Privacy Officer:</strong> privacy@teentiny.com</li>
              <li><strong>General Support:</strong> support@teentiny.com</li>
              <li><strong>Cookie Questions:</strong> cookies@teentiny.com</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
