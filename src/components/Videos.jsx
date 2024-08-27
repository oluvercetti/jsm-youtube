import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from "./"

const Videos = ({ videos, direction="row" }) => {
    if (!videos?.length) return "Loading..."
    return (
        <Stack direction={direction} gap={2} flexWrap="wrap" justifyContent="space-around">
            {videos?.map((video) => {
                const id = video.id.videoId || video.id.channelId;
                return (
                    id && <Box key={id} sx={{ cursor: "pointer" }}>
                        {video.id.channelId && <ChannelCard channelDetail={video} />}
                        {video.id.videoId && <VideoCard video={video} />}
                    </Box>
                )
            })}
        </Stack>
    )
}

export default Videos