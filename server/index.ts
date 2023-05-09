const runtimeConfig = useRuntimeConfig();
import { PrismaClient } from '@prisma/client';
import { Nitro } from 'nitropack';

const prisma = new PrismaClient();

export default async (_nitroApp: Nitro) => {
};