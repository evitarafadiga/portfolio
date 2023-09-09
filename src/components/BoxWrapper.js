import { Box } from "./Box";

export const BoxWrapper = ({ boxes, img, title }) => {
    return (
        <div className="flex flex-wrap overflow-hidden min-w-full">
            <div>
                <Box img={img} title={title}></Box>
            </div>
            
            <Box img={img} title={title}></Box>
            <Box img={img} title={title}></Box>
            <Box img={img} title={title}></Box>
            <Box img={img} title={title}></Box>
            <Box img={img} title={title}></Box>
            <Box img={img} title={title}></Box>
            <Box img={img} title={title}></Box>

        </div>
    );
};