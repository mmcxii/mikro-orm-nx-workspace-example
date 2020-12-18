# NX Workspace Example

1. Install dependencies via `yarn` or `npm install` (delete the `yarn.lock` if you use npm)

2. Run `docker-compose up -d` to start the postgres database and adminer dashboard

3. Create database schema via `mikro-orm schema:create --run`. This will also create the database if it does not exist

4. Run using `nx serve api`

5. API will be available at http://localhost:3333
