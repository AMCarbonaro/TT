export default function DMCAPolicyPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          DMCA Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-text-secondary">
          <p className="text-center mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">DMCA Agent Information</h2>
            <p className="mb-4">
              Teen Tiny respects the intellectual property rights of others and complies with the 
              Digital Millennium Copyright Act (DMCA). We have designated the following agent to 
              receive notifications of claimed copyright infringement:
            </p>
            <div className="bg-bg-secondary p-6 rounded-lg mb-4">
              <p className="text-lg font-semibold text-text-primary mb-2">DMCA Copyright Agent</p>
              <p className="text-text-secondary mb-1">Teen Tiny</p>
              <p className="text-text-secondary mb-1">[Physical Address - To Be Updated]</p>
              <p className="text-text-secondary mb-1">[City, State ZIP - To Be Updated]</p>
              <p className="text-text-secondary mb-1">Phone: [To Be Updated]</p>
              <p className="text-text-secondary">Email: copyright@teentiny.com</p>
            </div>
            <p className="mb-4">
              <strong>Note:</strong> DMCA agent registration with the U.S. Copyright Office is pending. 
              This information will be updated upon completion of registration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to File a DMCA Takedown Notice</h2>
            <p className="mb-4">
              If you believe that your copyrighted work has been used in a way that constitutes 
              copyright infringement, you may file a DMCA takedown notice with our designated agent.
            </p>
            <p className="mb-4">
              To be effective, your notice must include the following information:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Physical or electronic signature</strong> of the copyright owner or authorized agent</li>
              <li><strong>Identification of the copyrighted work</strong> claimed to have been infringed</li>
              <li><strong>Identification of the infringing material</strong> and its location on our website (specific URLs)</li>
              <li><strong>Contact information</strong> for the complaining party (address, phone, email)</li>
              <li><strong>Statement of good faith belief</strong> that the use is not authorized by the copyright owner</li>
              <li><strong>Statement under penalty of perjury</strong> that the information is accurate and you are authorized to act</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Takedown Procedure</h2>
            <p className="mb-4">
              Upon receipt of a valid DMCA takedown notice, we will:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Review the notice</strong> for completeness and validity</li>
              <li><strong>Remove or disable access</strong> to the allegedly infringing material</li>
              <li><strong>Notify the user</strong> who posted the content (if applicable)</li>
              <li><strong>Document the takedown</strong> for our records</li>
            </ol>
            <p className="mb-4">
              We typically respond to valid takedown notices within 1-3 business days. 
              We reserve the right to remove content immediately upon receipt of a valid notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Counter-Notification Process</h2>
            <p className="mb-4">
              If you believe your content was removed in error, you may file a counter-notification. 
              Your counter-notification must include:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Physical or electronic signature</strong> of the user</li>
              <li><strong>Identification of the removed content</strong> and its location before removal</li>
              <li><strong>Statement under penalty of perjury</strong> that the content was removed by mistake</li>
              <li><strong>Consent to jurisdiction</strong> of federal court in your district</li>
              <li><strong>Contact information</strong> (name, address, phone, email)</li>
            </ol>
            <p className="mb-4">
              Upon receipt of a valid counter-notification, we will:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Notify the original complainant</li>
              <li>Wait 10-14 business days for any legal action</li>
              <li>Restore the content if no lawsuit is filed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Repeat Infringer Policy</h2>
            <p className="mb-4">
              We maintain a strict repeat infringer policy in accordance with DMCA requirements:
            </p>
            <div className="bg-bg-secondary p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Three-Strike System:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>First Offense:</strong> Warning and content removal</li>
                <li><strong>Second Offense:</strong> Temporary account suspension (30 days)</li>
                <li><strong>Third Offense:</strong> Permanent account termination</li>
              </ul>
            </div>
            <p className="mb-4">
              We track all DMCA notices and maintain records of repeat infringers. 
              Users who repeatedly infringe copyrights will have their accounts terminated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">False Claims</h2>
            <p className="mb-4">
              Filing a false DMCA takedown notice is a serious matter and may result in:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Liability for damages and attorney fees</li>
              <li>Criminal penalties under federal law</li>
              <li>Loss of DMCA safe harbor protection</li>
              <li>Legal action by affected parties</li>
            </ul>
            <p className="mb-4">
              Please ensure you have a good faith belief that the material infringes your copyright 
              before filing a takedown notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Content Licensing</h2>
            <p className="mb-4">
              All content available on Teen Tiny is properly licensed from content creators and 
              performers. We maintain records of all licensing agreements and model releases.
            </p>
            <p className="mb-4">
              If you believe your content appears without authorization, please contact us immediately 
              at copyright@teentiny.com with proof of ownership.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">DMCA Safe Harbor</h2>
            <p className="mb-4">
              Teen Tiny qualifies for DMCA safe harbor protection under 17 U.S.C. § 512. 
              To maintain this protection, we:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Designate a DMCA agent (registration pending)</li>
              <li>Implement a repeat infringer policy</li>
              <li>Respond promptly to valid takedown notices</li>
              <li>Do not have actual knowledge of infringing activity</li>
              <li>Remove infringing content upon notification</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Contact Information</h2>
            <p className="mb-4">
              For DMCA-related inquiries:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>DMCA Agent:</strong> copyright@teentiny.com</li>
              <li><strong>Legal Department:</strong> legal@teentiny.com</li>
              <li><strong>General Support:</strong> support@teentiny.com</li>
            </ul>
            <p className="mb-4">
              <strong>Response Time:</strong> We typically respond to DMCA notices within 1-3 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Legal Disclaimer</h2>
            <p className="mb-4">
              This DMCA policy is provided for informational purposes only and does not constitute 
              legal advice. For specific legal questions regarding copyright law or DMCA procedures, 
              please consult with qualified legal counsel.
            </p>
            <p className="mb-4">
              We reserve the right to modify this policy at any time to comply with applicable laws 
              and regulations.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
