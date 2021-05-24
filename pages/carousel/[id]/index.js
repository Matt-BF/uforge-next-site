import { server } from '../../../config'

const carouselNews = ({ news }) => {
    return (
        <div>
            <h1>{news.title}</h1>
            <p>{news.text}</p>
        </div>
    )
}
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/carouselNews/${context.params.id}`)
    const news = await res.json()

    return {
        props: {
            news,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/carouselNews`)

    const allNews = await res.json()
    const ids = allNews.map((news) => news.id)

    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}
export default carouselNews
