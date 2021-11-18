import { Link } from 'react-router-dom';

export default function Carrousel(props) {
	const title = props.title

	return (
			<div class="grid grid-cols-12">
			<p class="text-4xl col-start-2 col-span-12 m-4">{title}</p>
			<div class="col-start-3 col-span-2 m-2">
				<div class="border border-matheme-fuchsia grid grid-cols-1 justify-items-center bg-matheme-hotpink">
					<img class="h-52" src='images/placeholder-1.jpg'></img>
				</div>
				<p>Gato</p>
				<p>Pipoca</p>
				<Link to="/">Adotar</Link>
			</div>
			<div class="col-span-2 m-2">
				<div class="border border-matheme-fuchsia grid grid-cols-1 justify-items-center bg-matheme-hotpink">
					<img class="h-52" src='images/placeholder-2.jpg'></img>
				</div>
				<p>Gato</p>
				<p>Pipoca</p>
				<Link to="/">Adotar</Link>
			</div>
			<div class="col-span-2 m-2">
				<div class="border border-matheme-fuchsia grid grid-cols-1 justify-items-center bg-matheme-hotpink">
					<img class="h-52" src='images/placeholder-3.jpg'></img>
				</div>
				<p>Gato</p>
				<p>Pipoca</p>
				<Link to="/">Adotar</Link>
			</div>
			<div class="col-span-2 m-2">
				<div class="border border-matheme-fuchsia grid grid-cols-1 justify-items-center bg-matheme-hotpink">
					<img class="h-52" src='images/placeholder-4.jpg'></img>
				</div>
				<p>Gato</p>
				<p>Pipoca</p>
				<Link to="/">Adotar</Link>
			</div>
		</div>
);
}