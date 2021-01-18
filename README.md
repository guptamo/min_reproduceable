## The main issue
It appears that the emitted bundle doesn't expose an export object. At build time no errors or warnings are thrown and everything seems normal. If you try to use the component in the dev server by importing the default export (HierarchyBuilder) from src/index.js the component renders fine with no errors.

The issue appears when you try to import the component from the emitted bundle in the the node output

```bash
export 'default' (imported as 'HierarchyBuilder') was not found in './dist/hierarchy-builder'
```

The error shown in the browser console indicates that the webpack module material-ui/core/styles is undefined. To me it looks like an externals issue. I've tried a bunch of different configurations and permutations for the @material-ui external configuration to no success.

If you open the 

## To Build
    ```bash
    npm i && npm run build
    ```

## To Test
Run the dev server with `npm run dev`
