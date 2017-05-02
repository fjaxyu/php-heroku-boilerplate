# php-heroku-boilerplate

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Usage

[Heroku: PHP Getting Started](https://devcenter.heroku.com/articles/getting-started-with-php#introduction)

1. Clone repository
2. Code your stuff in `web`-folder
3. `git add .`
4. `git commit -m "Sweeet code!"`
5. `heroku create`
6. `git push heroku master`
7. `heroku ps:scale web=1`
8. `heroku open`

## Structure
* `web/` is the folder where you put your files.
* `Procfile` defines which command to run and where to serve the content from. Heroku needs this file to run the server.
```
# 'web:' is the command that heroku runs
# 'vendor/bin/heroku-php-apache2' is the package heroku runs
# 'web/' is the folder where the content is
web: vendor/bin/heroku-php-apache2 web/
```

* `app.json` is just metadata for _Heroku_. Nothing too important right now.
* `composer.json` is the config file for [composer](https://getcomposer.org/) which is like `npm` but for `php`. Composer installs dependencies. The main thing here is the line which specifies which version of `php` to run. Heroku will do the rest, just make sure there is a `composer.json`-file. You don't need to have `composer` installed, Heroku just needs this file.
```json
    "require": {
        "php": "^7.1.0"
    }
```
* `package.json` is just for running `gulp` with `browser-sync`. Not needed by Heroku, just for dev.
* `gulpfile.js` for running `gulp` with `browser-sync`.


## Add MySQL: _ClearDB_ addon

**Your database doesn't have to be hosted on the same server as your `php`-files. `PDO` can connect to any server that is publicly hosted. Heroku supplies an addon that creates a small dev-database for you. But you can use any other database.**

Create the addon in your project to create a new databased with `ClearDB`.
```
heroku addons:create cleardb:ignite
```

Get the credentials to connect to the database
```
heroku config | grep CLEARDB_DATABASE_URL
```

Handle connection to database with __DataGrip__ or similar program. This can't be handled via `phpMyAdmin` or on the `ClearDB`-website. `ClearDB` just supplies the database and not an interface to interact with it.
