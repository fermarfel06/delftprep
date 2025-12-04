import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: November 24, 2024
            </p>
          </div>

          <div className="prose prose-sm max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p>
                DelftPrep ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                platform.
              </p>
              <p>
                By using DelftPrep, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold">2.1 Personal Information</h3>
              <p>We collect information that you provide directly to us:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Name and email address (when you create an account)</li>
                <li>Payment information (processed securely by our payment providers)</li>
                <li>Profile information you choose to provide</li>
                <li>Communications with us (support emails, feedback)</li>
              </ul>

              <h3 className="text-xl font-semibold">2.2 Usage Information</h3>
              <p>We automatically collect certain information about your device and how you interact with our service:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Problem attempts and solutions viewed</li>
                <li>Progress and performance data</li>
                <li>Device information (browser type, operating system)</li>
                <li>Log data (IP address, access times, pages viewed)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send related information</li>
                <li>Track your progress and provide personalized recommendations</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>

              <h3 className="text-xl font-semibold">4.1 Service Providers</h3>
              <p>
                We may share your information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Payment processing</li>
                <li>Email delivery</li>
                <li>Cloud hosting</li>
                <li>Analytics services</li>
              </ul>

              <h3 className="text-xl font-semibold">4.2 Legal Requirements</h3>
              <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>

              <h3 className="text-xl font-semibold">4.3 Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or sale of assets,
                your information may be transferred as part of that transaction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet is 100% secure.
              </p>
              <p>Security measures include:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Restricted access to personal information</li>
                <li>Secure password storage (hashed and salted)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct your information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@delftprep.com
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Cookies and Tracking</h2>
              <p>We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Remember your preferences</li>
                <li>Understand how you use our service</li>
                <li>Improve your experience</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However,
                disabling cookies may affect your ability to use certain features.
              </p>
              <p>
                For more information, see our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                policy. When you delete your account, we will delete or anonymize
                your personal information within 30 days, except where we are
                required to retain it for legal purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Children's Privacy</h2>
              <p>
                Our service is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. International Users</h2>
              <p>
                Your information may be transferred to and processed in countries
                other than your own. These countries may have different data
                protection laws. By using our service, you consent to such transfers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date. We encourage you to review
                this policy periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 pl-4">
                <li>Email: privacy@delftprep.com</li>
                <li>Contact form: <a href="/contact" className="text-primary hover:underline">delftprep.com/contact</a></li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">13. GDPR Compliance (EU Users)</h2>
              <p>
                If you are located in the European Economic Area (EEA), you have
                additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Right to be informed about data processing</li>
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (right to be forgotten)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision-making and profiling</li>
              </ul>
              <p>
                Our legal basis for processing your data includes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Contract performance (to provide our services)</li>
                <li>Legitimate interests (to improve our services)</li>
                <li>Legal obligations (to comply with laws)</li>
                <li>Your consent (where applicable)</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
