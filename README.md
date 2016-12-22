# Express static HTML

Just a basic example of website built with:

- node
- Express
- Pug
- Sass

## Install

> Project in Docker container

    docker-compose -f docker/docker-compose_dev.yml build
    docker-compose -f docker/docker-compose_dev.yml up -d

After `up`, go to [http://dockerhost:8520](http://dockerhost:8520) or change configuration in docker-compose file.

## Testing

> In container

    npm test
    npm run testJunit
    
> `testJunit` create `test/test-results.xml` file
