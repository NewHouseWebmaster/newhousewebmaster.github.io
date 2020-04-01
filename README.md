# New House

## Code behind the New House Website

## Website found at: https://newhouse.mit.edu (or newhousewebmaster.github.io)

Development Instructions:


Make changes in *source* branch.


    $ yarn build
    $ git add -A
    $ git commit -m "new build"
    $ git checkout master
	
	
Delete all files in *master*, except for CNAME and .gitkeep.


    $ git checkout source -- build
    $ cp -r build/* 
		
		
Move contents of build to root directory, delete the now-empty build folder.


    $ git add -A
    $ git commit -m "Commit message"
    $ git push
		
		
Wait for gh-pages to update. :)
