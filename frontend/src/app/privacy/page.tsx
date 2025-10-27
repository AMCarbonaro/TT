export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-text-secondary">
          <p className="text-center mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our service, or contact us for support.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Account information (email address, username)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication preferences</li>
              <li>Usage data and analytics</li>
              <li>Age verification data (minimal, deleted within 24 hours)</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Legal Basis for Processing (GDPR)</h2>
            <p className="mb-4">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consent:</strong> Explicit consent for adult content access and marketing communications</li>
              <li><strong>Contract:</strong> Processing necessary for subscription service performance</li>
              <li><strong>Legitimate Interest:</strong> Service improvement, security, and fraud prevention</li>
              <li><strong>Legal Obligation:</strong> Age verification and record-keeping requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Verify age and ensure compliance with legal requirements</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Data Retention Policies</h2>
            <p className="mb-4">
              We retain your personal information for the following periods:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Age verification data:</strong> Deleted within 24 hours of confirmation</li>
              <li><strong>User account data:</strong> Duration of subscription + 30 days</li>
              <li><strong>Payment information:</strong> PCI DSS compliant retention (minimized)</li>
              <li><strong>Communication logs:</strong> 12 months maximum</li>
              <li><strong>Marketing opt-ins:</strong> Until user opts out or 3 years inactive</li>
              <li><strong>Legal compliance records:</strong> As required by law (up to 7 years)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Your Rights (GDPR & CCPA)</h2>
            <p className="mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Right of Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              <li><strong>Right to Non-Discrimination:</strong> Exercise rights without discrimination (CCPA)</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, contact us at privacy@teentiny.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential Cookies:</strong> Required for site functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand site usage</li>
              <li><strong>Preference Cookies:</strong> Remember your settings</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
            </ul>
            <p className="mb-4">
              You can manage cookie preferences through your browser settings or our cookie consent banner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">International Data Transfers</h2>
            <p className="mb-4">
              Your data may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Standard Contractual Clauses (SCCs) for EU transfers</li>
              <li>Adequacy decisions where applicable</li>
              <li>Appropriate technical and organizational measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who assist in operations (under strict confidentiality)</li>
              <li>Payment processors (PCI DSS compliant)</li>
              <li>Legal compliance when required by law</li>
              <li>Business transfers (merger, acquisition, etc.)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption at rest and in transit (AES-256, TLS 1.3)</li>
              <li>Access controls and authentication</li>
              <li>Regular security audits and monitoring</li>
              <li>Secure data centers and infrastructure</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Children's Privacy</h2>
            <p className="mb-4">
              Our service is intended for adults only (18+). We do not knowingly collect personal information 
              from individuals under 18 years of age. If we become aware that we have collected personal 
              information from a child under 18, we will delete such information immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              Your continued use of our service after any modifications constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Privacy Officer:</strong> privacy@teentiny.com</li>
              <li><strong>General Support:</strong> support@teentiny.com</li>
              <li><strong>Data Protection Officer:</strong> dpo@teentiny.com</li>
            </ul>
            <p className="mb-4">
              You also have the right to lodge a complaint with your local data protection authority if you 
              believe we have not handled your personal data in accordance with applicable law.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
