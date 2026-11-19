import type { AssetModel, Product } from '@/data/product';

/**
 * Returns the main product image, e.g. for product tiles.
 */
export function getMainImage(product: Product): AssetModel | undefined {
    return product.AssetModels.find((asset) => asset.Type === 'PICTURE');
}

/**
 * Returns all images of a product in display order, e.g. for an image gallery.
 */
export function getGalleryImages(product: Product): AssetModel[] {
    return product.AssetModels.filter((asset) => asset.Type === 'PICTURE').sort((a, b) => a.SortId - b.SortId);
}
