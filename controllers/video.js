import Video from "../models/video.js";

// Create a new video
export const createVideo = (req, res) => {
    // Create a new video using the Video mongoose model
    const newVideo = new Video(req.body);

    // Save it to database
    newVideo.save((err, video) => {
        if (err) {
            res.send(err);
        }
        console.log(video);
        res.json(video);
    });
};

// Get all videos
export const getVideos = (req, res) => {
    // Find all videos and sort by 'earnings'
    Video.find({}).sort({ earnings: -1 }).exec((err, videos) => {
        if (err) {
            res.send(err);
        }
        res.json(videos);
    });
};