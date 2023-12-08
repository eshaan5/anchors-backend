import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    comments: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    earnings: {
        type: Number,
        required: true
    }
});

// Create the model using the schema
const Video = mongoose.model('Video', videoSchema);

// Export the model
export default Video;
