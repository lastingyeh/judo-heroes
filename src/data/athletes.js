const athletes = [
	{
		id: 'ilias-iliadis',
		name: 'Ilias Iliadis',
		country: {
			id: 'gr',
			name: 'Greece',
			icon: 'flag-gr.png'
		},
		birth: '1986',
		image: 'ilias-iliadis.jpg',
		cover: 'ilias-iliadis-cover.jpg',
		link: 'https://en.wikipedia.org/wiki/Ilias_Iliadis',
		medals: [
			{ id: 1, year: '2004', type: 'G', city: 'Athens', event: 'Olympic Games', category: '-81kg' },
			{
				id: 2,
				year: '2004',
				type: 'G',
				city: 'Bucharest',
				event: 'European Judo Championships',
				category: '-81kg'
			},
			{ id: 3, year: '2005', type: 'S', city: 'Cairo', event: 'World Judo Championships', category: '-90kg' },
			{ id: 4, year: '2005', type: 'G', city: 'Almeria', event: 'Mediterranean Games', category: '-90kg' },
			{
				id: 5,
				year: '2007',
				type: 'S',
				city: 'Rio de Janeiro',
				event: 'World Judo Championships',
				category: '-90kg'
			},
			{ id: 6, year: '2009', type: 'G', city: 'Pescara', event: 'Mediterranean Games', category: '-90kg' },
			{ id: 7, year: '2010', type: 'G', city: 'Tokyo', event: 'World Judo Championships', category: '-90kg' },
			{ id: 8, year: '2010', type: 'B', city: 'Vienna', event: 'European Judo Championships', category: '-90kg' },
			{
				id: 9,
				year: '2011',
				type: 'G',
				city: 'Istanbul',
				event: 'European Judo Championships',
				category: '-90kg'
			},
			{ id: 10, year: '2011', type: 'G', city: 'Paris', event: 'World Judo Championships', category: '-90kg' },
			{ id: 11, year: '2012', type: 'B', city: 'london', event: 'Olympic Games', category: '-90kg' },
			{
				id: 12,
				year: '2013',
				type: 'B',
				city: 'Rio de Janeiro',
				event: 'World Judo Championships',
				category: '-90kg'
			},
			{
				id: 13,
				year: '2013',
				type: 'G',
				city: 'Chelyabinsk',
				event: 'World Judo Championships',
				category: '-90kg'
			},
			{ id: 14, year: '2015', type: 'B', city: 'Baku', event: 'European Games', category: '-90kg' }
		]
	},
	{
		id: 'driulis-gonzalez',
		name: 'Driulis González',
		country: {
			id: 'cu',
			name: 'Cuba',
			icon: 'flag-cu.png'
		},
		birth: '1973',
		image: 'driulis-gonzalez.jpg',
		cover: 'driulis-gonzalez-cover.jpg',
		link: 'https://en.wikipedia.org/wiki/Driulis_González',
		medals: [
			{ id: 1, year: '1992', type: 'B', city: 'Barcelona', event: 'Olympic Games', category: '-57kg' },
			{ id: 2, year: '1993', type: 'B', city: 'Hamilton', event: 'World Championships', category: '-57kg' },
			{ id: 3, year: '1995', type: 'G', city: 'Chiba', event: 'World Championships', category: '-57kg' },
			{ id: 4, year: '1995', type: 'G', city: 'Mar del Plata', event: 'Pan American Games', category: '-57kg' },
			{ id: 5, year: '1996', type: 'G', city: 'Atlanta', event: 'Olympic Games', category: '-57kg' },
			{ id: 6, year: '1997', type: 'S', city: 'Osaka', event: 'World Championships', category: '-57kg' },
			{ id: 7, year: '1999', type: 'G', city: 'Birmingham', event: 'World Championships', category: '-57kg' },
			{ id: 8, year: '2000', type: 'S', city: 'Sydney', event: 'Olympic Games', category: '-57kg' },
			{ id: 9, year: '2003', type: 'G', city: 'S Domingo', event: 'Pan American Games', category: '-63kg' },
			{ id: 10, year: '2003', type: 'S', city: 'Osaka', event: 'World Championships', category: '-63kg' },
			{ id: 11, year: '2004', type: 'B', city: 'Athens', event: 'Olympic Games', category: '-63kg' },
			{ id: 12, year: '2005', type: 'B', city: 'Cairo', event: 'World Championships', category: '-63kg' },
			{
				id: 13,
				year: '2006',
				type: 'G',
				city: 'Cartagena',
				event: 'Central American and Caribbean Games',
				category: '-63kg'
			},
			{
				id: 14,
				year: '2006',
				type: 'G',
				city: 'Cartagena',
				event: 'Central American and Caribbean Games',
				category: 'Tema'
			},
			{ id: 15, year: '2007', type: 'G', city: 'Rio de Janeiro', event: 'Pan American Games', category: '-63kg' },
			{ id: 16, year: '2007', type: 'G', city: 'Rio de Janeiro', event: 'World Championships', category: '-63kg' }
		]
	},
	{
		id: 'mark-huizinga',
		name: 'Mark Huizinga',
		country: {
			id: 'nl',
			name: 'Netherlands',
			icon: 'flag-nl.png'
		},
		birth: '1973',
		image: 'mark-huizinga.jpg',
		cover: 'mark-huizinga-cover.jpg',
		link: 'https://en.wikipedia.org/wiki/Mark_Huizinga',
		medals: [
			{ id: 17, year: '1994', type: 'B', city: 'Gdansk', event: 'European Championships', category: '-78kg' },
			{ id: 18, year: '1996', type: 'B', city: 'Atlanta', event: 'Olympic Games', category: '-86kg' },
			{ id: 19, year: '1996', type: 'G', city: 'The Hague', event: 'European Championships', category: '-86kg' },
			{ id: 20, year: '1997', type: 'G', city: 'Oostende', event: 'European Championships', category: '-86kg' },
			{ id: 21, year: '1998', type: 'G', city: 'Oviedo', event: 'European Championships', category: '-90kg' },
			{ id: 22, year: '1999', type: 'B', city: 'Bratislava', event: 'European Championships', category: '-90kg' },
			{ id: 23, year: '2000', type: 'G', city: 'Sydney', event: 'Olympic Games', category: '-90kg' },
			{ id: 24, year: '2000', type: 'S', city: 'Wroclaw', event: 'European Championships', category: '-90kg' },
			{ id: 25, year: '2001', type: 'G', city: 'Paris', event: 'European Championships', category: '-90kg' },
			{ id: 26, year: '2002', type: 'B', city: 'Maribor', event: 'European Championships', category: '-90kg' },
			{ id: 27, year: '2003', type: 'B', city: 'Düsseldorf', event: 'European Championships', category: '-90kg' },
			{ id: 28, year: '2004', type: 'B', city: 'Athens', event: 'Olympic Games', category: '-90kg' },
			{ id: 29, year: '2004', type: 'S', city: 'Bucharest', event: 'European Championships', category: '-90kg' },
			{ id: 30, year: '2005', type: 'B', city: 'Cairo', event: 'World Championships', category: '-90kg' },
			{ id: 31, year: '2005', type: 'B', city: 'Rotterdam', event: 'European Championships', category: '-90kg' },
			{ id: 32, year: '2008', type: 'G', city: 'Lisbon', event: 'European Championships', category: '-90kg' }
		]
	},
	{
		id: 'rishod-sobirov',
		name: 'Rishod Sobirov',
		country: {
			id: 'uz',
			name: 'Uzbekistan',
			icon: 'flag-uz.png'
		},
		birth: '1986',
		image: 'rishod-sobirov.jpg',
		cover: 'rishod-sobirov-cover.jpg',
		link: 'https://en.wikipedia.org/wiki/Rishod_Sobirov',
		medals: [
			{ id: 33, year: '2007', type: 'S', city: 'Kuwait City', event: 'Asian Championships', category: '-60kg' },
			{ id: 34, year: '2008', type: 'B', city: 'Beijing', event: 'Olympic Games', category: '-60kg' },
			{ id: 35, year: '2010', type: 'G', city: 'Tokyo', event: 'World Championships', category: '-60kg' },
			{ id: 36, year: '2011', type: 'G', city: 'Paris', event: 'World Championships', category: '-60kg' },
			{ id: 37, year: '2012', type: 'B', city: 'London', event: 'Olympic Games', category: '-60kg' },
			{ id: 38, year: '2015', type: 'B', city: 'Astana', event: 'World Championships', category: '-66kg' },
			{ id: 39, year: '2016', type: 'B', city: 'Rio de Janeiro', event: 'Olympic Games', category: '-66kg' }
		]
	},
	{
		id: 'ryoko-tani',
		name: 'Ryoko Tani',
		country: {
			id: 'jp',
			name: 'Japan',
			icon: 'flag-jp.png'
		},
		birth: '1975',
		image: 'ryoko-tani.jpg',
		cover: 'ryoko-tani-cover.jpg',
		link: 'https://en.wikipedia.org/wiki/Ryoko_Tani',
		medals: [
			{ id: 40, year: '1991', type: 'B', city: 'Barcelona', event: 'World Championships', category: '-48kg' },
			{ id: 41, year: '1991', type: 'B', city: 'Osaka', event: 'Asian Championships', category: '-48kg' },
			{ id: 42, year: '1992', type: 'S', city: 'Barcelona', event: 'Olympic Games', category: '-48kg' },
			{ id: 43, year: '1993', type: 'G', city: 'Hamilton', event: 'World Championships', category: '-48kg' },
			{ id: 44, year: '1994', type: 'G', city: 'Hiroshima', event: 'Asian Games', category: '-48kg' },
			{ id: 45, year: '1995', type: 'G', city: 'Chiba', event: 'World Championships', category: '-48kg' },
			{ id: 46, year: '1995', type: 'G', city: 'Fukuoka', event: 'Universiade', category: '-48kg' },
			{ id: 47, year: '1996', type: 'S', city: 'Atlanta', event: 'Olympic Games', category: '-48kg' },
			{ id: 48, year: '1997', type: 'G', city: 'Paris', event: 'World Championships', category: '-48kg' },
			{ id: 49, year: '1999', type: 'G', city: 'Birmingham', event: 'World Championships', category: '-48kg' },
			{ id: 50, year: '2000', type: 'G', city: 'Sydney', event: 'Olympic Games', category: '-48kg' },
			{ id: 51, year: '2001', type: 'G', city: 'Munich', event: 'World Championships', category: '-48kg' },
			{ id: 52, year: '2003', type: 'G', city: 'Osaka', event: 'World Championships', category: '-48kg' },
			{ id: 53, year: '2004', type: 'G', city: 'Athens', event: 'Olympic Games', category: '-48kg' },
			{
				id: 54,
				year: '2007',
				type: 'G',
				city: 'Rio de Janeiro',
				event: 'World Championships',
				category: '-48kg'
			},
			{ id: 55, year: '2008', type: 'B', city: 'Beijing', event: 'Olympic Games', category: '-48kg' }
		]
	},
	{
		id: 'teddy-riner',
		name: 'Teddy Riner',
		country: {
			id: 'fr',
			name: 'France',
			icon: 'flag-fr.png'
		},
		birth: '1989',
		image: 'teddy-riner.jpg',
		cover: 'teddy-riner-cover.jpg',
		link: 'https://en.wikipedia.org/wiki/Teddy_Riner',
		medals: [
			{ id: 56, year: '2007', type: 'G', city: 'Belgrade', event: 'European Championships', category: '+100kg' },
			{
				id: 57,
				year: '2007',
				type: 'G',
				city: 'Rio de Janeiro',
				event: 'World Championships',
				category: '+100kg'
			},
			{ id: 58, year: '2008', type: 'B', city: 'Beijing', event: 'Olympic Games', category: '+100kg' },
			{
				id: 59,
				year: '2008',
				type: 'G',
				city: 'Levallois-Perret',
				event: 'World Openweight Championships',
				category: 'Open'
			},
			{ id: 60, year: '2009', type: 'G', city: 'Pescara', event: 'Mediterranean Games', category: '+100kg' },
			{ id: 61, year: '2009', type: 'G', city: 'Rotterdam', event: 'World Championships', category: '+100kg' },
			{ id: 62, year: '2010', type: 'G', city: 'Tokyo', event: 'World Championships', category: '+100kg' },
			{ id: 63, year: '2010', type: 'S', city: 'Tokyo', event: 'World Championships', category: 'Open' },
			{ id: 64, year: '2011', type: 'G', city: 'Istanbul', event: 'European Championships', category: '+100kg' },
			{ id: 65, year: '2011', type: 'G', city: 'Paris', event: 'World Championships', category: '+100kg' },
			{ id: 66, year: '2012', type: 'G', city: 'London', event: 'Olympic Games', category: '+100kg' },
			{ id: 67, year: '2013', type: 'G', city: 'Budapest', event: 'European Championships', category: '+100kg' },
			{
				id: 68,
				year: '2013',
				type: 'G',
				city: 'Rio de Janeiro',
				event: 'World Championships',
				category: '+100kg'
			},
			{ id: 69, year: '2014', type: 'G', city: 'Chelyabinsk', event: 'World Championships', category: '+100kg' },
			{
				id: 70,
				year: '2014',
				type: 'G',
				city: 'Montpellier',
				event: 'European Championships',
				category: '+100kg'
			},
			{ id: 71, year: '2015', type: 'G', city: 'Astana', event: 'World Championships', category: '+100kg' },
			{ id: 72, year: '2016', type: 'G', city: 'Kazan', event: 'European Championships', category: '+100kg' },
			{ id: 73, year: '2016', type: 'G', city: 'Rio de Janeiro', event: 'Olympic Games', category: '+100kg' }
		]
	}
];

export default athletes;
