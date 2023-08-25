export const parseSearchDtoToPrisma = (searchDto: { [key: string]: any }) => {
  return Object.entries(searchDto).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: { contains: value, mode: 'insensitive' },
    }),
    {},
  )
}
