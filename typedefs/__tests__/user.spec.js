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
    
})