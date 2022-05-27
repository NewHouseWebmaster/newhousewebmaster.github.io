# New House

## Code behind the New House Website

## Website found at: https://newhouse.mit.edu (or newhousewebmaster.github.io)

Development Instructions:


Make changes in *source* branch.

To run hotloader:
```bash
    $ yarn install
    $ yarn run hotloader
```

To deploy changes:
```bash
    $ yarn build
    $ cp ./CNAME ./build
    $ npx gh-pages -d build
```
Wait for gh-pages to update. :)
