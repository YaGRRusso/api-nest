import { Pagination } from '@interfaces/input.interface'
import { Output, PaginatedOutput } from '@interfaces/output.interface'

export interface PrismaCommonRepositoryInterface<Entity> {
  findAll(pagination: Pagination<Entity>): PaginatedOutput<Entity>
  findOne(id: string): Output<Entity>
  searchAll(
    pagination: Pagination<Entity>,
    search: Partial<Entity>,
  ): PaginatedOutput<Entity>
  create(data: Entity): Output<Entity>
  remove(id: string): Output<Entity>
  update(id: string, data: Partial<Entity>): Output<Entity>
}
