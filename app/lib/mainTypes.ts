export type HeaderProps = {
  megaMenuList: any[];
}

export type FooterProps = {
  firstMenu: { title: string; page_link: []; }
}

export type ProductCardProps = {
  product: {
    id: number;
    name: string;
    slug: string;
    categories: string[];
    product_slug: string[];
    price: string;
    short_description: string;
    permalink: string;
    image: string
  };
};