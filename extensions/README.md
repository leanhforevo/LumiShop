# LumiShop Extensions

This folder contains Shopify-facing extension scaffolds.

## Current direction
LumiShop uses storefront integration only for **product detail page video display**.
It does not replace the merchant's native product media gallery.

## Included scaffold
- `theme-app-extension/blocks/product-video.liquid`

## Intended behavior
- admin app manages generation and publish state
- backend exposes published video mapping per product
- storefront block renders the clip on the product detail page only
