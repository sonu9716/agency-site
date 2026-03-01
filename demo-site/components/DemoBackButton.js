export default function DemoBackButton() {
    return (
        <a
            href="/"
            className="fixed bottom-4 left-4 z-[9999] bg-[#07091A] text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold hover:bg-[#1A1D36] transition-colors flex items-center gap-2 border border-blue-900/50"
            title="Return to DocSite Solutions Agency"
        >
            <span>&larr;</span> Back to Main Site
        </a>
    );
}
