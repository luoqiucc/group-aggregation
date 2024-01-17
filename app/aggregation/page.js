import PeriodicalCard from '@/app/ui/aggregation/periodicals/periodical-card'
import ItemCardWrapper from '@/app/ui/aggregation/items/item-card-wrapper'
import Grid from '@mui/material/Unstable_Grid2'
import TitleCard from '@/app/ui/aggregation/title-card'
import { findItem } from '@/service/item'

export default async function Page() {
    const itemList = await findItem('1', '1')

    const ItemTitleCardTitle = '资源汇总'
    const ItemTitleCardSubTitle = '========'
    const ItemTitleCardDescription = '这里收集了在XXX中出现的所有资源，对于需要下载的档案可自行通过我们提供的磁力链接来获取'

    const PeriodicalTitleCardTitle = '群刊'
    const PeriodicalTitleCardSubTitle = '========'
    const PeriodicalTitleCardDescription = '群刊在这里'

    return (
        <>
            <Grid paddingTop={3} container spacing={2}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <TitleCard
                        title={ItemTitleCardTitle}
                        subTitle={ItemTitleCardSubTitle}
                        description={ItemTitleCardDescription}
                        target={'items'} />
                </Grid>
                <ItemCardWrapper items={itemList}/>
            </Grid>
            <Grid paddingTop={4} container spacing={2}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <TitleCard
                        title={PeriodicalTitleCardTitle}
                        subTitle={PeriodicalTitleCardSubTitle}
                        description={PeriodicalTitleCardDescription}
                        target={'periodicals'} />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <PeriodicalCard />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <PeriodicalCard />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <PeriodicalCard />
                </Grid>
            </Grid>
        </>
    )
}