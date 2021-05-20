import { useRouter } from 'next/router'
import { server } from '../../../config'


const product = ({ product }) => {

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        Os produtos
        {product.subproducts.map((subproduct, idx) => <p key={idx}>{subproduct.title}</p>)}
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
