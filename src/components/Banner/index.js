
export default function Banner() {

	return (
		<div class="grid grid-cols-12 m-5">
			<img class="col-span-4 col-start-3 object-cover h-48 w-full" src='/images/stock-1.jpg' />
			<div class="bg-matheme-pink col-span-4 p-7 max-h-48">
				<h1 class= "font-logo text-white text-4xl text-center mb-7">Encontre um Aumigo</h1>
				<p class="text-white text-justify">Estamos aqui para te ajudar a encontrar um novo pet para seu lar! Vamos te ajudar no processo de adoção de seu novo Aumigo. </p>
			</div>
			<div class="col-span-8 col-start-3 grid grid-cols-3">
				<img class="col-span-1 object-cover h-40 w-full" src='/images/stock-2.jpg' />
				<img class="col-span-1 object-cover h-40 w-full" src='/images/stock-3.jpg' />
				<img class="col-span-1 object-cover h-40 w-full" src='/images/stock-4.jpg' />
			</div>

		</div>
	);
}

