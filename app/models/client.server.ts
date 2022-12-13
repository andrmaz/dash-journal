import type {Client, Prisma, User} from '@prisma/client'

import {prisma} from '~/db.server'

export async function getClientById(id: Client['id']) {
  return prisma.client.findUnique({where: {id}})
}

export async function getClientList(userId: User['id']) {
  return prisma.client.findMany({where: {userId}})
}

export async function getUserClients(userId: User['id']) {
  return prisma.client.findMany({
    where: {userId},
    include: {
      user: true,
    },
  })
}

export async function createClient(data: Prisma.ClientCreateInput) {
  return prisma.client.create({data})
}

export async function deleteClient(id: Client['id']) {
  return prisma.client.delete({where: {id}})
}
