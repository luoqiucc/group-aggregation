import sql from '@/service/db'

export async function findItem(page, size) {
    const start = (Number(page) - 1) * Number(size)

    const statement = `
        SELECT * FROM items
        LIMIT ?, ?
    `

    const [rows, fields] = await sql.execute(statement, [`${start}`, `${size}`])

    return rows
}
