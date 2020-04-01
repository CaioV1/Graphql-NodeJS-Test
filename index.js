import Express from "./node_modules/express";
import UserResolver from "./src/resolvers/UserResolver"

const app = Express()
const userResolver = UserResolver.getInstance();

app.use("/graphql", userResolver.getMiddleware());

app.listen(8080, ()=>{

    console.log("Servidor está rodando");    

})
