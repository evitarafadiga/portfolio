export const Box = ({ img, title, onClick, alt }) => {
    return (
        <div className="flex justify-center align-center place-items-center h-[375px] w-[375px] md:w-[380px] md:h-[380px]">
            <div className="absolute">
                <button className="h-[374px] w-[374px] md:w-[379px] md:h-[379px] transition ase-in-out delay-50 bg-none hover:bg-[#ffa54d] text-white" onClick={onClick}>
                    <p className="text-3xl">
                        {title}
                    </p>
                </button>
            </div>
            <div className="">
                <img className="aspect-square object-cover" src={img} alt={alt} />
            </div>
        </div>
    );
};