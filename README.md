# sequelize-postgres-react

experimenting with sequelize in node API and reactjs front-end

## Local Installation

#### Make sure you have PostgreSQL already installed

1. Clone this repo.
```
git clone 
```
2. `cd` into the directory and install dependencies.
```
npm install
```
3. create an `.env` file in the working directory and include your database credentials if necessary.
```
DB_HOST="127.0.0.1"
DB_PORT="3306"
DB_USER="root" 
DB_PASS="password"
```
4. Create the database.
```
createdb dev_sequelizepostgres
```
5. Run migration to create tables.
```
npm run db:migrate
```
6. Start server locally in development mode.
```
npm run dev
```