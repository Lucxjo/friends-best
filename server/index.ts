export const runtimeConfig = useRuntimeConfig();
import { PrismaClient } from '@prisma/client';
import { Nitro } from 'nitropack';

export const prisma = new PrismaClient();

export default async (_nitroApp: Nitro) => {
};