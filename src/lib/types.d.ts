export interface Welcome {
    status:     string;
    request_id: string;
    data:       Data;
}

export interface Data {
    total_products: number;
    country:        string;
    domain:         string;
    products:       Product[];
}

export interface Product {
    asin:                        string;
    product_title:               string;
    product_price:               null | string;
    product_original_price:      null | string;
    currency:                    Currency | null;
    product_star_rating:         string;
    product_num_ratings:         number;
    product_url:                 string;
    product_photo:               string;
    product_num_offers:          number;
    product_minimum_offer_price: null | string;
    is_best_seller:              boolean;
    is_amazon_choice:            boolean;
    is_prime:                    boolean;
    climate_pledge_friendly:     boolean;
    sales_volume:                string;
    delivery:                    string;
    has_variations:              boolean;
    product_availability?:       string;
}

export enum Currency {
    Usd = "USD",
}
