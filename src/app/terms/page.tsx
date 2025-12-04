import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: November 24, 2024
            </p>
          </div>

          <div className="prose prose-sm max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
              <p>
                Welcome to DelftPrep. By accessing or using our platform, you
                agree to be bound by these Terms of Service and our Privacy
                Policy. If you do not agree to these terms, please do not use our
                service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Description of Service</h2>
              <p>
                DelftPrep provides an online platform for students preparing for
                admission to TU Delft Aerospace Engineering. Our service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Access to practice problems and solutions</li>
                <li>Progress tracking and analytics</li>
                <li>AI-powered recommendations (Complete tier)</li>
                <li>Educational content and study materials</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Account Registration</h2>

              <h3 className="text-xl font-semibold">3.1 Eligibility</h3>
              <p>
                You must be at least 13 years old to use DelftPrep. If you are
                under 18, you must have parental or guardian consent.
              </p>

              <h3 className="text-xl font-semibold">3.2 Account Security</h3>
              <p>You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Maintaining the confidentiality of your password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold">3.3 Accurate Information</h3>
              <p>
                You agree to provide accurate, current, and complete information
                during registration and to update it as necessary.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Subscription and Payment</h2>

              <h3 className="text-xl font-semibold">4.1 Pricing</h3>
              <p>DelftPrep offers three subscription tiers:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Starter: €35 (6 months access)</li>
                <li>Enhanced: €50 (12 months access)</li>
                <li>Complete: €100 (18 months access)</li>
              </ul>

              <h3 className="text-xl font-semibold">4.2 Payment Terms</h3>
              <p>
                All payments are one-time fees processed securely through our
                payment providers. By purchasing a subscription, you authorize us
                to charge the payment method you provide.
              </p>

              <h3 className="text-xl font-semibold">4.3 Refund Policy</h3>
              <p>
                We offer a 14-day money-back guarantee. If you are not satisfied
                with DelftPrep within 14 days of purchase, contact us for a full
                refund. After 14 days, all sales are final.
              </p>

              <h3 className="text-xl font-semibold">4.4 Price Changes</h3>
              <p>
                We reserve the right to modify our pricing. Price changes will
                not affect existing subscriptions but will apply to new purchases
                or renewals.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. User Conduct</h2>
              <p>You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Share your account credentials with others</li>
                <li>Copy, distribute, or reproduce our content without permission</li>
                <li>Use automated systems to access the platform</li>
                <li>Attempt to circumvent security measures</li>
                <li>Upload malicious code or viruses</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Use the service for any illegal purpose</li>
                <li>Reverse engineer or decompile any part of the service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Intellectual Property</h2>

              <h3 className="text-xl font-semibold">6.1 Our Content</h3>
              <p>
                All content on DelftPrep, including text, graphics, problems,
                solutions, logos, and software, is owned by DelftPrep or its
                licensors and protected by copyright and other intellectual
                property laws.
              </p>

              <h3 className="text-xl font-semibold">6.2 Limited License</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to
                access and use DelftPrep for personal, non-commercial purposes
                during your subscription period.
              </p>

              <h3 className="text-xl font-semibold">6.3 Prohibited Uses</h3>
              <p>You may not:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Copy or download content for distribution</li>
                <li>Create derivative works from our content</li>
                <li>Use content for commercial purposes</li>
                <li>Remove copyright or proprietary notices</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Disclaimers</h2>

              <h3 className="text-xl font-semibold">7.1 No Guarantee of Admission</h3>
              <p>
                DelftPrep is a preparation tool. We do not guarantee admission to
                TU Delft or any educational institution. Admission decisions are
                made solely by the respective universities.
              </p>

              <h3 className="text-xl font-semibold">7.2 Service Availability</h3>
              <p>
                We strive to maintain continuous service availability but do not
                guarantee uninterrupted access. The service is provided "as is"
                and "as available."
              </p>

              <h3 className="text-xl font-semibold">7.3 Content Accuracy</h3>
              <p>
                While we make every effort to ensure accuracy, we do not warrant
                that our content is error-free or complete. You use the service at
                your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, DelftPrep shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including loss of profits, data, or other
                intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Your use or inability to use the service</li>
                <li>Unauthorized access to your account</li>
                <li>Errors or omissions in content</li>
                <li>Service interruptions or technical issues</li>
              </ul>
              <p>
                Our total liability shall not exceed the amount you paid for your
                subscription in the 12 months preceding the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Termination</h2>

              <h3 className="text-xl font-semibold">9.1 By You</h3>
              <p>
                You may delete your account at any time through the settings page.
                Deletion is permanent and cannot be undone.
              </p>

              <h3 className="text-xl font-semibold">9.2 By Us</h3>
              <p>
                We reserve the right to suspend or terminate your account if you
                violate these terms or engage in fraudulent or harmful behavior.
              </p>

              <h3 className="text-xl font-semibold">9.3 Effect of Termination</h3>
              <p>
                Upon termination, your right to use the service will immediately
                cease. No refunds will be provided for early termination by us due
                to terms violations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. Privacy</h2>
              <p>
                Your use of DelftPrep is also governed by our Privacy Policy,
                which describes how we collect, use, and protect your personal
                information. Please review our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">11. Modifications to Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part
                of the service at any time, with or without notice. We are not
                liable for any modification, suspension, or discontinuation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">12. Changes to Terms</h2>
              <p>
                We may revise these Terms of Service at any time. Changes will be
                effective immediately upon posting. Your continued use of the
                service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with
                the laws of the Netherlands, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">14. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or your use of DelftPrep
                shall be resolved through binding arbitration in accordance with
                the rules of the Netherlands Arbitration Institute, except where
                prohibited by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">15. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the
                remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">16. Entire Agreement</h2>
              <p>
                These Terms and our Privacy Policy constitute the entire agreement
                between you and DelftPrep regarding the use of our service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">17. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us:
              </p>
              <ul className="list-none space-y-2 pl-4">
                <li>Email: legal@delftprep.com</li>
                <li>
                  Contact form:{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    delftprep.com/contact
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-4 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                By using DelftPrep, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
