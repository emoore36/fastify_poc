'use strict'

const loginSchema = require('../../schemas/loginSchema');
const registerSchema = require('../../schemas/registerSchema');

module.exports = async function (fastify, opts) {
    fastify.post('/login', { schema: loginSchema }, async (request, reply) => {
        return { success: true };
    });

    fastify.post('/register', { schema: registerSchema }, async (request, reply) => {
        const { password, confirm_password } = request.body;
        if (confirm_password !== password) {
            return {
                success: false,
                error: 'Passwords must match.',
            }
        }
        return { success: true };
    });
}
