#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 -U "${POSTGRES_USER}" <<-EOSQL
  CREATE USER tripbot_discord WITH PASSWORD 'P@ssw0rd';
  GRANT ALL PRIVILEGES ON DATABASE tripsit TO tripbot_discord;
EOSQL
