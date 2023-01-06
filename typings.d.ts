type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends Base {
    body: Block[];
    mainImage: Image;
    slug: Slug;
    title: string;
    subTitle: string;
    description: string;
}

interface Product extends Base {
    image: Image[];
    name: string;
    slug: Slug;
    categories: Category[];
    type: string;
    variants: Product[];
    price: number;
    discount: number;
    sizes: any[];
    desc: Block[];
    products: Product[];
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}

type SocialLogo = {
    name: string;
    link: string;
}