# start dev 
npm start

# start prod
check packages.json

# if you see sass errors, please ensure to reinstall node-sass
npm install node-sass

# release (docker operations within the docker terminal pls)

1. (sudo) docker build -t nodexchange/marcin-js-app:dev .
2. (sudo) docker push nodexchange/marcin-js-app:dev
(while uploading you can do below)
3. ssh root@104.236.36.61
4. docker ps -a
5. docker stop [container id]
6. docker rm `docker ps --no-trunc -aq`
7. docker pull nodexchange/marcin-js-app:dev
8. docker run -d -p 3000:3000 -e'PORT=3000' nodexchange/marcin-js-app:dev
9. exit

# with wercker
1. git commit
2. docker build -t nodexchange/marcin-js-app:dev .
3. docker push nodexchange/marcin-js-app:dev
4. git push (this will start wercker etc.);

# new pipline
1. git commit 
2. git push

#V3 (no docker) Dec 2018
1. ssh root@104.236.36.61
2. pm2 list
3. pm2 stop quartile
4. git pull  // from v3 branch
<!-- 5. pm2 start npm || pm2 start npm -- start:production -->
pm2 start pm2-starter.json
~ OR ~
pm2 restart quartile 
