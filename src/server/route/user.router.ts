import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { TRPCError } from '@trpc/server'
import { createUserSchema } from '../../schema/user.schema'
import { createRouter } from '../createRouter'

export const userRouter = createRouter().mutation('register-user', {
  input: createUserSchema,
  async resolve({ ctx, input }) {
    const { email, name } = input

    try {
      const user = await ctx.prisma.user.create({
        data: {
          email,
          name,
        },
      })
      console.log(user)
      return user
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError)
        if (e.code === 'P2002') {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'User already exist',
          })
        }
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: e.message,
      })
    }
  },
})
