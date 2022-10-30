import type {Meeting, Prisma, User} from '@prisma/client'

import {prisma} from '~/db.server'

export async function getMeetingById(id: Meeting['id']) {
  return prisma.meeting.findUnique({where: {id}})
}

export async function getMeetingList(userId: User['id']) {
  return prisma.meeting.findMany({where: {userId}})
}

export async function createMeeting(data: Prisma.MeetingCreateInput) {
  return prisma.meeting.create({data})
}

export async function deleteMeeting(id: Meeting['id']) {
  return prisma.meeting.delete({where: {id}})
}
