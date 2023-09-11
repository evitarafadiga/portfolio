import { Box } from "./Box";

export const BoxWrapper = ({ boxes, img, title }) => {
    return (
        <div className="grid grid-rows-4 grid-flow-col md:grid-rows-2">                     
            <Box img={img} title={title}></Box>
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