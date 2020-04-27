# Apollo codegen JSDoc demo

Apollo tooling can automatically generate typings based on your GraphQL schema. This is a quick demo to explore the possibilities to leverage these typings and typescript, but while writing the app in plain JS with JSDoc.

This repo includes only the client using Next.js, you will need the apollo server from https://github.com/apollographql/fullstack-tutorial running on `http://localhost:4000`.

Type declarations can be used directly in the JSDoc comments using the typescript specific import-syntax: https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#import-types but you don't have to do this if your types are wrapped in a namespace. `apollo client:codegen` has an option to do this automatically, but with limited support (https://github.com/apollographql/apollo-tooling/issues/1204), so we do this manually, see `types/schema.d.ts`. Use VS code for best experience.

Next.js has built in support for typescript, so it will do type checking when using the `dev` and `build` commands. The docs seem to suggest that babel still does the transpiling of the code, and the typescript compiler is used only to do type checking (https://nextjs.org/docs/basic-features/typescript).

`types:generate` searches for any graphQL operations in the `queries` folder, and generates types based on your schema. These will be placed in `types/schema.ts`. This requires the server to be available on `http://localhost:4000`.
