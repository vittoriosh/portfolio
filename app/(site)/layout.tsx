import SiteApp from "@/components/site-app";

// The whole site (header, menu, chat and every page) lives in SiteApp, which picks what to show
// from the URL. Keeping it in a layout means it stays mounted across navigations, so the chat
// history survives and page changes can animate. The route pages below only set metadata.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SiteApp />
            {children}
        </>
    );
}
