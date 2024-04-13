/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($cartId: ID!, $productId: String!, $quantity: Int) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n    ...CartItems\n  }\n}": types.CartAddProductDocument,
    "mutation cartChangeProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n    ...CartItems\n  }\n}": types.CartChangeProductQuantityDocument,
    "mutation CartFindOrCreateAndAddProduct($productId: String!, $quantity: Int, $cartId: ID) {\n  cartFindOrCreate(\n    input: {items: {productId: $productId, quantity: $quantity}}\n    id: $cartId\n  ) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n      }\n    }\n  }\n}": types.CartFindOrCreateAndAddProductDocument,
    "query CartGetById($cartId: ID!) {\n  cart(id: $cartId) {\n    id\n    ...CartItems\n  }\n}": types.CartGetByIdDocument,
    "fragment CartItems on Cart {\n  items {\n    product {\n      id\n      name\n      slug\n      price\n      images {\n        url\n      }\n    }\n    quantity\n  }\n}": types.CartItemsFragmentDoc,
    "query CartQuantityGetById($cartId: ID!) {\n  cart(id: $cartId) {\n    id\n    items {\n      quantity\n    }\n  }\n}": types.CartQuantityGetByIdDocument,
    "mutation CartRemoveProduct($productId: ID!, $id: ID!) {\n  cartRemoveItem(productId: $productId, id: $id) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "query CategoriesGetList {\n  categories {\n    data {\n      name\n      slug\n      products {\n        images {\n          url\n        }\n      }\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CategoriesGetNames {\n  categories {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CategoriesGetNamesDocument,
    "query CollectionsGetList {\n  collections {\n    data {\n      name\n      slug\n      products {\n        images {\n          url\n        }\n      }\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query CollectionsGetNames {\n  collections {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetNamesDocument,
    "mutation CommentAddToProduct($description: String!, $author: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    description: $description\n    productId: $productId\n    rating: $rating\n    title: $title\n    author: $author\n    email: $email\n  ) {\n    id\n  }\n}": types.CommentAddToProductDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    slug\n    description\n    rating\n    categories {\n      slug\n      name\n    }\n    images {\n      url\n    }\n    reviews {\n      id\n      createdAt\n      rating\n      author\n      description\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  price\n  rating\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String) {\n  category(slug: $slug) {\n    slug\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetByQuery($query: String) {\n  products(search: $query) {\n    data {\n      id\n      name\n      price\n      categories {\n        name\n      }\n      images {\n        url\n      }\n    }\n  }\n}": types.ProductsGetByQueryDocument,
    "query ProductsGetList {\n  products(take: 40) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetRelatedList($catSlug: String) {\n  category(slug: $catSlug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetRelatedListDocument,
    "query ProductsGetSortedList($sortBy: ProductSortBy) {\n  products(orderBy: $sortBy) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetSortedListDocument,
    "query ReviewsGetByProductId($id: ID!) {\n  product(id: $id) {\n    reviews {\n      id\n      createdAt\n      rating\n      author\n      description\n    }\n  }\n}": types.ReviewsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($cartId: ID!, $productId: String!, $quantity: Int) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n    ...CartItems\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation cartChangeProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n    ...CartItems\n  }\n}"): typeof import('./graphql').CartChangeProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreateAndAddProduct($productId: String!, $quantity: Int, $cartId: ID) {\n  cartFindOrCreate(\n    input: {items: {productId: $productId, quantity: $quantity}}\n    id: $cartId\n  ) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFindOrCreateAndAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($cartId: ID!) {\n  cart(id: $cartId) {\n    id\n    ...CartItems\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItems on Cart {\n  items {\n    product {\n      id\n      name\n      slug\n      price\n      images {\n        url\n      }\n    }\n    quantity\n  }\n}"): typeof import('./graphql').CartItemsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartQuantityGetById($cartId: ID!) {\n  cart(id: $cartId) {\n    id\n    items {\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartQuantityGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($productId: ID!, $id: ID!) {\n  cartRemoveItem(productId: $productId, id: $id) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      name\n      slug\n      products {\n        images {\n          url\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetNames {\n  categories {\n    data {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetNamesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      name\n      slug\n      products {\n        images {\n          url\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetNames {\n  collections {\n    data {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetNamesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CommentAddToProduct($description: String!, $author: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    description: $description\n    productId: $productId\n    rating: $rating\n    title: $title\n    author: $author\n    email: $email\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CommentAddToProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    slug\n    description\n    rating\n    categories {\n      slug\n      name\n    }\n    images {\n      url\n    }\n    reviews {\n      id\n      createdAt\n      rating\n      author\n      description\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  price\n  rating\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String) {\n  category(slug: $slug) {\n    slug\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByQuery($query: String) {\n  products(search: $query) {\n    data {\n      id\n      name\n      price\n      categories {\n        name\n      }\n      images {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(take: 40) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetRelatedList($catSlug: String) {\n  category(slug: $catSlug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetRelatedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSortedList($sortBy: ProductSortBy) {\n  products(orderBy: $sortBy) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetSortedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetByProductId($id: ID!) {\n  product(id: $id) {\n    reviews {\n      id\n      createdAt\n      rating\n      author\n      description\n    }\n  }\n}"): typeof import('./graphql').ReviewsGetByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
