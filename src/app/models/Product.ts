export interface Product {
    items: Array<ProductItem>
}

export interface ProductItem {
    title: string;
    description: string;
    price: number;
}