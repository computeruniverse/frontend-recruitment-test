import type { Price, PriceRaw } from '@/data/product';

/**
 * Returns the price the customer has to pay for a product.
 */
export function getSellingPrice(price: Price): PriceRaw {
    return price.PriceRaw;
}

/**
 * Formats a price for display using the locale and currency provided by the backend.
 */
export function formatPrice(price: PriceRaw): string {
    return new Intl.NumberFormat(price.Currency.DisplayLocale, {
        style: 'currency',
        currency: price.Currency.CurrencyCode,
        maximumFractionDigits: 0,
    }).format(price.Value);
}
