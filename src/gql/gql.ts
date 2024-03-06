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
    "mutation CartFindOrCreateAndAddProduct($productId: String!, $quantity: Int, $cartId: ID) {\n  cartFindOrCreate(\n    input: {items: {productId: $productId, quantity: $quantity}}\n    id: $cartId\n  ) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n      }\n    }\n  }\n}": types.CartFindOrCreateAndAddProductDocument,
    "query CartGetById($cartId: ID!) {\n  order(id: $cartId) {\n    id\n  }\n}": types.CartGetByIdDocument,
    "query CategoriesGetList {\n  categories {\n    data {\n      name\n      slug\n      products {\n        images {\n          url\n        }\n      }\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionsGetList {\n  collections {\n    data {\n      name\n      slug\n      products {\n        images {\n          url\n        }\n      }\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    slug\n    description\n    rating\n    categories {\n      slug\n      name\n    }\n    images {\n      url\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String) {\n  category(slug: $slug) {\n    slug\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetByQuery($query: String) {\n  products(search: $query) {\n    data {\n      id\n      name\n      price\n      categories {\n        name\n      }\n      images {\n        url\n      }\n    }\n  }\n}": types.ProductsGetByQueryDocument,
    "query ProductsGetList {\n  products(take: 40) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetRelatedList($catSlug: String) {\n  category(slug: $catSlug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetRelatedListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreateAndAddProduct($productId: String!, $quantity: Int, $cartId: ID) {\n  cartFindOrCreate(\n    input: {items: {productId: $productId, quantity: $quantity}}\n    id: $cartId\n  ) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFindOrCreateAndAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($cartId: ID!) {\n  order(id: $cartId) {\n    id\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      name\n      slug\n      products {\n        images {\n          url\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      name\n      slug\n      products {\n        images {\n          url\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    slug\n    description\n    rating\n    categories {\n      slug\n      name\n    }\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
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


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
