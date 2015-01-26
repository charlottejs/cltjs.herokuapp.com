
deploy:
	@git checkout -b tmp-123-456
	@make precompile
	@git add public -f
	@git commit -m 'precompile assets'
	@git push heroku tmp-123-456:master -f
	@git checkout master
	@git branch -D tmp-123-456

precompile:
	@NODE_ENV=production webpack

