export const Box = ({ img, title, onClick, alt }) => {
    return (
        <div className="h-[372px] w-[372px]">
            <div className="">
                <div className="">
                    <button className="h-[372px] w-[372px] absolute transition ease-in-out delay-50 bg-none hover:bg-[#ffa54d] text-white" onClick={onClick}>
                        <div className="justify-center align-center flex">
                            <p className="text-3xl">
                                {title}
                            </p>
                        </div>
                    </button>
                    <div className="">
                        <img className="h-[372px] w-[372px] object-cover" src={img} alt={alt} />
                    </div>

                </div>
            </div>
        </div>
    );
};