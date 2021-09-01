const express = require('express') 
const expressGraphQL = require('express-graphql').graphqlHTTP
const app = express()
const{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull

}=require('graphql')

const authors=[
    {id:1, name:'Geogre', gender:'male'},
    {id:2, name:'Camu', gender:'male'},
    {id:3, name:'Skaski', gender:'female'},
]

const books = [
    {id:1, name:"1984",authorId:1},
    {id:2, name:"Animal Farm",authorId:1},
    {id:3, name:"The man in high castle",authorId:1},
    {id:4, name:"The myth of Sisyplus",authorId:2},
    {id:5, name:"The lords of the rings",authorId:3},
]

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name:'HelloWorld', // no space in name
//         fields:()=>({
//             message:{
//                 type: GraphQLString,
//                 resolve:()=>'Hello World from GraphQL'
//             }
//         })
//     })
// })
const BookType = new GraphQLObjectType({
    name:'Book',
    description:'Book written by an author',
    fields: ()=>({
        id:{type: GraphQLNonNull(GraphQLInt)},
        name:{type: GraphQLNonNull(GraphQLString)},
        authorId:{type: GraphQLNonNull(GraphQLInt)},
        author: {
            type: AuthorType,
            resolve:(book)=>{
                return authors.find(author=>author.id === book.authorId)
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name:'Author',
    description:'Author who writes books',
    fields: ()=>({
        id:{type: GraphQLNonNull(GraphQLInt)},
        name:{type: GraphQLNonNull(GraphQLString)},
        gender:{type: GraphQLNonNull(GraphQLString)},
        books:{
            type:new GraphQLList(BookType),
            description: "books written by this author",
            resolve: (author)=>{
                return books.filter(book => book.authorId === author.id)
            }
        }  
    })
})


const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description:'Root Ruqery',
    fields:()=>({
        book:{
            type: BookType,
            description:"A single book",
            args:{
                id:{type:GraphQLInt}
            },
            resolve:(parent,args)=> books.find(book =>book.id === args.id)
        },
        books:{
            type: new GraphQLList(BookType),
            description:"list of all books",
            resolve:()=> books
        }, 
        author:{
            type: AuthorType,
            description:"a single author",
            args:{
                id: {type:GraphQLInt}
            },
            resolve:(parent,args)=> authors.find(author => author.id === args.id)
        },
        authors:{
            type: new GraphQLList(AuthorType),
            description:"list of all authors",
            resolve:()=> authors
        }
    })
})

const RootMutationType = new GraphQLObjectType({
    name:'Mutation',
    description:'Root Mutation',
    fields:()=>({
        addBook:{
            type:BookType,
            description:'Add a book',
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                authorId:{type:GraphQLNonNull(GraphQLInt)},
            },
            resolve:(parent,args)=>{
                const book = {
                    id: books.length+1,
                    name: args.name,
                    authorId: args.authorId
                }

                books.push(book)
                return book
            }
        }
    })
})


const schema = new GraphQLSchema({
    query:RootQueryType,
    mutation:RootMutationType
})

app.use('/graphql',expressGraphQL({
    schema: schema,
    graphiql:true
}))

app.listen(5000,()=>console.log(`Server is running at http://localhost:5000`))