# New House

## Code behind the New House Website

## Website found at: https://newhouse.mit.edu (or newhousewebmaster.github.io)

Development Instructions:


Make changes in *source* branch.

To run hotloader:

    $ yarn install
    $ yarn run hotloader
    
    
To deploy changes:

    $ yarn build
    $ git add -A
    $ git commit -m "commit message"
    $ git checkout master
    
    //remove files except for CNAME, .gitignore, .gitkeep, node_modules
    $ rm -r static
    $ rm asset-manifest.json
    $ rm index.html
    $ rm precache-manifest{whatever this file is called}
    $ rm service-worker.js
    
    //copy build folder from source and empty contents
    $ git checkout source -- build
    $ cp -r build/* . //REMEMBER THE PERIOD THE PERIOD IS IMPORTANT
    $ rm -r build
    $ git add -A
    $ git commit -m "Commit message"
    $ git push	
		
Wait for gh-pages to update. :)
