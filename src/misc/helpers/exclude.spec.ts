import { excludeOne, excludeMany } from './exclude.helper'

describe('exclude helper', () => {
  it('should remove password from object', () => {
    const user = { name: 'xxx', password: '123' }
    const result = excludeOne(user, 'password')
    expect(result).toStrictEqual({ name: 'xxx' })
  })

  it('should remove password from array of object', () => {
    const users = [
      { name: 'xxx', password: '123' },
      { name: 'yyy', password: '456' },
      { name: 'zzz', password: '789' },
    ]
    const result = excludeMany(users, 'password')
    expect(result).toStrictEqual([
      { name: 'xxx' },
      { name: 'yyy' },
      { name: 'zzz' },
    ])
  })
})
