import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | PureSpace Cleaning Co.",
    description:
        "Terms of service for PureSpace Cleaning Co. Website use terms and service inquiry disclaimers.",
};

export default function TermsOfServicePage() {
    return (
        <div className="container py-14">
            <div className="max-w-3xl">
                <div className="kicker w-fit">Legal</div>
                <h1 className="mt-6 text-4xl md:text-5xl h-title text-luxury-silver">
                    Terms of Service
                </h1>
                <p className="mt-4 p-lead">
                    These terms apply to your use of this website and any requests submitted through our forms.
                </p>

                <div className="mt-10 hr" />

                <div className="mt-10 space-y-8 text-sm text-luxury-silver/75 leading-relaxed">
                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Website use</h2>
                        <p className="mt-3">
                            You agree not to misuse the website, attempt unauthorized access, or submit false or harmful information.
                        </p>
                    </section>

                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Quotes & proposals</h2>
                        <p className="mt-3">
                            Any information provided on this website is general. Final pricing, scope, and scheduling depend on
                            walkthrough, facility condition, square footage, frequency, and service requirements.
                        </p>
                    </section>

                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Scheduling</h2>
                        <p className="mt-3">
                            We offer flexible service windows including after-hours and weekends where available by schedule.
                            Availability can vary by team capacity and site requirements.
                        </p>
                    </section>

                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Limitation of liability</h2>
                        <p className="mt-3">
                            To the extent permitted by law, PureSpace is not liable for indirect damages related to the use of this website.
                            Service agreements and scopes are handled separately in written proposals/agreements.
                        </p>
                    </section>

                    <section className="card p-8">
                        <h2 className="text-lg font-semibold text-luxury-silver">Contact</h2>
                        <p className="mt-3">
                            If you have questions about these terms, contact us.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-2">
                            <Link href="/contact" className="btn btn-primary w-full sm:w-auto justify-center">
                                Contact us →
                            </Link>
                            <Link href="/booking" className="btn btn-outline w-full sm:w-auto justify-center">
                                Book walkthrough
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
