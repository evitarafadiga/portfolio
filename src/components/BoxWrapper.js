import { Box } from "./Box";

export const BoxWrapper = ({ boxes }) => {
    return (
        <div className="flex flex-wrap">
            {boxes.map(function (d, idx) {
                return (
                    <div className="grow">
                    <Box key={idx} img={d.img} title={d.title} href={d.href} />
                    </div>
                )
            })}
        </div>
    );
};