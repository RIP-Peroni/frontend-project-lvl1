publish:
	--dry-run
lint:
	npx eslint .
test:
	npm test
build:
	rm -rf dist
	npm run build
