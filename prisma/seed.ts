import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export function randomUrl(): string {
	return Math.random().toString(16).slice(2)
}

// gets random time starting from now and
// going back one day whenever you seed the
// database in the future
export function randomDate(): string {
	// this is set to one day
	const offset = 24 * 60 * 60 * 1000 * 1

	const current = new Date().getTime()
	const random = Math.random() * offset
	const difference = new Date(current - random)

	return difference.toISOString()
}

async function main() {
    const matia = await prisma.user.upsert({
        where: { email: "matia@example.test" },
        update: {},
        create: {
            name: 'matia',
			handle: '@joyofcodedev',
			email: 'matia@example.test',
			avatar: '/profile/matia/avatar.webp',
			about: 'Likes long walks on the beach. 😘',
			tweets: {
				create: [
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `SvelteKit is lit. 🔥`,
						likes: 10
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `I love Svelte! ❤️`,
						likes: 24
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `Sometimes when I'm writing JavaScript I want to throw up my hands and say "this is crazy!" but I can't remember what "this" refers to. 🤪`,
						likes: 0
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `How do you comfort a JavaScript bug? You console it. 🤭`,
						likes: 0
					}
				]
			}
        }
    })
    const bob = await prisma.user.upsert({
        where: { email: "bob@example.test" },
        update: {},
        create: {
            name: 'bob',
			handle: '@bobross',
			email: 'bob@example.test',
			avatar: '/profile/bob/avatar.webp',
			about: 'Likes painting.',
			tweets: {
				create: [
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `Use your imagination. Wind it up, blend it together. The joy of painting really is universal.`,
						likes: 1
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content: `The only thing I have control over is taking out the trash. 😂`,
						likes: 4
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content:
							'Painting is as individual as people are. 👩‍🎨',
						likes: 0
					},
					{
						url: randomUrl(),
						posted: randomDate(),
						content:
							'All we do is just sorta have an idea in our mind, and we just sorta let it happen. 🌈',
						likes: 10
					}
				]
			}
        }
    })
    console.log({ matia, bob });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
