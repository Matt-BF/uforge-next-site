import { allNews } from '../../../data'

export default function handler({ query: { id } }, res) {
    const filtered = allNews.filter((news) => news.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `news ${id} not found` })
    }
}