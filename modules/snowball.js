'use strict'
var express = require('express');

class SnowballCMS {
    constructor(config, app) {
        this.app = app || express();
        this.config = SnowballCMS.initConfig(config);
        this.server = null;

        // TODO: / should route to the main app
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        });

        // TODO: Admin files should authenticate
        this.app.use('/admin', express.static('admin'));
    }

    static initConfig(config) {
        config = config || {};
        config.port = (typeof config.port === 'boolean') ? config.port : 3000;
        return config;
    }

    run() {
        this.server = this.app.listen(this.config.port, () => {
            let host = this.server.address().address;
            let port = this.server.address().port;

            console.log(`Example app listening at http://localhost:${port}`);
        });
    }
}

module.exports = SnowballCMS;
