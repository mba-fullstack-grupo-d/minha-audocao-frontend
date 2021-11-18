import { Link } from 'react-router-dom';
import { ReactComponent as AdoptSvg } from '../../icons/svg/adopt.svg';
import { ReactComponent as LeftArrowSvg } from '../../icons/svg/left-arrow.svg';
import { ReactComponent as RightArrowSvg } from '../../icons/svg/right-arrow.svg';

export default function Carrousel(props) {
	const title = props.title

	return (
		<div class="grid grid-cols-12">
			<p class="text-4xl col-start-2 col-span-12 m-4">{title}</p>
			<div class="col-start-2 self-center justify-self-end pb-20">
				<LeftArrowSvg class="w-10 h-10 fill-current text-gray-400" />
			</div>
			<div class="col-start-3 col-span-2 m-2">
				<div class="border border-matheme-fuchsia grid grid-cols-1 justify-items-center bg-matheme-hotpink">
					<img class="h-52" src='images/placeholder-1.jpg'></img>
				</div>
				<p class="font-logo text-2xl">Pipoca</p>
				<p class="italic">Gato</p>
				<Link class="flex" to="/">
					<AdoptSvg class="w-5 h-5 m-1" />
					<p>Adotar</p>
				</Link>
			</div>
			<div class="col-span-2 m-2">
				<div class="border border-matheme-fuchsia grid grid-cols-1 justify-items-center bg-matheme-hotpink">
					<img class="h-52" src='images/placeholder-2.jpg'></img>
				</div>
				<p class="font-logo text-2xl">Godofredo</p>
				<p class="italic">Cachorro</p>
				<Link class="flex" to="/">
					<AdoptSvg class="w-5 h-5 m-1" />
					<p>Adotar</p>
				</Link>
			</div>
			<div class="col-span-2 m-2">
				<div class="border border-matheme-fuchsia grid grid-cols-1 justify-items-center bg-matheme-hotpink">
					<img class="h-52" src='images/placeholder-3.jpg'></img>
				</div>
				<p class="font-logo text-2xl">James</p>
				<p class="italic">Cachorro</p>
				<Link class="flex" to="/">
					<AdoptSvg class="w-5 h-5 m-1" />
					<p>Adotar</p>
				</Link>
			</div>
			<div class="col-span-2 m-2">
				<div class="border border-matheme-fuchsia grid grid-cols-1 justify-items-center bg-matheme-hotpink">
					<img class="h-52" src='images/placeholder-4.jpg'></img>
				</div>
				<p class="font-logo text-2xl">Mel</p>
				<p class="italic">Cachorro</p>
				<Link class="flex" to="/">
					<AdoptSvg class="w-5 h-5 m-1" />
					<p>Adotar</p>
				</Link>
			</div>
			<div class="self-center pb-20">
				<RightArrowSvg class="w-10 h-10" />
			</div>
		</div>
	);
}