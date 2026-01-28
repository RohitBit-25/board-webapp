import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-[#0a0a0f] selection:bg-purple-500/30">
            <Navbar />
            <main className="h-full pt-16">
                {children}
            </main>
        </div>
    );
}

export default MarketingLayout;
