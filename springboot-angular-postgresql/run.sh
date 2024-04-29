docker rm -f myappcompose_dccmdatabase_1
docker rm -f myappcompose_springbootbackend_1
docker rm -f myappcompose_angularfrontend_1

docker rmi myappcompose_springbootbackend
docker rmi myappcompose_angularfrontend

cd demo
./gradlew clean build -x test
cd ..

cd ng-test04232120
npm clean-install
npm run build
cd ..

docker-compose up --build
