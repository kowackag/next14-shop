/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartAddProductMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CartAddProductMutation = { cartAddItem: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, slug: string, price: number, images: Array<{ url: string }> } }> } };

export type CartChangeProductQuantityMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartChangeProductQuantityMutation = { cartChangeItemQuantity: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, slug: string, price: number, images: Array<{ url: string }> } }> } };

export type CartFindOrCreateAndAddProductMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  cartId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CartFindOrCreateAndAddProductMutation = { cartFindOrCreate: { id: string, items: Array<{ quantity: number, product: { id: string, name: string } }> } };

export type CartGetByIdQueryVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, slug: string, price: number, images: Array<{ url: string }> } }> } | null };

export type CartItemsFragment = { items: Array<{ quantity: number, product: { id: string, name: string, slug: string, price: number, images: Array<{ url: string }> } }> };

export type CartQuantityGetByIdQueryVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;


export type CartQuantityGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number }> } | null };

export type CartRemoveProductMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type CartRemoveProductMutation = { cartRemoveItem: { id: string } };

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetListQuery = { categories: { data: Array<{ name: string, slug: string, products: Array<{ images: Array<{ url: string }> }> }> } };

export type CategoriesGetNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetNamesQuery = { categories: { data: Array<{ name: string, slug: string }> } };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: { data: Array<{ name: string, slug: string, products: Array<{ images: Array<{ url: string }> }> }> } };

export type CollectionsGetNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetNamesQuery = { collections: { data: Array<{ name: string, slug: string }> } };

export type CommentAddToProductMutationVariables = Exact<{
  description: Scalars['String']['input'];
  author: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type CommentAddToProductMutation = { reviewCreate: { id: string } };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, price: number, slug: string, description: string, rating?: number | null, categories: Array<{ slug: string, name: string }>, images: Array<{ url: string }>, reviews: Array<{ id: string, createdAt: unknown, rating: number, author: string, description: string }> } | null };

export type ProductListItemFragment = { id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string }> };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetByCategorySlugQuery = { category?: { slug: string, name: string, products: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } | null };

export type ProductsGetByCollectionSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetByCollectionSlugQuery = { collection?: { name: string, products: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } | null };

export type ProductsGetByQueryQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetByQueryQuery = { products: { data: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ProductsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ProductsGetRelatedListQueryVariables = Exact<{
  catSlug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetRelatedListQuery = { category?: { products: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } | null };

export type ProductsGetSortedListQueryVariables = Exact<{
  sortBy?: InputMaybe<ProductSortBy>;
}>;


export type ProductsGetSortedListQuery = { products: { data: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ReviewsGetByProductIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReviewsGetByProductIdQuery = { product?: { reviews: Array<{ id: string, createdAt: unknown, rating: number, author: string, description: string }> } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartItemsFragmentDoc = new TypedDocumentString(`
    fragment CartItems on Cart {
  items {
    product {
      id
      name
      slug
      price
      images {
        url
      }
    }
    quantity
  }
}
    `, {"fragmentName":"CartItems"}) as unknown as TypedDocumentString<CartItemsFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($cartId: ID!, $productId: String!, $quantity: Int) {
  cartAddItem(
    id: $cartId
    input: {item: {productId: $productId, quantity: $quantity}}
  ) {
    id
    ...CartItems
  }
}
    fragment CartItems on Cart {
  items {
    product {
      id
      name
      slug
      price
      images {
        url
      }
    }
    quantity
  }
}`) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartChangeProductQuantityDocument = new TypedDocumentString(`
    mutation cartChangeProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {
    id
    ...CartItems
  }
}
    fragment CartItems on Cart {
  items {
    product {
      id
      name
      slug
      price
      images {
        url
      }
    }
    quantity
  }
}`) as unknown as TypedDocumentString<CartChangeProductQuantityMutation, CartChangeProductQuantityMutationVariables>;
export const CartFindOrCreateAndAddProductDocument = new TypedDocumentString(`
    mutation CartFindOrCreateAndAddProduct($productId: String!, $quantity: Int, $cartId: ID) {
  cartFindOrCreate(
    input: {items: {productId: $productId, quantity: $quantity}}
    id: $cartId
  ) {
    id
    items {
      quantity
      product {
        id
        name
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartFindOrCreateAndAddProductMutation, CartFindOrCreateAndAddProductMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($cartId: ID!) {
  cart(id: $cartId) {
    id
    ...CartItems
  }
}
    fragment CartItems on Cart {
  items {
    product {
      id
      name
      slug
      price
      images {
        url
      }
    }
    quantity
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartQuantityGetByIdDocument = new TypedDocumentString(`
    query CartQuantityGetById($cartId: ID!) {
  cart(id: $cartId) {
    id
    items {
      quantity
    }
  }
}
    `) as unknown as TypedDocumentString<CartQuantityGetByIdQuery, CartQuantityGetByIdQueryVariables>;
export const CartRemoveProductDocument = new TypedDocumentString(`
    mutation CartRemoveProduct($productId: ID!, $id: ID!) {
  cartRemoveItem(productId: $productId, id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveProductMutation, CartRemoveProductMutationVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    data {
      name
      slug
      products {
        images {
          url
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoriesGetNamesDocument = new TypedDocumentString(`
    query CategoriesGetNames {
  categories {
    data {
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetNamesQuery, CategoriesGetNamesQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections {
    data {
      name
      slug
      products {
        images {
          url
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const CollectionsGetNamesDocument = new TypedDocumentString(`
    query CollectionsGetNames {
  collections {
    data {
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetNamesQuery, CollectionsGetNamesQueryVariables>;
export const CommentAddToProductDocument = new TypedDocumentString(`
    mutation CommentAddToProduct($description: String!, $author: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  reviewCreate(
    description: $description
    productId: $productId
    rating: $rating
    title: $title
    author: $author
    email: $email
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CommentAddToProductMutation, CommentAddToProductMutationVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    id
    name
    price
    slug
    description
    rating
    categories {
      slug
      name
    }
    images {
      url
    }
    reviews {
      id
      createdAt
      rating
      author
      description
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($slug: String) {
  category(slug: $slug) {
    slug
    name
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetByCollectionSlugDocument = new TypedDocumentString(`
    query ProductsGetByCollectionSlug($slug: String) {
  collection(slug: $slug) {
    name
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetByCollectionSlugQuery, ProductsGetByCollectionSlugQueryVariables>;
export const ProductsGetByQueryDocument = new TypedDocumentString(`
    query ProductsGetByQuery($query: String) {
  products(search: $query) {
    data {
      id
      name
      price
      categories {
        name
      }
      images {
        url
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetByQueryQuery, ProductsGetByQueryQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList {
  products(take: 40) {
    data {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetRelatedListDocument = new TypedDocumentString(`
    query ProductsGetRelatedList($catSlug: String) {
  category(slug: $catSlug) {
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetRelatedListQuery, ProductsGetRelatedListQueryVariables>;
export const ProductsGetSortedListDocument = new TypedDocumentString(`
    query ProductsGetSortedList($sortBy: ProductSortBy) {
  products(orderBy: $sortBy) {
    data {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetSortedListQuery, ProductsGetSortedListQueryVariables>;
export const ReviewsGetByProductIdDocument = new TypedDocumentString(`
    query ReviewsGetByProductId($id: ID!) {
  product(id: $id) {
    reviews {
      id
      createdAt
      rating
      author
      description
    }
  }
}
    `) as unknown as TypedDocumentString<ReviewsGetByProductIdQuery, ReviewsGetByProductIdQueryVariables>;