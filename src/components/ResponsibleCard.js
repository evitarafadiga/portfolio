export const ResponsibleCard = ({ img, title, subtitle, desc, alt, href }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt={alt} />
                </div>
                <div className="p-8">
                    <div className=" text-justify">
                        <a href={href} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
                        <p className="mt-2 text-slate-500">{desc}</p>
                    </div>
                    <div className="flex flex-row pt-10 uppercase tracking-wide text-justify align-center place-items-center">
                        <div>
                            <p className="text-xs text-slate-400 pr-4">stacks</p>
                        </div>
                        <div className="text-sm text-indigo-500 font-semibold">{title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};