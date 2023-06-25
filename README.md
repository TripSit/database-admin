# TripSit's Database

This is TripSit's database.

Or more accurately, these are the tools we use to administrate the postgres container.

# How to use this
Run 'rebuild:all' to setup the services:
* database          - A postgres container
* database_frontend - PGAdmin4
  http://localhost:8081
* database_backend  - An express server with a prisma API and knex migration scripts 
  http://localhost:5000
  http://localhost:5000/api/v1
  http://localhost:5000/api/v2
  http://localhost:5000/api/v2/drugs
  http://localhost:5000/api/v2/drugs/dxm

Note: Use 'rebuild:be' to /only/ rebuild the backend stuff: The other containers hardly ever need to be restarted.

Once the containers are running, run 'db:update' to run the knex scripts:
* Migrate to the latest version
* Seed the database
* Update the prisma schema
* Generate the prisma client
* Rebuild typescript definitions for use in other projects

That's about it, you can now go to http://localhost:8081 and login using the info in the docker-compose.yml file.
Hint: Username 'user@tripsit.me' and password 'SuperSecret123'

# How this was built
I followed a few guides for this:

First was super helpful to setting up everything from scratch:
https://github.com/mrwade/ultimate-node-stack/
https://kevinwwwade.medium.com/the-ultimate-node-docker-setup-step-by-step-2022-update-2927b8ca547c

Second was helpful in learning API design:
https://github.com/rashidmajeed/node-knex-postgres-docker

We're using the stock postgres image in a docker container.

This 'database' container is supported by the 'database_backend' container:
* Runs Knex scripts like Migration, Seeding and other Queries
* Hosts the express server that the website uses to communicate with the database

Separately, this setup is supported by the PGAdmin4 'database_frontend' container.
* This is a web interface for the database, and is useful for debugging and testing.

# Things to do
* Port over the existing API
* Expand on the new API
* GraphQL? / Apollo?
