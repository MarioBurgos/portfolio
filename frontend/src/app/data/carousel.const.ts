import { ICarouselItem } from '../modules/shared/carousel/icarousel-item.metadata';

export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
  {
    id: 0,
    title: {
      first: 'about',
      second: 'me',
    },
    subtitle:
      'En esta sección puedes encontrar algo de información sobre mi trayectoria como programador',
    link: '/about',
    image: '/assets/portfolio/dashboard/carousel/pradera.jpg',
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#FF0000' width='1600' height='800'/><g ><path fill='#ff1600' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/><path fill='#ff2c00' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/><path fill='#ff4300' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/><path fill='#ff5900' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/><path fill='#FF6F00' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/><path fill='#ff8000' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/><path fill='#ff9000' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/><path fill='#ffa100' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/><path fill='#ffb100' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/><path fill='#FFC200' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/></g></svg>",
  },
  {
    id: 1,
    title: {
      first: 'my',
      second: 'blog',
    },
    subtitle:
      'Aquí hay algunas entradas sobre todo aquello que me parece interesante compartir con vosotros',
    link: '/blog',
    image: '/assets/portfolio/dashboard/carousel/costa.jpg',
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'><rect fill='#5B9025' width='200' height='200'/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'><stop offset='0' stop-color='#000' stop-opacity='0'/><stop offset='1' stop-color='#000' stop-opacity='1'/></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'><stop offset='0' stop-color='#000' stop-opacity='0'/><stop offset='1' stop-color='#000' stop-opacity='1'/></linearGradient></defs><g fill='#457b0b' fill-opacity='0.6'><rect x='100' width='100' height='100'/><rect y='100' width='100' height='100'/></g><g fill-opacity='0.5'><polygon fill='url(#a)' points='100 30 0 0 200 0'/><polygon fill='url(#b)' points='100 100 0 130 0 100 200 100 200 130'/></g></svg>",
  },
  {
    id: 2,
    title: {
      first: 'Lorem',
      second: 'Ipsum',
    },
    subtitle: 'dolor sit amet',
    link: '/',
    image: '/assets/portfolio/dashboard/carousel/libelula.jpg',
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'><rect fill='#BA68BB' width='100' height='1000'/><g fill-opacity='1'><circle  fill='#BA68BB' cx='50' cy='0' r='50'/><g fill='#b863bd' ><circle cx='0' cy='50' r='50'/><circle cx='100' cy='50' r='50'/></g><circle  fill='#b75dbf' cx='50' cy='100' r='50'/><g fill='#b558c2' ><circle cx='0' cy='150' r='50'/><circle cx='100' cy='150' r='50'/></g><circle  fill='#b252c4' cx='50' cy='200' r='50'/><g fill='#af4dc7' ><circle cx='0' cy='250' r='50'/><circle cx='100' cy='250' r='50'/></g><circle  fill='#ac48ca' cx='50' cy='300' r='50'/><g fill='#a842cd' ><circle cx='0' cy='350' r='50'/><circle cx='100' cy='350' r='50'/></g><circle  fill='#a43dd0' cx='50' cy='400' r='50'/><g fill='#a037d3' ><circle cx='0' cy='450' r='50'/><circle cx='100' cy='450' r='50'/></g><circle  fill='#9b32d7' cx='50' cy='500' r='50'/><g fill='#952cda' ><circle cx='0' cy='550' r='50'/><circle cx='100' cy='550' r='50'/></g><circle  fill='#8f27de' cx='50' cy='600' r='50'/><g fill='#8821e1' ><circle cx='0' cy='650' r='50'/><circle cx='100' cy='650' r='50'/></g><circle  fill='#801ce5' cx='50' cy='700' r='50'/><g fill='#7716e9' ><circle cx='0' cy='750' r='50'/><circle cx='100' cy='750' r='50'/></g><circle  fill='#6c11ed' cx='50' cy='800' r='50'/><g fill='#5f0cf2' ><circle cx='0' cy='850' r='50'/><circle cx='100' cy='850' r='50'/></g><circle  fill='#5007f6' cx='50' cy='900' r='50'/><g fill='#3a05fa' ><circle cx='0' cy='950' r='50'/><circle cx='100' cy='950' r='50'/></g><circle  fill='#0E04FF' cx='50' cy='1000' r='50'/></g></svg>",
  },
  {
    id: 3,
    title: {
      first: 'Lorem',
      second: 'Ipsum',
    },
    subtitle: 'dolor sit amet',
    link: '/',
    image: '/assets/portfolio/dashboard/carousel/bicicletas.jpg',
    svg: '',
  },
  {
    id: 4,
    title: {
      first: 'Lorem',
      second: 'Ipsum',
    },
    subtitle: 'dolor sit amet',
    link: '/',
    image:
      'https://a-static.besthdwallpaper.com/playa-3d-papel-pintado-800x600-73_17.jpg',
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#ff9d00' width='1600' height='800'/><g stroke='#000' stroke-width='66.7' stroke-opacity='0.05' ><circle  fill='#ff9d00' cx='0' cy='0' r='1800'/><circle  fill='#fb8d17' cx='0' cy='0' r='1700'/><circle  fill='#f47d24' cx='0' cy='0' r='1600'/><circle  fill='#ed6e2d' cx='0' cy='0' r='1500'/><circle  fill='#e35f34' cx='0' cy='0' r='1400'/><circle  fill='#d85239' cx='0' cy='0' r='1300'/><circle  fill='#cc453e' cx='0' cy='0' r='1200'/><circle  fill='#be3941' cx='0' cy='0' r='1100'/><circle  fill='#b02f43' cx='0' cy='0' r='1000'/><circle  fill='#a02644' cx='0' cy='0' r='900'/><circle  fill='#901e44' cx='0' cy='0' r='800'/><circle  fill='#801843' cx='0' cy='0' r='700'/><circle  fill='#6f1341' cx='0' cy='0' r='600'/><circle  fill='#5e0f3d' cx='0' cy='0' r='500'/><circle  fill='#4e0c38' cx='0' cy='0' r='400'/><circle  fill='#3e0933' cx='0' cy='0' r='300'/><circle  fill='#2e062c' cx='0' cy='0' r='200'/><circle  fill='#210024' cx='0' cy='0' r='100'/></g></svg>",
  },
  {
    id: 5,
    title: {
      first: 'Lorem',
      second: 'Ipsum',
    },
    subtitle: 'dolor sit amet',
    link: '/',
    image: 'https://www.gdargaud.net/Photo/800/20051224_0255_MtCookRoad.jpg',
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1200 800'><rect fill='#FF5522' width='1200' height='800'/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'><stop  offset='0' stop-color='#FF5522'/><stop  offset='1' stop-color='#E0F'/></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'><stop  offset='0' stop-color='#ff381f'/><stop  offset='1' stop-color='#ce00f3'/></linearGradient><linearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'><stop  offset='0' stop-color='#ff1c1d'/><stop  offset='1' stop-color='#b000e6'/></linearGradient><linearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'><stop  offset='0' stop-color='#ff1935'/><stop  offset='1' stop-color='#9400da'/></linearGradient><linearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'><stop  offset='0' stop-color='#ff164e'/><stop  offset='1' stop-color='#7a00ce'/></linearGradient><linearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'><stop  offset='0' stop-color='#ff1367'/><stop  offset='1' stop-color='#6200c1'/></linearGradient><linearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'><stop  offset='0' stop-color='#ff0f82'/><stop  offset='1' stop-color='#4d00b5'/></linearGradient><linearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'><stop  offset='0' stop-color='#ff0c9d'/><stop  offset='1' stop-color='#3900a8'/></linearGradient><linearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'><stop  offset='0' stop-color='#ff09b8'/><stop  offset='1' stop-color='#28009c'/></linearGradient><linearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'><stop  offset='0' stop-color='#ff06d5'/><stop  offset='1' stop-color='#180090'/></linearGradient><linearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'><stop  offset='0' stop-color='#ff03f2'/><stop  offset='1' stop-color='#0b0083'/></linearGradient><linearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'><stop  offset='0' stop-color='#E0F'/><stop  offset='1' stop-color='#007'/></linearGradient></defs><g fill-opacity='1'><rect fill='url(#a)' width='1200' height='800'/><rect fill='url(#b)' x='100' width='1100' height='800'/><rect fill='url(#c)' x='200' width='1000' height='800'/><rect fill='url(#d)' x='300' width='900' height='800'/><rect fill='url(#e)' x='400' width='800' height='800'/><rect fill='url(#f)' x='500' width='700' height='800'/><rect fill='url(#g)' x='600' width='600' height='800'/><rect fill='url(#h)' x='700' width='500' height='800'/><rect fill='url(#i)' x='800' width='400' height='800'/><rect fill='url(#j)' x='900' width='300' height='800'/><rect fill='url(#k)' x='1000' width='200' height='800'/><rect fill='url(#l)' x='1100' width='100' height='800'/></g></svg>",
  },
];
