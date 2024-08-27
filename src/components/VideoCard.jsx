import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

const VideoCard = ({ video }) => {
    const { id, snippet } = video;
    const videoId = id?.videoId;
    const imageUrl = snippet?.thumbnails?.high?.url;
    const title = snippet?.title;
    const channelId = snippet?.channelId;
    const channelTitle = snippet?.channelTitle;


    return (
        <Card sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={imageUrl || demoThumbnailUrl} alt={title} sx={{ width: { xs: "100%", sm: "358px"}, height: 180 }} />
            </Link>
            <CardContent sx={{ backgroundColor: "#1e1e1e", height: " 106px" }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {title?.slice(0, 60) || demoVideoTitle?.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="gray">
                        {channelTitle?.slice(0, 60) || demoChannelTitle?.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard