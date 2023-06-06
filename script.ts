import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    // const user = await prisma.user.create({ data: { name: 'Sally' } });
    const users = await prisma.user.findMany();
    console.log(users);
}

main()
    .catch(error => console.error(error.message))
    .finally(async () => prisma.$disconnect())