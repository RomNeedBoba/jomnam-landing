import React from "react";

export default function PrivacyPage() {
    return (
        <main className="privacy-page container" role="main" style={{ padding: "2rem" }}>
            <article className="privacy-content" style={{ maxWidth: 900, margin: "0 auto" }}>
                <header>
                    <h1>Privacy Policy — Jomnam Annotation Tool</h1>
                    <p style={{ color: "#666" }}>
                        Last Updated: November 9, 2025<br />
                        Effective Date: Immediately
                    </p>
                </header>

                <section aria-labelledby="what-we-collect" style={{ marginTop: 24 }}>
                    <h2 id="what-we-collect">1. Information We Collect</h2>
                    <p>We collect only the information needed to provide and improve the service:</p>
                    <ul>
                        <li>
                            Personal info
                            <ul>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Google profile info (when signing in with Google)</li>
                            </ul>
                        </li>
                        <li>
                            Uploaded files
                            <ul>
                                <li>Images, documents or datasets you provide for annotation</li>
                                <li>Stored temporarily and only in your Drive if you choose to connect it</li>
                            </ul>
                        </li>
                        <li>
                            Authentication & usage data
                            <ul>
                                <li>Unique user ID, email verification status</li>
                                <li>Login timestamps, basic analytics, device/browser type</li>
                                <li>Error logs to help improve stability</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section aria-labelledby="how-we-use" style={{ marginTop: 20 }}>
                    <h2 id="how-we-use">2. How We Use Your Information</h2>
                    <ul>
                        <li>Authenticate users (Firebase + Google OAuth)</li>
                        <li>Provide access to annotation features</li>
                        <li>Enable uploading and annotating files</li>
                        <li>Maintain minimal account data required for the service</li>
                        <li>Improve performance, reliability, and security</li>
                    </ul>
                    <p style={{ marginTop: 8 }}>We do not sell or rent your information to third parties.</p>
                </section>

                <section aria-labelledby="storage-security" style={{ marginTop: 20 }}>
                    <h2 id="storage-security">3. Data Storage & Security</h2>
                    <ul>
                        <li>
                            Firebase Authentication
                            <ul>
                                <li>We store: email, name (if available), Google UID</li>
                                <li>Protected by Firebase / Google-managed security and encryption</li>
                            </ul>
                        </li>
                        <li>
                            Uploaded files
                            <ul>
                                <li>Processed temporarily for annotation workflows</li>
                                <li>Not stored long-term by Jomnam unless explicitly stated</li>
                                <li>Google Drive files remain in your Drive when Drive integration is used</li>
                            </ul>
                        </li>
                        <li>No long-term storage of user cloud files or third-party content.</li>
                    </ul>
                </section>

                <section aria-labelledby="data-sharing" style={{ marginTop: 20 }}>
                    <h2 id="data-sharing">4. Data Sharing Policy</h2>
                    <ul>
                        <li>We do not share data with advertisers or external companies.</li>
                        <li>We will only disclose data if legally required.</li>
                        <li>Operational data stays within the Jomnam system for service purposes.</li>
                    </ul>
                </section>

                <section aria-labelledby="google-oauth" style={{ marginTop: 20 }}>
                    <h2 id="google-oauth">5. Google OAuth Permissions</h2>
                    <ul>
                        <li>Requested when you sign in with Google:
                            <ul>
                                <li>Basic profile info (name, email) — for account creation</li>
                                <li>Optional: Google Drive read-only access — only if you enable Drive integration</li>
                            </ul>
                        </li>
                        <li>We cannot edit, delete, or create files in your Drive — access is read-only and session-limited.</li>
                    </ul>
                </section>

                <section aria-labelledby="cookies" style={{ marginTop: 20 }}>
                    <h2 id="cookies">6. Cookies</h2>
                    <ul>
                        <li>Used for authentication, session management, and security</li>
                        <li>Not used for tracking or advertising</li>
                    </ul>
                </section>

                <section aria-labelledby="user-rights" style={{ marginTop: 20 }}>
                    <h2 id="user-rights">7. User Rights</h2>
                    <p>You can:</p>
                    <ul>
                        <li>Access your account information</li>
                        <li>Request deletion of your account</li>
                        <li>Revoke Google OAuth access at any time</li>
                        <li>Stop using the service whenever you choose</li>
                    </ul>
                    <p style={{ marginTop: 8 }}>
                        Manage permissions:{" "}
                        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">
                            myaccount.google.com/permissions
                        </a>
                    </p>
                </section>

                <section aria-labelledby="children-privacy" style={{ marginTop: 20 }}>
                    <h2 id="children-privacy">8. Children’s Privacy</h2>
                    <ul>
                        <li>Not intended for children under 13</li>
                        <li>We do not knowingly collect information from children</li>
                    </ul>
                </section>

                <section aria-labelledby="changes" style={{ marginTop: 20 }}>
                    <h2 id="changes">9. Changes to This Policy</h2>
                    <ul>
                        <li>Policy updates may occur; major changes will be announced on the website</li>
                        <li>Check this page for the latest version</li>
                    </ul>
                </section>

                <section aria-labelledby="contact" style={{ marginTop: 20, marginBottom: 32 }}>
                    <h2 id="contact">10. Contact Us</h2>
                    <ul>
                        <li>Questions or concerns: Jomnam Annotation Tool Support</li>
                        <li>
                            Email:{" "}
                            <a href="mailto:rpphyrom.dev@gmail.com">rpphyrom.dev@gmail.com</a>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    );
}
