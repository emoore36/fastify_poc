const registerSchema = {
    body: {
        type: 'object',
        required: ['first_name', 'last_name', 'username', 'email', 'password', 'confirm_password'],
        properties: {
            first_name: {
                type: 'string',
                minLength: 3,
                maxLength: 30
            },
            last_name: {
                type: 'string',
                minLength: 3,
                maxLength: 30
            },
            username: {
                type: 'string',
                minLength: 5,
                maxLength: 18
            },
            email: {
                type: 'string',
                minLength: 6,
                maxLength: 40
            },
            password: {
                type: 'string',
                minLength: 8,
                maxLength: 18
            },
            confirm_password: {
                type: 'string',
                minLength: 8,
                maxLength: 18
            }
        },
        additionalProperties: false
    }
}

module.exports = registerSchema;