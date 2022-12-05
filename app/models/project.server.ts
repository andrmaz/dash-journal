import type {Client, Prisma, Project, User} from '@prisma/client'

import {prisma} from '~/db.server'

export async function getProjectById(id: Project['id']) {
  return prisma.project.findUnique({where: {id}})
}

export async function getProjectList() {
  return prisma.project.findMany({
    include: {
      client: true,
    },
  })
}

export async function getUserProjects(userId: User['id']) {
  return prisma.project.findMany({
    where: {userId},
    include: {
      user: true,
    },
  })
}

export async function getClientProjects(clientId: Client['id']) {
  return prisma.project.findMany({
    where: {clientId},
    include: {
      client: true,
    },
  })
}

export async function createProject(data: Prisma.ProjectCreateInput) {
  return prisma.project.create({data})
}

export async function editProject(
  id: Project['id'],
  data: Prisma.ProjectUncheckedUpdateInput
) {
  return prisma.project.update({where: {id}, data})
}

export async function deleteProject(id: Project['id']) {
  return prisma.project.delete({where: {id}})
}
