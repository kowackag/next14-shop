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
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    price\n    slug\n    description\n    categories {\n      id\n      name\n    }\n    images {\n      url\n      height\n      width\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images {\n    url\n  }\n  price\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      price\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      price\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetCategories {\n  categories {\n    id\n    name\n    slug\n    products(first: 1) {\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}": types.ProductsGetCategoriesDocument,
    "query ProductsGetCollection {\n  collections {\n    id\n    name\n    slug\n    products {\n      images {\n        url\n      }\n    }\n  }\n}": types.ProductsGetCollectionDocument,
    "query ProductsGetList {\n  products(first: 10) {\n    ...ProductListItemFragment\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    price\n    slug\n    description\n    categories {\n      id\n      name\n    }\n    images {\n      url\n      height\n      width\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      price\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      price\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCategories {\n  categories {\n    id\n    name\n    slug\n    products(first: 1) {\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCollection {\n  collections {\n    id\n    name\n    slug\n    products {\n      images {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(first: 10) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}