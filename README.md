# New House

## Code behind the New House Website

## Website found at: https://newhouse.mit.edu (or newhousewebmaster.github.io)

Development Instructions:


Make changes in *source* branch.


    $ yarn build
    $ git add -A
    $ git commit -m "commit message"
    $ git checkout master
	
	
Delete all files and existing directories in *master*, except for CNAME and .gitkeep (you can ignore node_modules).


    $ git checkout source -- build
    $ cp -r build/* .
    $ rm -r build
    $ git add -A
    $ git commit -m "Commit message"
    $ git push
		
		
Wait for gh-pages to update. :)
