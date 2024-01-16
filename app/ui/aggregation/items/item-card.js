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

export default function ItemCard() {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        U
                    </Avatar>
                }
                title="风暴角Project"
                subheader="永远滴神 | 2023.01.23"
            />
            <CardMedia
                component="img"
                height="194"
                image="/images/cover.png"
                alt="cover"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions>
                <Dialog description={'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'} />
                <Button variant="contained" startIcon={<ContentCopyIcon />}>
                    复制磁链
                </Button>
            </CardActions>
        </Card>
    )
}