import { useParams } from 'react-router-dom';

export const ProductDetail = () => {

  const params = useParams();

  return (
    <main>
      <div className="component">Product {params.id} - Detail</div>
    </main>
  )
}
