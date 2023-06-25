# TripSit's Database


# How this was built

Gather round people of unspecified gender, and I shall tell you a tale of how this database was built.

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
