import express from 'express';
import bodyParser from 'body-parser';
import oauth2orize from 'oauth2orize';
import passport from 'passport';

const app = express();

app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

const server = oauth2orize.createServer();

app.use(passport.initialize());

app.get('/authorize',
    (req, res) => {

    }
);

app.post('/token',
    (req, res) => {

    }
);

app.listen(3000, () => {
    console.log("OAuth server is running on port 3000.")
});