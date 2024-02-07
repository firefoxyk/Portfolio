import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

const projects = [
	{
		title: 'Модуль отчетов для РЦОИ для Управления ОП ГИА',
		skills: 'написать',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Генеалогический портал',
		img: project02,
		imgBig: project02Big,
		skills: 'написать',
		gitHubLink: 'https://gitlab.com/NullReferenceException_dev/genealogical_portal',
	},
	{
		title: 'Интернет магазин',
		img: project03,
		imgBig: project03Big,
		skills: 'Сайт asp.net core mvc для .net5, БД MSSQL (настройка подключения к базе данных с Entity Framework Core)',
		gitHubLink: 'https://github.com/firefoxyk/MyShop',
	}
];

export {projects}