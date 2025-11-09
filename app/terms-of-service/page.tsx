import React from "react";

export default function TermsPage() {
  return (
    <main className="terms-page container" role="main" style={{ padding: "2rem" }}>
      <article className="terms-content" style={{ maxWidth: 900, margin: "0 auto" }}>
        <header>
          <h1>Terms of Service — Jomnam Annotation Tool</h1>
          <p style={{ color: "#666" }}>
            Last Updated: November 9, 2025
            <br />
            Effective Date: Immediately
          </p>
        </header>

        <section aria-labelledby="acceptance" style={{ marginTop: 24 }}>
          <h2 id="acceptance">1. Acceptance of Terms</h2>
          <p>By using Jomnam Annotation Tool you agree to these Terms. You also confirm that:</p>
          <ul>
            <li>You've read and understood these Terms.</li>
            <li>You are at least 13 years old or have legal permission to use the service.</li>
            <li>If using it for an organization, you have the authority to bind that organization.</li>
          </ul>
        </section>

        <section aria-labelledby="service-overview" style={{ marginTop: 20 }}>
          <h2 id="service-overview">2. Service Overview</h2>
          <p>Jomnam provides annotation tools and related services, including:</p>
          <ul>
            <li>Image, document, and dataset annotation features.</li>
            <li>User authentication via Firebase and Google OAuth.</li>
            <li>Optional Google Drive read-only integration.</li>
          </ul>
          <p style={{ marginTop: 8 }}>We may change or update features as needed.</p>
        </section>

        <section aria-labelledby="user-responsibilities" style={{ marginTop: 20 }}>
          <h2 id="user-responsibilities">3. User Responsibilities</h2>
          <p>When using the service you agree to:</p>
          <ul>
            <li>Use it lawfully and avoid uploading illegal, harmful, or infringing content.</li>
            <li>Keep your account secure and not share credentials.</li>
            <li>Be responsible for all content you upload or annotate.</li>
          </ul>
        </section>

        <section aria-labelledby="accounts" style={{ marginTop: 20 }}>
          <h2 id="accounts">4. Accounts & Authentication</h2>
          <ul>
            <li>We use Firebase Authentication and Google OAuth to manage accounts.</li>
            <li>We may store basic account info (name, email, Firebase UID).</li>
            <li>You're responsible for activity under your account; we may suspend accounts that violate Terms.</li>
          </ul>
        </section>

        <section aria-labelledby="drive" style={{ marginTop: 20 }}>
          <h2 id="drive">5. Google Drive Permissions</h2>
          <p>
            Drive integration is optional and read-only. We cannot edit or delete your Drive files. Files remain in
            your Drive unless you explicitly upload them to Jomnam. Revoke access any time at{" "}
            <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">
              myaccount.google.com/permissions
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="data-storage" style={{ marginTop: 20 }}>
          <h2 id="data-storage">6. Data Storage</h2>
          <ul>
            <li>We store authentication data (name, email, Firebase UID) and files you upload directly to the platform.</li>
            <li>We do not copy or store files from your Google Drive when Drive integration is used.</li>
            <li>See our Privacy Policy for full details about data handling and retention.</li>
          </ul>
        </section>

        <section aria-labelledby="prohibited" style={{ marginTop: 20 }}>
          <h2 id="prohibited">7. Prohibited Activities</h2>
          <p>Do not use the service to:</p>
          <ul>
            <li>Reverse-engineer, hack, or disrupt the service.</li>
            <li>Upload malware, illegal content, or infringing materials.</li>
            <li>Use automated scripts to overload or abuse our systems.</li>
          </ul>
          <p style={{ marginTop: 8 }}>Violations may lead to account suspension or termination.</p>
        </section>

        <section aria-labelledby="intellectual-property" style={{ marginTop: 20 }}>
          <h2 id="intellectual-property">8. Intellectual Property</h2>
          <p>
            Jomnam owns the software, branding, and documentation. You keep ownership of content you upload and your
            annotations, but you may not copy or redistribute the service itself.
          </p>
        </section>

        <section aria-labelledby="warranties" style={{ marginTop: 20 }}>
          <h2 id="warranties">9. Disclaimers & Limitation of Liability</h2>
          <p>
            The service is provided "as is." We do not guarantee uninterrupted service or no data loss. To the maximum
            extent permitted by law, Jomnam is not liable for indirect or incidental damages. Your remedy is to stop
            using the service.
          </p>
        </section>

        <section aria-labelledby="termination" style={{ marginTop: 20 }}>
          <h2 id="termination">10. Suspension or Termination</h2>
          <p>We may suspend or terminate accounts that violate these Terms or pose a security risk. We may also modify or stop the service at any time.</p>
        </section>

        <section aria-labelledby="changes-to-terms" style={{ marginTop: 20 }}>
          <h2 id="changes-to-terms">11. Changes to Terms</h2>
          <ul>
            <li>We may update these Terms. Continued use means you accept changes.</li>
            <li>Major changes will be announced on the website where practical.</li>
          </ul>
        </section>

        <section aria-labelledby="governing-law" style={{ marginTop: 20 }}>
          <h2 id="governing-law">12. Governing Law</h2>
          <p>These Terms are governed by the laws of Cambodia.</p>
        </section>

        <section aria-labelledby="contact" style={{ marginTop: 20, marginBottom: 32 }}>
          <h2 id="contact">13. Contact</h2>
          <p>
            Questions or concerns: Jomnam Annotation Tool Support
            <br />
            Email: <a href="mailto:rpphyrom.dev@gmail.com">rpphyrom.dev@gmail.com</a>
          </p>
        </section>
      </article>
    </main>
  );
}