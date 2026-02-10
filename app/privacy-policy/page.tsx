import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | PureSpace Cleaning Co.",
    description:
        "Privacy policy for PureSpace Cleaning Co. Learn how we collect, use, and protect information submitted through our website.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container py-14">
            <div className="max-w-3xl">
                <div className="kicker w-fit">Legal</div>
                <h1 className="mt-6 text-4xl md:text-5xl h-title text-luxury-silver">
                    Privacy Policy
                </h1>
                <p className="mt-4 p-lead">
                    This policy explains how PureSpace Cleaning Co. (“PureSpace”) collects and uses information from this website.
                </p>

                <div className="mt-10 hr" />

                <div className="mt-10 space-y-8 text-sm text-luxury-silver/75 leading-relaxed">
                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Information we collect</h2>
                        <p className="mt-3">
                            When you submit a form (contact, booking, proposal request), we may collect your name, email, phone number,
                            company name, service interest, and message details.
                        </p>
                    </section>

                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">How we use it</h2>
                        <ul className="mt-4 space-y-2">
                            <li className="flex gap-2"><span className="text-luxury-accent">•</span><span>Respond to your request and schedule walkthroughs</span></li>
                            <li className="flex gap-2"><span className="text-luxury-accent">•</span><span>Prepare proposals and scopes tailored to your facility</span></li>
                            <li className="flex gap-2"><span className="text-luxury-accent">•</span><span>Improve our services and website experience</span></li>
                        </ul>
                    </section>

                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Sharing</h2>
                        <p className="mt-3">
                            We do not sell your personal information. We may share details only when needed to operate our business
                            (for example, email delivery providers or scheduling tools), and only for the purpose of serving your request.
                        </p>
                    </section>

                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Retention</h2>
                        <p className="mt-3">
                            We keep inquiry records as long as necessary to follow up, provide quotes, and maintain business records.
                        </p>
                    </section>

                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Contact</h2>
                        <p className="mt-3">
                            Questions about this policy? Contact us and we’ll respond quickly.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-2">
                            <Link href="/contact" className="btn btn-primary w-full sm:w-auto justify-center">
                                Contact us →
                            </Link>
                            <Link href="/services" className="btn btn-outline w-full sm:w-auto justify-center">
                                Explore services
                            </Link>
                        </div>
                    </section>

                    <div className="text-xs text-luxury-silver/50">
                        Last updated: {new Date().toLocaleDateString()}
                    </div>
                </div>
            </div>
        </div>
    );
}
