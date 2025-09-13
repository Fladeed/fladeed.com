import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Fladeed collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card bg-adaptive/10 backdrop-blur-md border border-adaptive/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-adaptive mb-2">Privacy Policy</h1>
          <p className="text-adaptive-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-adaptive max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>
                  We collect information you provide directly to us, such as when you contact us through our website, 
                  request our services, or communicate with us.
                </p>
                <h3 className="text-lg font-medium text-adaptive mt-6 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and business information</li>
                  <li>Project requirements and preferences</li>
                  <li>Communication history and correspondence</li>
                </ul>
                
                <h3 className="text-lg font-medium text-adaptive mt-6 mb-2">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral source and navigation patterns</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our software development services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates about our services and industry insights</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">3. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience and 
                  analyze our website traffic.
                </p>
                
                <h3 className="text-lg font-medium text-adaptive mt-6 mb-2">Types of Cookies We Use</h3>
                
                <div className="bg-adaptive/5 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-adaptive mb-2">Necessary Cookies</h4>
                  <p>Essential for the website to function properly. These cannot be disabled.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Session management and authentication</li>
                    <li>Security and fraud prevention</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                </div>

                <div className="bg-adaptive/5 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-adaptive mb-2">Analytics Cookies</h4>
                  <p>Help us understand how visitors interact with our website.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Google Analytics (with anonymized IP)</li>
                    <li>Page views and user journey tracking</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>

                <div className="bg-adaptive/5 rounded-lg p-4">
                  <h4 className="font-medium text-adaptive mb-2">Marketing Cookies</h4>
                  <p>Used to deliver relevant advertisements and track campaign performance.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Social media integration</li>
                    <li>Advertising platform tracking</li>
                    <li>Conversion measurement</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">4. Information Sharing</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>
                  We do not sell, rent, or share your personal information with third parties except as described in this policy:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Trusted partners who assist in operating our website and services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>With Consent:</strong> When you explicitly agree to share information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">5. Data Security</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure hosting infrastructure</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">6. Your Rights</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Restriction:</strong> Limit how we use your information</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Withdraw Consent:</strong> Revoke previously given consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:contact@fladeed.com" className="text-adaptive-accent hover:underline">
                    contact@fladeed.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">7. International Transfers</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>
                  As we serve clients worldwide, your information may be transferred to and processed in countries 
                  other than your own. We ensure appropriate safeguards are in place to protect your data during 
                  international transfers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">8. Children's Privacy</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>
                  Our services are not directed to children under 16 years of age. We do not knowingly collect 
                  personal information from children under 16. If we learn we have collected such information, 
                  we will delete it promptly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">9. Changes to This Policy</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any material changes 
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-adaptive mb-4">10. Contact Us</h2>
              <div className="space-y-4 text-adaptive-muted">
                <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
                <div className="bg-adaptive/5 rounded-lg p-4">
                  <p><strong>Email:</strong> contact@fladeed.com</p>
                  <p><strong>Phone:</strong> +212521168411</p>
                  <p><strong>Address:</strong> Casablanca, Morocco</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}