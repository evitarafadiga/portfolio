import { Box } from "./Box";

export const BoxWrapper = ({ boxes }) => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {boxes.map((d, idx) => (
                <div key={idx} className="w-full">
                    <Box img={d.img} title={d.title} href={d.href} />
                </div>
            ))}
        </div>
    );
};