export const ResponsibleCard = ({ img, title, subtitle, desc, alt, href }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt={alt} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <a href={href} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
                    <p className="mt-2 text-slate-500">{desc}</p>
                </div>
            </div>
        </div>
    );
};