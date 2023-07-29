# TripSit's Database

This is TripBot's database.

Or more accurately, these are the tools we use to administrate the postgres container that tripbot connects with to access data.

# How to use this
Very Important: Copy the .env.example to .env

- rebuild:postgres - Starts a blank postgres container and runs a startup script that creates users.
- rebuild:knex     - (Required to run on first start) Runs migrations to update the database with the current schema.
- rebuild:api      - (Optional) An express API that connects to the database.
- rebuild:pgadmin  - (Optional) A web interface for the database.
- rebuild:all      - Runs all of the above commands.

# How this all works together
Postgres container will just sit there and receive instructions.
Knex container will run migrations and seed the database. This doesn't need to keep running after it starts tbh.
API container will run the express server that the website uses to communicate with the database.
PGAdmin container is a web interface for the database, and is useful for debugging and testing.

You likely will only ever need to restart the API container if you're working on the API. 
Restarting the Knex container will re-run the migrations, so it's safe to just leave it running.
Nothing changes on PGadmin restart, there's no point to restarting it.
Postgres just sits there, and should not ever have issues. Restarting should never really be necessary.

# How this was built
I followed a few guides for this:

First was super helpful to setting up everything from scratch:
https://github.com/mrwade/ultimate-node-stack/
https://kevinwwwade.medium.com/the-ultimate-node-docker-setup-step-by-step-2022-update-2927b8ca547c

Second was helpful in learning API design:
https://github.com/rashidmajeed/node-knex-postgres-docker

# Things to do
* Port over the existing API
* Expand on the new API
* GraphQL? / Apollo?
