const loginSchema = {
    body: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
            username: {
                type: 'string',
                minLength: 5,
                maxLength: 30
            },
            password: {
                type: 'string',
                minLength: 8,
                maxLength: 30
            }
        },
        additionalProperties: false
    }
};

module.exports = loginSchema;