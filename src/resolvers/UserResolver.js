import ExpressGraphql from "../../node_modules/express-graphql"
import UserSchema from "../schemas/UserSchema"

export default class UserResolver{

    instance = null;

    userSchema = UserSchema.getInstance();

    static getInstance(){

        if(this.instance == null){

            this.instance = new UserResolver();

        }

        return this.instance;


    }

    getMiddleware(){

        const providers = {

            users: []

        };

        let id = 0;

        const resolvers = {

            user({id}){

                return providers.users.find(item=> item.id === Number(id));

            },

            users(){

                return providers.users;

            },

            createUser({name, repo, age}){


                const user = {

                    id: id++,
                    name,
                    repo,
                    age

                }

                providers.users.push(user);

                return user;

            }

        };

        const middleware = ExpressGraphql({

            schema: this.userSchema.getSchema(),
            rootValue: resolvers,
            graphiql: true
        
        })

        return middleware;

    }

}