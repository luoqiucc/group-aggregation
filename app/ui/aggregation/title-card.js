'use client'

import { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function TitleCard(props) {
    const [buttonText, setButtonText] = useState('查看全部')
    const {
        site = '内容聚合中心',
        title = 'null',
        subTitle = 'null',
        description = 'null',
        target = 'null'
    } = props

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {site}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {subTitle !== 'null' && (
                        <>
                            {subTitle}
                        </>
                    )}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            {target === 'home' ? (
                <CardActions>
                    <Link href={`/aggregation`}>
                        <Button onClick={() => {
                            setButtonText('正在加载...')
                        }} size="small">返回首页</Button>
                    </Link>
                </CardActions>
            ) : (
                <CardActions>
                    <Link href={`/aggregation/${target}`}>
                        <Button onClick={() => {
                            setButtonText('正在加载...')
                        }} size="small">{buttonText}</Button>
                    </Link>
                </CardActions>
            )}
        </Card>
    )
}