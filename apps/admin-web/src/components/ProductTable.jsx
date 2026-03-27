export function ProductTable({ products = [] }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Status</th>
          <th>Theme</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.title}>
            <td>{product.title}</td>
            <td>{product.status}</td>
            <td>{product.theme}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
