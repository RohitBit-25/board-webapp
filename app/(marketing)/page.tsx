import { Button } from "@/components/ui/button";
import { ArrowRight, Medal, Star, Zap } from "lucide-react";
import Link from "next/link";

const MarketingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-full w-full overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col items-center text-center max-w-4xl px-6 md:px-0 space-y-8 pt-20 pb-20 z-10">

                {/* Badge */}
                <div className="flex items-center border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 p-2 px-4 rounded-full mb-4 shadow-lg shadow-yellow-500/10 backdrop-blur-sm">
                    <Medal className="h-4 w-4 mr-2" />
                    <span className="text-xs font-semibold uppercase tracking-wider">The #1 Choice for Creators</span>
                </div>

                {/* Hero Text */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
                    Visualize Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
                        Wildest Ideas.
                    </span>
                </h1>

                <p className="text-lg md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
                    Collaborate, sketch, and strategize on an <span className="text-white font-medium">infinite canvas</span>.
                    Real-time syncing, premium tools, and a seamless experience designed for the modern pro.
                </p>

                {/* CTAs */}
                <div className="flex items-center gap-4 mt-8">
                    <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-slate-200 shadow-xl shadow-white/5 font-bold transition-transform hover:scale-105" asChild>
                        <Link href="/dashboard">
                            Start Creating Now
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all">
                        <Star className="h-4 w-4 mr-2 text-yellow-400 fill-yellow-400" />
                        GitHub Repo
                    </Button>
                </div>
            </div>

            {/* Feature Grid / Social Proof (Simplified) */}
            <div className="w-full max-w-6xl px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
                <FeatureCard
                    icon={<Zap className="h-8 w-8 text-indigo-400" />}
                    title="Fast & Real-time"
                    description="Changes sync instantly across all devices with zero latency."
                />
                <FeatureCard
                    icon={<Star className="h-8 w-8 text-purple-400" />}
                    title="Premium Design"
                    description="A beautiful dark-mode interface that keeps you focused."
                />
                <FeatureCard
                    icon={<Medal className="h-8 w-8 text-pink-400" />}
                    title="Team Ready"
                    description="Built for organizations with advanced permissions."
                />
            </div>

            {/* Footer */}
            <footer className="w-full border-t border-white/5 py-8 text-center text-slate-600 text-sm">
                <p>&copy; 2024 Srishti. Crafted with ❤️ in Bharat.</p>
            </footer>

        </div>
    );
}

const FeatureCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md group hover:border-white/20">
            <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>
    )
}

export default MarketingPage;
