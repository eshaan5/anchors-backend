import Video from "../models/video.js";

// Create a new video
export const createVideo = (req, res) => {
    // Extract the video title from the request
    const videoTitle = req.body.title;

    // Try to find a video with the same title in the database
    Video.findOne({ title: videoTitle })
        .then(existingVideo => {
            // If a video with the same title is found, update its content
            if (existingVideo) {
                existingVideo.set(req.body); // Replace the existing video content
                return existingVideo.save();
            } else {
                // If no video with the same title is found, create a new one
                const newVideo = new Video(req.body);
                return newVideo.save();
            }
        })
        .then(savedVideo => {
            res.json(savedVideo);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};

// Get all videos
export const getVideos = (req, res) => {
    // Find all videos and sort by 'earnings'
    Video.find({}).sort({ earnings: -1 }).exec()
        .then((videos) => {
            console.log(videos);
            res.json(videos);
        })
        .catch((err) => {
            res.send(err);
        });
};