import PeriodicalCard from '@/app/ui/aggregation/periodicals/periodical-card'
import Grid from '@mui/material/Unstable_Grid2'
import TitleCard from '@/app/ui/aggregation/title-card'

export default function Page() {

    const TitleCardTitle = '群刊'
    const TitleCardSubTitle = '========'
    const TitleCardDescription = '群刊在这里'

    return (
        <>
            <Grid paddingTop={4} container spacing={2}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <TitleCard title={TitleCardTitle}
                        subTitle={TitleCardSubTitle}
                        description={TitleCardDescription}
                        target={'home'} />
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