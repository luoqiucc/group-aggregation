import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Button from '@mui/material/Button'

import Dialog from '@/app/ui/dialog'

export default function ItemCard(props) {

    const {
        create_time,
        uuid,
        group_name,
        star,
        description,
        detail,
        cover,
        torrent,
        download_url
    } = props['info']

    const date = new Date(create_time)
    const time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        U
                    </Avatar>
                }
                title={group_name}
                subheader={`${star} | ${time}`}
            />
            <CardMedia
                component="img"
                height="194"
                image="/images/cover.png"
                alt="cover"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Dialog description={detail} />
                <Button variant="contained" startIcon={<ContentCopyIcon />}>
                    复制磁链
                </Button>
            </CardActions>
        </Card>
    )
}