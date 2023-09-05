import { Pagination } from '@interfaces/input.interface'
import { RepoOutput, RepoPaginatedOutput } from '@interfaces/output.interface'

export interface CommonRepositoryInterface<Entity> {
  findAll(pagination: Pagination<Entity>): RepoPaginatedOutput<Entity>
  findOne(id: string): RepoOutput<Entity>
  searchAll(
    pagination: Pagination<Entity>,
    search: Partial<Entity>,
  ): RepoPaginatedOutput<Entity>
  searchOne(search: Partial<Entity>): RepoOutput<Entity>
  create(data: Entity): RepoOutput<Entity>
  remove(id: string): RepoOutput<Entity>
  update(id: string, data: Partial<Entity>): RepoOutput<Entity>
}
