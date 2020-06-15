const express = require('express');
const sqlite3 = require('sqlite3');
const graphql = require('graphql');
const ExpressGraphQL = require ('express-graphql');
const cors = require('cors');

const app = express();
app.use(cors());

const database = new sqlite3.Database("./my.db");

const createUsersTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id integer PRIMARY KEY,
            username text UNIQUE,
            password text)`;
        return database.run(query);
}
createUsersTable();

const UserType = new graphql.GraphQLObjectType({
    name: "Users",
    fields: {
        id: { type: graphql.GraphQLID },
        username: { type: graphql.GraphQLString },
        password: { type: graphql.GraphQLString }
    }
});

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: graphql.GraphQLList(UserType),
            resolve: (root, args, context, info) => {
                return new Promise ((resolve, reject) => {
                    database.all ("SELECT * FROM users;", function(err, rows) {
                        if(err){
                            reject([]);
                        }
                        resolve(rows);
                    });                    
                });
            }
        },
        user: {
            type: UserType,
            args: {
                id: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLID)
                }
            },
            resolve: (root, {
                id
            }, context, info) => {
                return new Promise(( resolve, reject) => {
                    database.all("SELECT * FROM users WHERE id = (?);", [id], function(err, rows) {
                        if(err){
                            reject(null);
                        }
                        resolve(rows[0]);
                    });
                });
            }
        }
    }
});

var mutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                username: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                },
                password: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: (root, {
                username,
                password
            }) => {
                return new Promise (( resolve, reject) => {
                    database.run('INSERT INTO users (username, password) VALUES (?,?);', [username, password], (err) => {
                        if(err){
                            reject(null);
                        }
                        database.get("SELECT last_insert_rowid() as id", (err, row) => {
                            resolve ({
                                id: row["id"],
                                username: username,
                                password: password
                            });
                        });    
                    });
                })
            }
        },
        updateUser: {
            type: graphql.GraphQLString,
            args: {
                id: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLID)
                },
                username: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                },
                password: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: (root, {
                id,
                username,
                password
            }) => {
                return new Promise (( resolve, reject ) => {
                    database.run('UPDATE users set username = (?), password = (?) WHERE id = (?);', [username, password, id], (err) => {
                        if(err){
                            reject(null);
                        }
                        resolve('User #${id} updated');
                    });
                })
            }
        },
        deleteUser: {
            type: graphql.GraphQLString,
            args: {
                id: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLID)
                }
            },
            resolve: (root, {
                id
            }) => {
                return new Promise (( resolve, reject ) => {
                    database.run('DELETE FROM users WHERE id = (?)', [id], (err) => {
                        if (err) {
                            reject(err);
                        }
                        resolve('User #${id} deleted!');
                    });
                })
            }
        }
    }
});

const schema = new graphql.GraphQLSchema({
    query: queryType,
    mutation: mutationType
});

app.use("/graphql", ExpressGraphQL({ schema:schema, graphiql: true }));
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000")
})