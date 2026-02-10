export default function LoadingService() {
    return (
        <div className="min-h-screen bg-luxury-dark">
            <div className="container pt-28 pb-16">
                <div className="max-w-3xl">
                    <div className="kicker w-24 h-6 bg-white/5 border border-white/10 rounded-xl animate-pulse" />
                    <div className="mt-6 h-12 w-[85%] rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
                    <div className="mt-4 h-5 w-[95%] rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                    <div className="mt-3 h-5 w-[88%] rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                </div>

                <div className="mt-10 hr" />

                <div className="mt-10 grid gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-8 card p-8">
                        <div className="h-6 w-44 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-12 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
                                />
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-4 panel p-8">
                        <div className="h-6 w-44 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                        <div className="mt-4 h-4 w-[92%] rounded-lg bg-white/5 border border-white/10 animate-pulse" />
                        <div className="mt-2 h-4 w-[80%] rounded-lg bg-white/5 border border-white/10 animate-pulse" />
                        <div className="mt-6 space-y-2">
                            <div className="h-12 w-full rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
                            <div className="h-12 w-full rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
