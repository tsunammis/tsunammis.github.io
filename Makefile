.PHONY: deploy
deploy:
	docker-compose build build
	docker-compose run build
	docker-compose build deploy
	docker-compose run deploy