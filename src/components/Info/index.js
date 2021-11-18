import { ReactComponent as AumigoSvg } from '../../icons/svg/aumigo.svg';
import { ReactComponent as CasaSvg } from '../../icons/svg/casa.svg';
import { ReactComponent as OngSvg } from '../../icons/svg/ong.svg';

export default function Info() {

	return (
		<div class="grid grid-cols-12">
			<div class="col-start-4 col-span-6 grid grid-flow-col grid-rows-2 m-4">
				<img class="row-span-2 object-cover h-full w-full p-3" src='/images/stock-5.jpg' />
				<div class="grid grid-cols-1 bg-matheme-fuchsia m-4 h-72 text-white p-3">
					<div class="border-0 bg-matheme-champagne rounded-full h-20 w-20 justify-self-center p-4">
						<AumigoSvg />
					</div>
					<h1 class="text-2xl text-center">ENCONTRE UM AUMIGO</h1>
					<p>Usando a nossa plataforma, você pode encontrar um novo pet para chamar de seu.</p>
				</div>
				<div class="grid grid-cols-1 bg-matheme-pink m-4 h-72 text-white p-3">
					<div class="border-0 bg-matheme-champagne rounded-full h-20 w-20 justify-self-center p-4">
						<CasaSvg />
					</div>
					<h1 class="text-2xl text-center">LEVE SEU PET PARA CASA</h1>
					<p>Depois de concluir seu processo, seu aumigo estará pronto para ir para casa com você.</p>
				</div>
				<div class="grid grid-flow-col grid-rows-3 m-4 h-72">
					<div class="row-start-2 grid grid-cols-1 bg-matheme-hotpink text-white h-72 p-3">
						<div class="border-0 bg-matheme-champagne rounded-full h-20 w-20 justify-self-center p-4">
							<OngSvg />
						</div>
						<h1 class="text-2xl text-center">ENTRE EM CONTATO COM A ONG RESPONSÁVEL</h1>
						<p>Entre em contato com as instituições e conclua o seu processo de adoção.</p>
					</div>
				</div>
			</div>
		</div>
	);
}