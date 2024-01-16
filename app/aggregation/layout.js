import AppBar from '../ui/header'
import Container from '@mui/material/Container'

export const metadata = {
    description: '内容聚合中心'
}

export default function Layout({ children }) {
    return (
        <>
            <AppBar />
            <Container maxWidth="xl">
                {children}
            </Container>
        </>
    )
}