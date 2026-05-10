# Provider Integrations

## KingMMO
Confirmed provider endpoints so far:
- `profile.php`
- `products.php`
- `product.php`
- `order.php`
- `buy_product`

## Current backend plan
Cloud Functions exposes normalized provider-facing routes under:
- `/api/providers/kingmmo/profile`
- `/api/providers/kingmmo/products`
- `/api/providers/kingmmo/products/:productId`
- `/api/providers/kingmmo/orders/:orderId`
- `/api/providers/kingmmo/buy`

## Notes
- prefer POST for purchases
- do not log the full provider API key
- keep business logic wrapped behind internal service/controller layers
