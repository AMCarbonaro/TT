export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none text-text-secondary">
          <p className="text-center mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Age Restrictions</h2>
            <p className="mb-4">
              By accessing this website, you represent and warrant that you are at least 18 years of age 
              (or the age of majority in your jurisdiction) and have the legal capacity to enter into this agreement.
            </p>
            <p className="mb-4">
              This website contains sexually explicit adult content intended solely for viewers 18 years of age 
              or older. If you are not 18 years old or are offended by adult content, you must leave this website immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Service Description</h2>
            <p className="mb-4">
              Teen Tiny provides access to curated adult content collections through a subscription-based service. 
              Our service includes video streaming, performer profiles, and related content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Account Registration and Security</h2>
            <p className="mb-4">
              To access our service, you must create an account and provide accurate, complete information. 
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your account information remains current</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Acceptable Use Policy</h2>
            <p className="mb-4">
              You agree to use our service only for lawful purposes and in accordance with these terms. 
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the service for any unlawful purpose or in violation of any applicable laws</li>
              <li>Download, copy, distribute, or reproduce any content without authorization</li>
              <li>Reverse engineer, hack, or attempt to circumvent any security measures</li>
              <li>Create multiple accounts to circumvent restrictions or obtain unauthorized access</li>
              <li>Use automated systems or bots to access content</li>
              <li>Share your account credentials with others</li>
              <li>Upload or transmit any malicious code or harmful content</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Content Licensing and Ownership</h2>
            <p className="mb-4">
              All content available through our service is licensed, not sold. Content providers retain 
              ownership of their materials. Your subscription grants you a limited, non-transferable, 
              non-exclusive license to view content for personal, non-commercial use only.
            </p>
            <p className="mb-4">
              You may NOT:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Download, copy, or distribute any content</li>
              <li>Use content for commercial purposes</li>
              <li>Remove copyright notices or watermarks</li>
              <li>Create derivative works from our content</li>
              <li>Transfer your viewing rights to others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Subscription Terms</h2>
            <p className="mb-4">
              <strong>Billing:</strong> Subscriptions are billed in advance on a recurring basis (monthly or annually).
            </p>
            <p className="mb-4">
              <strong>Automatic Renewal:</strong> Your subscription will automatically renew unless cancelled 
              before the next billing period.
            </p>
            <p className="mb-4">
              <strong>Cancellation:</strong> You may cancel your subscription at any time through your account 
              settings. Cancellation takes effect at the end of your current billing period.
            </p>
            <p className="mb-4">
              <strong>Refunds:</strong> Refunds are generally not provided for unused portions of subscriptions, 
              except as required by law or at our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Payment Terms</h2>
            <p className="mb-4">
              We accept various payment methods through secure, PCI-compliant payment processors. 
              All prices are in USD unless otherwise specified.
            </p>
            <p className="mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate payment information</li>
              <li>Pay all charges incurred under your account</li>
              <li>Notify us of any changes to your payment method</li>
              <li>Be responsible for any applicable taxes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Geographic Restrictions</h2>
            <p className="mb-4">
              Our service may not be available in all jurisdictions. We reserve the right to restrict 
              access based on your location. You are responsible for compliance with local laws and regulations.
            </p>
            <p className="mb-4">
              We may detect and block VPNs, proxies, or other methods used to circumvent geographic restrictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Account Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice, for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violation of these Terms of Service</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Abuse of our service or other users</li>
            </ul>
            <p className="mb-4">
              Upon termination, your right to use the service ceases immediately, and we may delete 
              your account and data in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
              Our service is provided "as is" and "as available" without warranties of any kind, 
              either express or implied. We disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
              <li>Uninterrupted or error-free service</li>
              <li>Security or freedom from viruses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, 
              data, or use, arising from your use of our service.
            </p>
            <p className="mb-4">
              Our total liability shall not exceed the amount you paid for the service in the 12 months 
              preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless Teen Tiny and its affiliates from any claims, 
              damages, or expenses arising from your use of the service or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Dispute Resolution and Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of [Jurisdiction to be specified]. Any disputes 
              arising from these terms or your use of our service shall be resolved through binding 
              arbitration in accordance with the rules of [Arbitration organization to be specified].
            </p>
            <p className="mb-4">
              You waive any right to participate in class action lawsuits or class-wide arbitration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Modifications to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will notify users of material 
              changes by posting the updated terms on our website. Your continued use of the service 
              after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Legal Inquiries:</strong> legal@teentiny.com</li>
              <li><strong>General Support:</strong> support@teentiny.com</li>
              <li><strong>Terms Questions:</strong> terms@teentiny.com</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
