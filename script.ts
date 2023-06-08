import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    console.log(await prisma.userPreference.findMany());
    // await prisma.userPreference.deleteMany();
    // await prisma.user.deleteMany();
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Sally',
    //         age: 42,
    //         email: 'sally2@example.com',
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             },
    //         },
    //     },
    //     include: {
    //         userPreference: true
    //     }
    // });
    // const users = await prisma.user.findMany();
    // console.log(user);
}

main()
    .catch(error => console.error(error.message))
    .finally(async () => prisma.$disconnect())

