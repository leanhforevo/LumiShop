export function StorefrontPreviewCard() {
  return (
    <div className="panel storefront-preview">
      <div className="panel-header">
        <h2>Product detail preview</h2>
        <span className="badge">Storefront</span>
      </div>
      <div className="storefront-card">
        <div className="storefront-media">Video block area</div>
        <div className="storefront-copy">
          <strong>Shown only on product detail page</strong>
          <p>
            This block represents the lightweight clip placement for the product
            page, without changing the base product media gallery.
          </p>
        </div>
      </div>
    </div>
  );
}
