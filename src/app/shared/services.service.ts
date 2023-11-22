import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {

  items = [
		{
			id : 'laboral',
			title : 'Asesoramiento Laboral',
			//image: 'https://images.unsplash.com/photo-1527289626332-8b3abcdda02b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bd2deec78d4bce7123d179c6027d5a5&auto=format&fit=crop&w=1055&q=80',
			image: 'images/Laboral.png',
            descriptions: [
							'Nos especializamos en brindar asesoramiento en el ámbito del derecho laboral tanto a ' +
							'empresas como así también a los trabajadores que lo requieran.'
							,
							'El ámbito del derecho laboral, es, dentro del cual, el equipo de trabajo del Estudio Jurídico ' +
							'Nanzer & Dellarossa mayor experiencia posee, tanto en asesoramiento a empresas (suspensiones, '+
							'despidos, juicios ordinarios, por cobro de haberes, entre otros), como así también a los trabajadores '+
							'que ven vapuleados sus derechos laborales más elementales (despidos sin justa causa, enfermedades '+
							'y accidentes laborales, reducción de haberes, sanciones injustificadas).-'
						 ]
		},
		{
			id : 'cobranza',
			title : 'Cobranza Judicial y Extrajudicial',
			//image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd701618e3ad73aae800ca33bb605652&auto=format&fit=crop&w=1050&q=80',
			image: 'images/Divorcios.png',
            descriptions: [
							`Direccionamos nuestro servicio de cobranzas tanto a grandes clientes (Bancos, Entidades Financieras,
							 Mutuales, Consorcios) como así también al particular que requiera de los mismos.`
							,
							`Nuestros grandes clientes son el Banco Hipotecario S.A. y el Banco Columbia S.A., para quienes realizamos
							 cobranza judicial y extrajudicial, sin perjuicio de lo cual, a su vez, realizamos la cobranza de deudas
							 garantizadas con cheque, letras o pagarés, deudas de expensas comunes, garantías hipotecarias y de cualquier
							 otra clase, brindando una atención personalizada que hace que nuestros clientes nos sigan eligiendo día tras día.-`
						 ]
		},
		{
			id : 'derecho_civil',
			title : 'Derecho civil y comercial',
			//image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1b566f6cf95b8fe438961fd065158cd&auto=format&fit=crop&w=1050&q=80',
			image: "images/Familia.png",
            descriptions: [
							'Nuestro equipo lo asesorará integralmente en el ámbito del derecho Civil (contratos en general, sucesiones, '+
							'incumplimiento contractual, desalojos) como así también en el ámbitos del derecho Comercial. '
							,
							'Contamos con una amplia y vasta experiencia en el derecho Civil (sucesiones, derechos reales, usucapiones, '+
							'entre otros temas), como así; también en el ámbito del derecho Comercial (constitución de sociedades de todo '+
							'tipo: S.A., S.R.L., Sociedades de Hecho, contratos comerciales, mutuos, comodatos). Nuestro asesoramiento no se '+
							'limita a la confección de los instrumentos requeridos sino al seguimiento de la relación comercial que les dio lugar.-'
						 ]
		},
		{
			id : 'previsionales',
			title : 'Previsionales',
			//image: 'https://images.unsplash.com/photo-1507851191112-1bb853d191fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea22a92bdd05ed12542fef6af1a02fd1&auto=format&fit=crop&w=1050&q=80',
            image: 'images/Previsional.png',
            descriptions: [
							'Nuestro equipo de trabajo se encuentra interiorizado con la temática previsional tanto en ámbito '+
							'Nacional (A.N.Se.S.) como en el ámbito provincial. '
							,
							'Es de nuestra competencia la problemática previsional (jubilaciones, pensiones por invalidez, retiros anticipados '+
							'entre otros). Nuestro equipo de trabajo evacuará todas sus dudas sobre el tema y lo asesorará integralmente '+
							'tanto en el ámbitos Nacional (A.N.Se.S.) como así también en el ámbito provincial (Caja de Jubilaciones '+
							'y Pensiones de la Provincia de Córdoba). Se realizan jubilaciones ordinarias, pensiones derivadas, jubilaciones '+
							'anticipadas por incapacidad, reajustes y cualquier trámite o gestión ante los organismos previsionales.-'
						 ]
		}
	];
}
