export default function AccessibilityStatementPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          Accessibility Statement
        </h1>
        
        <div className="prose prose-lg max-w-none text-text-secondary">
          <p className="text-center mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Our Commitment to Accessibility</h2>
            <p className="mb-4">
              Teen Tiny is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards to ensure we provide equal access to all users.
            </p>
            <p className="mb-4">
              We believe that everyone should have the ability to access our content and services, 
              regardless of their abilities or the technology they use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Standards We Follow</h2>
            <p className="mb-4">
              We strive to conform to the following accessibility standards:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines 2.1 Level AA</li>
              <li><strong>ADA Compliance:</strong> Americans with Disabilities Act Title III requirements</li>
              <li><strong>Section 508:</strong> Rehabilitation Act Section 508 standards</li>
              <li><strong>EU Accessibility Act:</strong> European Union accessibility requirements</li>
            </ul>
            <p className="mb-4">
              These standards help ensure that our website is accessible to users with various disabilities, 
              including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Accessibility Features</h2>
            <p className="mb-4">
              Our website includes the following accessibility features:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Visual Accessibility</h3>
                <ul className="list-disc pl-6 text-sm">
                  <li>High contrast color schemes</li>
                  <li>Scalable text and images</li>
                  <li>Alternative text for images</li>
                  <li>Clear typography and spacing</li>
                </ul>
              </div>
              
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Navigation</h3>
                <ul className="list-disc pl-6 text-sm">
                  <li>Keyboard navigation support</li>
                  <li>Skip links for main content</li>
                  <li>Logical tab order</li>
                  <li>Focus indicators</li>
                </ul>
              </div>
              
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Content Structure</h3>
                <ul className="list-disc pl-6 text-sm">
                  <li>Semantic HTML markup</li>
                  <li>Proper heading hierarchy</li>
                  <li>Descriptive link text</li>
                  <li>Form labels and instructions</li>
                </ul>
              </div>
              
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Assistive Technology</h3>
                <ul className="list-disc pl-6 text-sm">
                  <li>Screen reader compatibility</li>
                  <li>ARIA labels and roles</li>
                  <li>Voice recognition support</li>
                  <li>Switch navigation support</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Known Limitations</h2>
            <p className="mb-4">
              While we strive to make our website fully accessible, we acknowledge that some areas 
              may have limitations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Third-party content:</strong> Some embedded content from third parties may not be fully accessible</li>
              <li><strong>Video content:</strong> Some videos may lack captions or audio descriptions</li>
              <li><strong>Complex interactions:</strong> Some advanced features may require mouse interaction</li>
              <li><strong>Legacy content:</strong> Older content may not meet current accessibility standards</li>
            </ul>
            <p className="mb-4">
              We are working to address these limitations and improve accessibility across all areas of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Assistive Technologies</h2>
            <p className="mb-4">
              Our website is designed to work with various assistive technologies:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Screen Readers:</strong> NVDA, JAWS, VoiceOver, TalkBack</li>
              <li><strong>Voice Recognition:</strong> Dragon NaturallySpeaking, Windows Speech Recognition</li>
              <li><strong>Switch Navigation:</strong> Switch Access, Switch Control</li>
              <li><strong>Magnification:</strong> ZoomText, Windows Magnifier, browser zoom</li>
              <li><strong>High Contrast:</strong> Windows High Contrast mode, browser extensions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Testing and Evaluation</h2>
            <p className="mb-4">
              We regularly test our website for accessibility compliance:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Automated Testing:</strong> Regular scans using accessibility testing tools</li>
              <li><strong>Manual Testing:</strong> Human evaluation of accessibility features</li>
              <li><strong>User Testing:</strong> Testing with users who have disabilities</li>
              <li><strong>Assistive Technology Testing:</strong> Testing with various assistive devices</li>
            </ul>
            <p className="mb-4">
              We use multiple testing methods to ensure comprehensive accessibility coverage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Feedback and Reporting Issues</h2>
            <p className="mb-4">
              We welcome feedback on the accessibility of our website. If you encounter any 
              accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="bg-bg-secondary p-6 rounded-lg mb-4">
              <p className="text-lg font-semibold text-text-primary mb-2">Accessibility Contact</p>
              <p className="text-text-secondary mb-1">Email: accessibility@teentiny.com</p>
              <p className="text-text-secondary mb-1">Response Time: Within 48 hours</p>
              <p className="text-text-secondary">Available: Monday - Friday, 9:00 AM - 5:00 PM [Time Zone - To Be Updated]</p>
            </div>
            <p className="mb-4">
              When reporting accessibility issues, please include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Description of the accessibility barrier</li>
              <li>URL of the page where the issue occurs</li>
              <li>Assistive technology being used (if applicable)</li>
              <li>Browser and operating system information</li>
              <li>Suggested solution (if you have one)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Ongoing Improvements</h2>
            <p className="mb-4">
              We are committed to continuous improvement of our website's accessibility:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Regular Audits:</strong> Quarterly accessibility assessments</li>
              <li><strong>User Feedback:</strong> Incorporating feedback from users with disabilities</li>
              <li><strong>Technology Updates:</strong> Staying current with accessibility standards</li>
              <li><strong>Staff Training:</strong> Ongoing education on accessibility best practices</li>
              <li><strong>Development Process:</strong> Integrating accessibility into all new features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Alternative Access Methods</h2>
            <p className="mb-4">
              If you encounter accessibility barriers on our website, we offer alternative ways to access our content:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Customer Support:</strong> Contact our support team for assistance</li>
              <li><strong>Phone Support:</strong> [Phone number - To Be Updated]</li>
              <li><strong>Email Support:</strong> support@teentiny.com</li>
              <li><strong>Alternative Formats:</strong> We can provide content in alternative formats when requested</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Legal Compliance</h2>
            <p className="mb-4">
              Our accessibility efforts are designed to comply with applicable laws and regulations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Americans with Disabilities Act (ADA):</strong> Title III requirements for public accommodations</li>
              <li><strong>Section 508:</strong> Rehabilitation Act requirements for federal accessibility</li>
              <li><strong>EU Accessibility Act:</strong> European Union accessibility requirements</li>
              <li><strong>WCAG 2.1:</strong> International web accessibility guidelines</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Contact Information</h2>
            <p className="mb-4">
              For accessibility-related inquiries:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Accessibility Officer:</strong> accessibility@teentiny.com</li>
              <li><strong>General Support:</strong> support@teentiny.com</li>
              <li><strong>Legal Department:</strong> legal@teentiny.com</li>
            </ul>
            <p className="mb-4">
              We are committed to responding to accessibility concerns promptly and working 
              with users to find solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Updates to This Statement</h2>
            <p className="mb-4">
              We will update this accessibility statement as we make improvements to our website 
              and as accessibility standards evolve. The last updated date at the top of this 
              page indicates when this statement was last revised.
            </p>
            <p className="mb-4">
              We encourage users to check this page regularly for updates on our accessibility efforts.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
