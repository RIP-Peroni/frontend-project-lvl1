publish:
	--dry-run
lint:
	npx eslint .
build:
	rm -rf dist
	npm run build
