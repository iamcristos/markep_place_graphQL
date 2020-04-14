const { mockServer } = require('apollo-server');
const { typeDefs} = require('../index');

describe('Product test', () => {
    
    test('should resolve createProduct ', async done => {
        const server = mockServer(typeDefs);

        const query = `
            mutation {
                createProduct(input:{name: "g" description: "g" user:1 price: 1 type: animal
            }) {
                id
                name
            }
            }
        `;

        const resolver = await server.query(query);

        // await expect(server.query(query)).resolves.toBeTruthy()
        expect(resolver.errors).not.toBeTruthy()
        expect(resolver.data).toBeTruthy()

        done()
    })

    test('should not resolve createProduct ', async done => {
        const server = mockServer(typeDefs);

        const query = `
            mutation {
                createProduct(input:{ description: "g" user:1 price: 1 type:"animal"
                age:2 weight:4 
            }) {
                id
                name
            }
            }
        `;

        const resolver = await server.query(query);

        await expect(server.query(query)).resolves.toBeTruthy()
        expect(resolver.errors).toBeTruthy()

        done()
    })

    test('should resolve the product ', async (done) => {
        const server = mockServer(typeDefs);

        const query = `{
            product(input:{id: 1}) {
                id
            }
        }
        `;

        const resolver = await server.query(query);
        expect(resolver.errors).not.toBeTruthy();
        expect(resolver.data).toBeTruthy()

        done()
    })
    
    test('should resolve the product ', async (done) => {
        const server = mockServer(typeDefs);

        const query = `{
            products {
                id
            }
        }
        `;

        const resolver = await server.query(query);
        expect(resolver.errors).not.toBeTruthy();
        expect(resolver.data).toBeTruthy()

        done()
    })
})
