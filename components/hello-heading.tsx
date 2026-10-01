// Big, bold "Hello." that eases up into place on first load. The entrance is a CSS animation
// (not JS) so the heading paints straight from the server-rendered HTML.
export default function HelloHeading() {
    return (
        <h1
            aria-label="Hello, welcome to Vitto Portfolio"
            className="animate-fade-up text-center text-[clamp(4.5rem,13vw,9.5rem)] font-semibold leading-none tracking-[-0.045em] text-black motion-reduce:animate-none"
        >
            Hello.
        </h1>
    );
}
