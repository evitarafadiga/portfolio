export const Box = ({ img, title, alt, href }) => {
    return (
        <div className="bg-sky-400 relative p-0 m-0">
            <a href={href} className="block p-0 m-0">
                <img 
                    className="aspect-square object-cover w-full h-full p-0 m-0" 
                    src={img} 
                    alt={alt} 
                />
                
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button className="aspect-square w-full h-full transition ease-in-out delay-50 bg-none hover:bg-[#ffa54d] text-transparent hover:text-white">
                        <p className="text-3xl">
                            {title}
                        </p>
                    </button>
                </div>
            </a>
        </div>
    );
};