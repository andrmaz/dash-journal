import type {Meeting, Prisma, Project, User} from '@prisma/client'

import {prisma} from '~/db.server'

export async function getMeetingById(id: Meeting['id']) {
  return prisma.meeting.findUnique({where: {id}})
}

export async function getUserMeetings(userId: User['id']) {
  return prisma.meeting.findMany({where: {userId}})
}

export async function getProjectMeetings(projectId: Project['id']) {
  return prisma.meeting.findMany({where: {projectId}})
}

export async function createMeeting(data: Prisma.MeetingCreateInput) {
  return prisma.meeting.create({data})
}

export async function editMeeting(
  id: Meeting['id'],
  data: Prisma.MeetingUncheckedUpdateInput
) {
  return prisma.meeting.update({where: {id}, data})
}

export async function deleteMeeting(id: Meeting['id']) {
  return prisma.meeting.delete({where: {id}})
}

export async function getClosestMeeting(userId: User['id']) {
  return prisma.meeting.findFirst({
    where: {
      AND: [
        {userId},
        {
          start: {
            gte: new Date(),
          },
        },
      ],
    },
  })
}

export async function getIntervalMeetings(from: Date, to: Date) {
  return prisma.meeting.findMany({
    where: {
      AND: [
        {
          start: {
            gte: from,
          },
        },
        {
          end: {
            lte: to,
          },
        },
      ],
    },
  })
}
