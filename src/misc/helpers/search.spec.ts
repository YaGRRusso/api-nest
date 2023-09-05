import { parseSearchToPrisma } from './search.helper'

describe('prisma search helpers', () => {
  it('should parse object to prisma where', () => {
    const query = { name: 'mr', email: '@gmail' }

    const result = parseSearchToPrisma(query)
    expect(result).toStrictEqual({
      name: { contains: 'mr', mode: 'insensitive' },
      email: { contains: '@gmail', mode: 'insensitive' },
    })
  })
})
