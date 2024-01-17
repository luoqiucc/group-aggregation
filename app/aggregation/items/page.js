import ItemCardWrapper from '@/app/ui/aggregation/items/item-card-wrapper'
import Grid from '@mui/material/Unstable_Grid2'
import TitleCard from '@/app/ui/aggregation/title-card'
import { findItem } from '@/service/item'

export default async function Page() {
    const itemList = await findItem('1', '5')

    const TitleCardTitle = '资源汇总'
    const TitleCardSubTitle = '========'
    const TitleCardDescription = '这里收集了在XXX中出现的所有资源，对于需要下载的档案可自行通过我们提供的磁力链接来获取'

    return (
        <>
            <Grid paddingTop={3} container spacing={2}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <TitleCard
                        title={TitleCardTitle}
                        subTitle={TitleCardSubTitle}
                        description={TitleCardDescription}
                        target={'home'} />
                </Grid>

                <ItemCardWrapper items={itemList} />
            </Grid>
        </>
    )
}