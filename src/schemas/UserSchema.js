import { buildSchema } from "../../node_modules/graphql"

export default class UserSchema {

    instance = null;

    static getInstance(){

        if(this.instance == null){

            this.instance = new UserSchema();

        }

        return this.instance;

    }

    getSchema(){

        const schema = buildSchema(`

            type User {

                id: ID
                name: String
                repo: String
                age: Int

            }

            type Query {

                user(id: ID!): User
                users: [User]

            }

            type Mutation {

                createUser(name: String!, repo: String!, age: Int!): User

            }

        `);

        return schema;

    }

}