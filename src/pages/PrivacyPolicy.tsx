const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-20">
      <div className="max-w-3xl mx-auto font-body">
        <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">← Back to home</a>
        <h1 className="text-3xl font-serif font-semibold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 6, 2025</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-foreground mb-2">1. Introduction</h2>
            <p>Break Up Recovery ("we", "our", "us") respects your privacy. This policy explains how we collect, use, and protect your information when you use our website and AI chat service.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-2">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Chat messages:</strong> Messages you send through our AI chat are processed to generate responses. We do not permanently store your conversations.</li>
              <li><strong className="text-foreground">Usage data:</strong> Anonymous analytics such as page views and session duration to improve our service.</li>
              <li><strong className="text-foreground">Contact information:</strong> If you reach out for coaching, we collect your name and email to respond to your inquiry.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and improve our AI chat support</li>
              <li>To respond to coaching inquiries</li>
              <li>To analyze usage patterns and improve the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-2">4. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with third-party service providers (e.g., AI model providers, hosting) solely to operate our service. These providers are bound by confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-2">5. AI Chat Disclaimer</h2>
            <p>Our AI chat is not a substitute for professional therapy or counseling. It provides general emotional support only. Do not share sensitive personal information (e.g., financial details, passwords) in the chat.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-2">6. Cookies</h2>
            <p>We may use essential cookies to ensure the website functions properly. We do not use tracking cookies for advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-2">7. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data. Contact us at the email below to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-2">8. Contact</h2>
            <p>If you have questions about this privacy policy, please contact us at <a href="mailto:hello@breakuprecovery.com" className="text-primary hover:underline">hello@breakuprecovery.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
