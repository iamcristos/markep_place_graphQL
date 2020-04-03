const { mockServer } = require('apollo-server');
const { typeDefs} = require('../index');

describe('User Schema', () =>{
    test('should resolve the schema', async(done) => {
       const server = mockServer(typeDefs);
       const query = `
            {
                user(input:{email:"g@gmail.com"}) {
                    email
                    id
                }
            }
       `;

       const response = await server.query(query)
       await expect(server.query(query)).resolves.toBeTruthy()
       expect(response.errors).not.toBeTruthy()
       done()
    })

    test('should error out if email is not provided', async done =>{
        const server = mockServer(typeDefs)
        const query = `{
            user() {
                email
                id
            }
        }`;

        const resolve = await server.query(query)
        expect(resolve.errors).toBeTruthy()
        done()
    })

    test('should resolve login', async done => {
        const server = mockServer(typeDefs)
        const query = `{
            loginUser(input:{email: "g@gmail.com" password: "12345"}) {
                email
                id
            }
        }`;

        const response = await server.query(query)
        await expect(server.query(query)).resolves.toBeTruthy()
        expect(response.errors).not.toBeTruthy()
        done()
    })
    
})