import type {Client, Prisma, Project} from '@prisma/client'

import {prisma} from '~/db.server'

export async function getProjectById(id: Project['id']) {
  return prisma.project.findUnique({where: {id}})
}

export async function getProjectList(clientId: Client['id']) {
  return prisma.project.findMany({where: {clientId}})
}

export async function createProject(data: Prisma.ProjectCreateInput) {
  return prisma.project.create({data})
}

export async function deleteProject(id: Project['id']) {
  return prisma.project.delete({where: {id}})
}
