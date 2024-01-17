import Grid from '@mui/material/Unstable_Grid2'

import ItemCard from '@/app/ui/aggregation/items/item-card'

export default function ItemCardWrapper(props) {
    const items = props['items']

    return (
        <>
            {items.map((item) => {
                return (
                    <Grid key={item.uuid} xs={12} sm={6} md={4} lg={3}>
                        <ItemCard info={item} />
                    </Grid>
                )
            })}
        </>
    )
}