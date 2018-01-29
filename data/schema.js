import {
    makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
    type Query {
        randomString: String
    }
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema, mocks });

export default schema;