up:
	docker-compose --env-file .env up

down:
	docker-compose --env-file .env down
	docker rmi cloud-hw5_ais3

test_sql:
	docker-compose -f test.yml --env-file .env up

test_down:
	docker-compose -f test.yml --env-file .env down