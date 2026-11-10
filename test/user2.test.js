/* eslint-env jest */

import Client from '../src/client.js';import Magazine from '../src/magazine.js';import Post from '../src/post.js';import User from '../src/user.js';test('Notificar publicación genérica', () => {
  const user = new User('Pepe')
  const post = new Post('Publicación genérica')
  expect(user.notify(post)).toBe('Pepe is reading Publicación genérica publication number 0')
})

test('Notificar a un cliente una revista', () => {
  const user = new Client('Pepe')
  const post = new Magazine('Total JS', 2.99, 'Programming')
  expect(user.notify(post)).toBe('Pepe is reading Total JS publication number 0 of Programming')
})
