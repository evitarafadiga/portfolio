const VideoPlayer = ({videoUrl}) => {
    return (
        <div className="w-full h-full">
            <video
                autoPlay
                muted
                loop
                playsInline 
                className="w-full h-full object-cover"
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;