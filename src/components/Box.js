export const Box = ({ img, title, alt, href }) => {
    return (
        <div className="flex justify-center align-center place-items-center h-[375px] w-[375px] md:w-[380px] md:h-[380px]">
            <div className="absolute">
                <a href={href}>
                    <button className="h-[374px] w-[374px] md:w-[379px] md:h-[379px] transition ase-in-out delay-50 bg-none hover:bg-[#ffa54d] text-transparent hover:text-white">
                        <p className="text-3xl">
                            {title}
                        </p>
                    </button>
                </a>
            </div>
            <img className="aspect-square object-cover" src={img} alt={alt} />
        </div>
    );
};