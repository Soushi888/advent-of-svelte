export type Gift = {
	name: string;
	weight: number;
};

export async function load() {
	const gifts: Gift[] = await (
		await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json')
	).json();

	return { gifts };
}
