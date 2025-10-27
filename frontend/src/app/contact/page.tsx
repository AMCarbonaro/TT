export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          Contact Us
        </h1>
        
        <div className="prose prose-lg max-w-none text-text-secondary">
          <p className="text-center mb-8">
            We're here to help! Choose the appropriate contact method for your inquiry.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">General Support</h2>
            <div className="bg-bg-secondary p-6 rounded-lg mb-4">
              <p className="text-lg font-semibold text-text-primary mb-2">Customer Support</p>
              <p className="text-text-secondary mb-1">Email: support@teentiny.com</p>
              <p className="text-text-secondary mb-1">Response Time: Within 24 hours</p>
              <p className="text-text-secondary">Available: Monday - Friday, 9:00 AM - 6:00 PM [Time Zone - To Be Updated]</p>
            </div>
            <p className="mb-4">
              For general questions about our service, account issues, billing inquiries, 
              or technical support, please contact our customer support team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Legal Inquiries</h2>
            <div className="bg-bg-secondary p-6 rounded-lg mb-4">
              <p className="text-lg font-semibold text-text-primary mb-2">Legal Department</p>
              <p className="text-text-secondary mb-1">Email: legal@teentiny.com</p>
              <p className="text-text-secondary mb-1">Response Time: Within 48 hours</p>
              <p className="text-text-secondary">Available: Monday - Friday, 9:00 AM - 5:00 PM [Time Zone - To Be Updated]</p>
            </div>
            <p className="mb-4">
              For legal matters, compliance questions, terms of service inquiries, 
              or other legal concerns, please contact our legal department.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Copyright & DMCA</h2>
            <div className="bg-bg-secondary p-6 rounded-lg mb-4">
              <p className="text-lg font-semibold text-text-primary mb-2">DMCA Agent</p>
              <p className="text-text-secondary mb-1">Email: copyright@teentiny.com</p>
              <p className="text-text-secondary mb-1">Response Time: Within 24 hours</p>
              <p className="text-text-secondary">Available: Monday - Friday, 9:00 AM - 5:00 PM [Time Zone - To Be Updated]</p>
            </div>
            <p className="mb-4">
              For copyright infringement claims, DMCA takedown notices, or intellectual 
              property concerns, please contact our DMCA agent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Privacy & Data Protection</h2>
            <div className="bg-bg-secondary p-6 rounded-lg mb-4">
              <p className="text-lg font-semibold text-text-primary mb-2">Privacy Officer</p>
              <p className="text-text-secondary mb-1">Email: privacy@teentiny.com</p>
              <p className="text-text-secondary mb-1">Response Time: Within 48 hours</p>
              <p className="text-text-secondary">Available: Monday - Friday, 9:00 AM - 5:00 PM [Time Zone - To Be Updated]</p>
            </div>
            <p className="mb-4">
              For privacy policy questions, data protection requests, GDPR inquiries, 
              or personal data concerns, please contact our privacy officer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Business Information</h2>
            <div className="bg-bg-secondary p-6 rounded-lg mb-4">
              <p className="text-lg font-semibold text-text-primary mb-2">Teen Tiny</p>
              <p className="text-text-secondary mb-1">Physical Address: [To Be Updated]</p>
              <p className="text-text-secondary mb-1">City, State ZIP: [To Be Updated]</p>
              <p className="text-text-secondary mb-1">Phone: [To Be Updated]</p>
              <p className="text-text-secondary mb-1">Business Hours: Monday - Friday, 9:00 AM - 6:00 PM [Time Zone - To Be Updated]</p>
              <p className="text-text-secondary">Website: https://teentiny.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Specialized Contacts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Data Protection Officer</h3>
                <p className="text-text-secondary mb-1">Email: dpo@teentiny.com</p>
                <p className="text-text-secondary text-sm">GDPR compliance and data protection matters</p>
              </div>
              
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Terms & Conditions</h3>
                <p className="text-text-secondary mb-1">Email: terms@teentiny.com</p>
                <p className="text-text-secondary text-sm">Terms of service and user agreement questions</p>
              </div>
              
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Cookie Policy</h3>
                <p className="text-text-secondary mb-1">Email: cookies@teentiny.com</p>
                <p className="text-text-secondary text-sm">Cookie preferences and tracking inquiries</p>
              </div>
              
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Accessibility</h3>
                <p className="text-text-secondary mb-1">Email: accessibility@teentiny.com</p>
                <p className="text-text-secondary text-sm">Accessibility concerns and accommodations</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Response Times</h2>
            <p className="mb-4">
              We are committed to responding to your inquiries promptly:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>General Support:</strong> Within 24 hours</li>
              <li><strong>DMCA Notices:</strong> Within 24 hours</li>
              <li><strong>Legal Inquiries:</strong> Within 48 hours</li>
              <li><strong>Privacy Requests:</strong> Within 48 hours</li>
              <li><strong>Data Protection Requests:</strong> Within 30 days (as required by GDPR)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Before You Contact Us</h2>
            <p className="mb-4">
              To help us assist you more effectively, please:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Include your account email address (if applicable)</li>
              <li>Provide specific details about your inquiry</li>
              <li>Include any relevant screenshots or error messages</li>
              <li>Be clear about what resolution you're seeking</li>
              <li>Use the appropriate contact method for your inquiry type</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Emergency Contact</h2>
            <p className="mb-4">
              For urgent security matters or immediate concerns:
            </p>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
              <p className="text-red-800 font-semibold mb-1">Security Issues</p>
              <p className="text-red-700 mb-1">Email: security@teentiny.com</p>
              <p className="text-red-700 text-sm">For immediate security concerns or data breaches</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Feedback</h2>
            <p className="mb-4">
              We value your feedback and suggestions for improving our service. 
              Please send your comments to feedback@teentiny.com.
            </p>
            <p className="mb-4">
              Your input helps us provide a better experience for all users.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
