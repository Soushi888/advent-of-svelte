export type Kid = {
	name: string;
	tally: number;
};

export async function load() {
	const kids: Kid[] = await (
		await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json')
	).json();

	return { kids };
}
