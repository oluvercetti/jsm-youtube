import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"


const ChannelCard = ({ channelDetail, marginTop }) => {
    const channelId = channelDetail?.id?.channelId;
    const channelTitle = channelDetail?.snippet?.title;
    const channelThumbnail = channelDetail?.snippet?.thumbnails?.high?.url;
    const channelSubscribers = channelDetail?.statistics?.subscriberCount;
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "320px",
                margin: "auto",
                marginTop,
                maxWidth: {xs: "358px", sm: "358px", md: "320px" }
            }}>
            <Link to={`/channel/${channelId}`}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "#FFF"
                    }}>
                    <CardMedia
                        image={channelThumbnail || demoProfilePicture}
                        alt={channelTitle}
                        sx={{ width: "180px", height: "180px", borderRadius: "50%", margin: "0 auto", mb: 2, border: "1px solid #e3e3e3" }}
                    />
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                    >
                        {channelTitle || "Channel Name"}
                        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
                    </Typography>
                    {channelSubscribers && (
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            color="gray"
                        >
                            {parseInt(channelSubscribers).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard