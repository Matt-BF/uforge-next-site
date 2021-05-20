import { useRouter } from 'next/router'
import { server } from '../../../config'
import Card from '../../../components/Card'

const product = ({ product }) => {

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <p>{product.description}</p>
      </div>
      <h2>Os produtos</h2>
      <div className="flex">
        {product.subproducts.map((subproduct, idx) => <Card key={idx} title={subproduct.title} text={subproduct.description} />)}
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/products/${context.params.id}`)
  const product = await res.json()

  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/products`)

  const products = await res.json()
  const ids = products.map((product) => product.id)

  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default product
