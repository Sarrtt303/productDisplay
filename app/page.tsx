// app/page.tsx
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <ProductGrid />
    </div>
  );
}