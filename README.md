# php-heroku-boilerplate

# Add MySQL: _ClearDB_ addon

Create the addon in your project
```
heroku addons:create cleardb:ignite
```

Get the credentials to connect to the database
```
heroku config | grep CLEARDB_DATABASE_URL
```

Handle connection to database with __DataGrip__ or similar.
