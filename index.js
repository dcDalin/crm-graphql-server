import express from 'express';
import {
    graphqlExpress,
    graphiqlExpress
} from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

const app = express();

const PORT = 4000;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(PORT, () => console.log(
    `Server running on port ${PORT}`
));