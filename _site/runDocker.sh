
CONTAINER_ID=$(docker ps -a | grep rohan-github-blog | awk '{print $1}')
echo "Stopping docker container with container id: $CONTAINER_ID"
docker stop $CONTAINER_ID
echo "Removing container with container id: $CONTAINER_ID"
docker rm $CONTAINER_ID
echo "Starting docker container"
docker run --name rohan-github-blog -p 4000:4000 --volume=$PWD:/srv/jekyll -it jekyll/jekyll jekyll serve --watch --drafts
