import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Cookie Policy</h1>
            <p className="text-muted-foreground">
              Last updated: November 24, 2024
            </p>
          </div>

          <div className="prose prose-sm max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device
                (computer, smartphone, or tablet) when you visit a website. They
                are widely used to make websites work more efficiently and provide
                information to website owners.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. How We Use Cookies</h2>
              <p>
                DelftPrep uses cookies to improve your experience on our platform.
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Authentication and security</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing how you use our service</li>
                <li>Improving our platform's performance</li>
                <li>Understanding user behavior and trends</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold">
                3.1 Essential Cookies (Strictly Necessary)
              </h3>
              <p>
                These cookies are necessary for the website to function and cannot
                be disabled. They are usually set in response to actions you take,
                such as logging in or filling out forms.
              </p>
              <div className="bg-secondary/30 p-4 rounded-md">
                <p className="font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-sm mt-2">
                  <li>Authentication tokens</li>
                  <li>Session management</li>
                  <li>Security cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold">3.2 Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization.
                They may be set by us or by third-party providers whose services
                we use on our pages.
              </p>
              <div className="bg-secondary/30 p-4 rounded-md">
                <p className="font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-sm mt-2">
                  <li>Language preferences</li>
                  <li>Theme selection (light/dark mode)</li>
                  <li>User interface preferences</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold">3.3 Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
              </p>
              <div className="bg-secondary/30 p-4 rounded-md">
                <p className="font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-sm mt-2">
                  <li>Google Analytics cookies</li>
                  <li>Page view tracking</li>
                  <li>User engagement metrics</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold">3.4 Performance Cookies</h3>
              <p>
                These cookies help us improve how our website works by collecting
                information about how users interact with it.
              </p>
              <div className="bg-secondary/30 p-4 rounded-md">
                <p className="font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-sm mt-2">
                  <li>Load time monitoring</li>
                  <li>Error tracking</li>
                  <li>Feature usage statistics</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Third-Party Cookies</h2>
              <p>
                We use services from third-party providers that may set cookies on
                your device. These providers have their own privacy policies:
              </p>

              <div className="space-y-3">
                <div className="bg-secondary/30 p-4 rounded-md">
                  <p className="font-medium">Google Analytics</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Used to analyze website traffic and user behavior.
                  </p>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </div>

                <div className="bg-secondary/30 p-4 rounded-md">
                  <p className="font-medium">Payment Processors</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Stripe and other payment providers use cookies for secure
                    payment processing.
                  </p>
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Stripe Privacy Policy
                  </a>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Cookie Duration</h2>

              <h3 className="text-xl font-semibold">Session Cookies</h3>
              <p>
                Temporary cookies that are deleted when you close your browser.
                Used primarily for authentication and navigation.
              </p>

              <h3 className="text-xl font-semibold">Persistent Cookies</h3>
              <p>
                Cookies that remain on your device for a set period or until you
                delete them. Duration varies by cookie type:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Authentication cookies: 30 days</li>
                <li>Preference cookies: 12 months</li>
                <li>Analytics cookies: 2 years</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Managing Cookies</h2>

              <h3 className="text-xl font-semibold">6.1 Browser Settings</h3>
              <p>
                You can control and manage cookies through your browser settings.
                Here's how to manage cookies in popular browsers:
              </p>

              <div className="space-y-2 pl-4">
                <p>
                  <strong>Google Chrome:</strong>{" "}
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Cookie settings in Chrome
                  </a>
                </p>
                <p>
                  <strong>Firefox:</strong>{" "}
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Cookie settings in Firefox
                  </a>
                </p>
                <p>
                  <strong>Safari:</strong>{" "}
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Cookie settings in Safari
                  </a>
                </p>
                <p>
                  <strong>Edge:</strong>{" "}
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Cookie settings in Edge
                  </a>
                </p>
              </div>

              <h3 className="text-xl font-semibold">6.2 Opt-Out Tools</h3>
              <p>You can opt out of analytics cookies using these tools:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.networkadvertising.org/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Network Advertising Initiative Opt-Out
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-semibold">6.3 Impact of Blocking Cookies</h3>
              <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-md">
                <p className="font-medium">Please note:</p>
                <p className="text-sm mt-2">
                  Blocking or deleting cookies may impact your ability to use
                  certain features of DelftPrep. Essential cookies are required
                  for core functionality like logging in and viewing your progress.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Local Storage and Similar Technologies</h2>
              <p>
                In addition to cookies, we may use similar technologies such as:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Local Storage:</strong> Browser storage for saving
                  preferences and temporary data
                </li>
                <li>
                  <strong>Session Storage:</strong> Temporary storage cleared when
                  the browser tab is closed
                </li>
                <li>
                  <strong>IndexedDB:</strong> For storing structured data locally
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in technology, legislation, or our practices. When we make
                changes, we will update the "Last updated" date at the top of this
                page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Your Consent</h2>
              <p>
                By using DelftPrep, you consent to our use of cookies as described
                in this Cookie Policy. If you do not agree, you may disable
                cookies through your browser settings, though this may affect your
                ability to use certain features.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us:
              </p>
              <ul className="list-none space-y-2 pl-4">
                <li>Email: privacy@delftprep.com</li>
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
                For more information about how we handle your personal data, please
                see our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
