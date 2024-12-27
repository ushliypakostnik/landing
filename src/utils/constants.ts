// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TConfig = { readonly [key: string]: any };

export enum Themes {
  default = 'default',
  dark = 'dark',
}

export enum DSEvents {
  toggleTheme = 'toggleTheme',
}

export const DESIGN: TConfig = {
  BREAKPOINTS: {
    min: 320,
    tablet: 600,
    desktop: 1024,
    large: 1360,
  },
  THEMES: {
    [Themes.default]: {
      // Content

      harakiri: '#1D222A',
      harakiriHover: '#0D2F7C',
      harakiriPressed: '#164CC0',

      troy: '#525760',
      troyHover: '#0D2F7C',
      troyPressed: '#164CC0',

      metropolis: '#80858E',
      metropolisHover: '#6482C4',
      metropolisPressed: '#406CD0',
      metropolisOpacity: '#80858EA3',

      inception: '#D4D5D9',
      inceptionHover: '#C9CACF',
      inceptionPressed: '#DFDFE2',

      rocky: '#4480F3',
      rockyHover: '#578DF4',
      rockyPressed: '#3173F2',
      rockyOpacity: '#4480F3A3',

      white: '#FFFFFF',
      whiteOpacity80: '#FFFFFFCC',
      whiteOpacity24: '#FFFFFF3D',

      matrix: '#5FAD05',
      matrixHover: '#6AC106',
      matrixPressed: '#549905',
      matrixOpacity: '#5FAD05A3',

      lebowski: '#E78018',
      lebowskiHover: '#E98A2A',
      lebowskiPressed: '#D57616',
      lebowskiOpacity: '#E78018A3',

      fargo: '#E35454',
      fargoHover: '#E66666',
      fargoPressed: '#E04343',
      fargoOpacity: '#E35454A3',

      fightclub: '#CF54B6',
      fightclubHover: '#D364BD',
      fightclubPressed: '#CA44B0',
      fightclubOpacity: '#CF54B6A3',

      alien: '#7DAFFC',
      alienHover: '#4480F3', // rocky

      gentlemen: '#9867F9',
      gentlemenHover: '#A57BFA',
      gentlemenPressed: '#8B53F8',
      gentlemenOpacity: '#9867F9A3',

      drive: '#8CCE5A',

      snatch: '#F5AB61',

      indiana: '#FB9898',

      pulpfiction: '#EF8EDB',

      memento: '#BCD6FE',

      seven: '#B79FF3',

      aquaman: '#1FAFC1',
      aquamanHover: '#22BFD3',
      aquamanPressed: '#1D9FAF',
      aquamanOpacity: '#1FAFC1A3',

      shershaah: '#76CEDB',

      goodfellas: '#FFDA1C',
      goodfellasHover: '#FFE042',
      goodfellasPressed: '#FAD100',
      goodfellasOpacity: '#FFDA1CA3',

      mummy: '#FFE45C',

      // BG

      amelie: '#FFFFFF',
      amelieOpacity80: '#FFFFFFCC',

      apocalypse: '#EAECF0',
      apocalypseHover: '#EDEFF2',
      apocalypsePressed: '#E7EAEE',

      trainspotting: '#F5F6F8',

      arrival: '#E2ECFD',
      arrivalHover: '#D9E6FC',
      arrivalPressed: '#ECF2FE',

      amadeus: '#E3F3D8',
      amadeusHover: '#DDF1D0',
      amadeusPressed: '#E9F5E0',

      greenmile: '#DFF3F6',
      greenmileHover: '#D7F0F4',
      greenmilePressed: '#E7F6F8',

      romance: '#FDE7E7',
      romanceHover: '#FCDEDE',
      romancePressed: '#FEF1F1',

      leon: '#FAE4F7',
      leonHover: '#F9DDF5',
      leonPressed: '#FCEEFA',

      jaws: '#F8EADB',
      jawsHover: '#F7E6D4',
      jawsPressed: '#FAF0E5',

      departed: '#ECE9FC',
      departedHover: '#E8E4FB',
      departedPressed: '#EFEDFD',

      citylights: '#FFF7CE',
      citylightsHover: '#FFF3B8',
      citylightsPressed: '#FFFAE0',

      dangal: '#4480F352',
      dangalHover: '#4480F38F',
      // dangalPressed: none,

      avengers: '#4480F31F',
      avengersHover: '#4480F314',
      avengersPressed: '#4480F329',

      django: '#D4D5D952',
      djangoHover: '#D4D5D97A',
      djangoPressed: '#D4D5D97A',

      walle: '#AAAEB61F',
      walleHover: '#AAAEB614',
      wallePressed: '#AAAEB61F',

      casablanca: '#00000014',

      schindler: '#FB989829',
      schindlerHover: '#FB98983D',
      schindlerPressed: '#FB98983D',

      oldboy: '#FFFFFF1F',

      // Social
      facebook: '#1877F2',
      instagram: '#E1306C',
      vkontakte: '#0077FF',
      odnoklassniki: '#EE8208',
      twitter: '#1DA1F2',
      google: '#EA4335',
      yandex_yellow: '#FFCC00',
      yandex_red: '#FF0000',
      mailru_blue: '#005FF9',
      mailru_orange: '#FF9E00',
      // TODO! NEW!!!!
      telegram: '#37AEE2',

      // Partners
      gosuslugi_blue: '#0065B1',
      gosuslugi_red: '#EE3F58',

      hamilton: '#0C10181F',
      hamiltonHover: '#0C101829',
      hamiltonPressed: '#0C101814',

      blackOpacity32: '#00000052',
      blackOpacity24: '#0000003D',
      blackOpacity16: '#00000029',

      terminator: '#00000000',
    },
    [Themes.dark]: {
      // Content

      harakiri: '#EAECF0',
      harakiriHover: '#BCD6FE',
      harakiriPressed: '#7DDAFFC',

      troy: '#AAAEB6',
      troyHover: '#BCD6FE',
      troyPressed: '#7DAFFC',

      metropolis: '#80858E',
      metropolisHover: '#6E84B5',
      metropolisPressed: '#5476C2',
      metropolisOpacity: '#80858EA3',

      inception: '#525760',
      inceptionHover: '#595F69',
      inceptionPressed: '#494D55',

      rocky: '#4480F3',
      rockyHover: '#578DF4',
      rockyPressed: '#3173F2',
      rockyOpacity: '#4480F3A3',

      white: '#FFFFFF',
      whiteOpacity80: '#FFFFFFCC',
      whiteOpacity24: '#FFFFFF3D',

      matrix: '#5FAD05',
      matrixHover: '#6AC106',
      matrixPressed: '#549905',
      matrixOpacity: '#5FAD05A3',

      lebowski: '#E78018',
      lebowskiHover: '#E98A2A',
      lebowskiPressed: '#D57616',
      lebowskiOpacity: '#E78018A3',

      fargo: '#E35454',
      fargoHover: '#E66666',
      fargoPressed: '#E04343',
      fargoOpacity: '#E35454A3',

      fightclub: '#CF54B6',
      fightclubHover: '#D364BD',
      fightclubPressed: '#CA44B0',
      fightclubOpacity: '#CF54B6A3',

      alien: '#7DAFFC',
      alienHover: '#4480F3', // rocky

      gentlemen: '#9867F9',
      gentlemenHover: '#A57BFA',
      gentlemenPressed: '#8B53F8',
      gentlemenOpacity: '#9867F9A3',

      drive: '#8CCE5A',

      snatch: '#F5AB61',

      indiana: '#FB9898',

      pulpfiction: '#EF8EDB',

      memento: '#BCD6FE',

      seven: '#B79FF3',

      aquaman: '#1FAFC1',
      aquamanHover: '#22BFD3',
      aquamanPressed: '#1D9FAF',
      aquamanOpacity: '#1FAFC1A3',

      shershaah: '#76CEDB',

      goodfellas: '#FFDA1C',
      goodfellasHover: '#FFE042',
      goodfellasPressed: '#FAD100',
      goodfellasOpacity: '#FFDA1CA3',

      mummy: '#FFE45C',

      // BG

      amelie: '#1D222A',
      amelieOpacity80: '#1D222ACC',

      apocalypse: '#1D222A',
      apocalypseHover: '#212730',
      apocalypsePressed: '#191D24',

      trainspotting: '#121721',

      arrival: '#1D222A',
      arrivalHover: '#212730',
      arrivalPressed: '#ECF2FE                                 ',

      amadeus: '#1D222A',
      amadeusHover: '#212730',
      amadeusPressed: '#191D24',

      greenmile: '#1D222A',
      greenmileHover: '#212730',
      greenmilePressed: '#191D24',

      romance: '#1D222A',
      romanceHover: '#212730',
      romancePressed: '#191D24',

      leon: '#1D222A',
      leonHover: '#212730',
      leonPressed: '#191D24',

      jaws: '#1D222A',
      jawsHover: '#212730',
      jawsPressed: '#191D24',

      departed: '#1D222A',
      departedHover: '#212730',
      departedPressed: '#191D24',

      citylights: '#1D222A',
      citylightsHover: '#212730',
      citylightsPressed: '#191D24',

      dangal: '#4480F366',
      dangalHover: '#4480F3A3',
      // dangalPressed: none,

      avengers: '#4480F333',
      avengersHover: '#4480F329',
      avengersPressed: '#4480F33D',

      django: '#FFFFFF1F',
      djangoHover: '#FFFFFF29',
      djangoPressed: '#FFFFFF29',

      walle: '#FFFFFF14',
      walleHover: '#FFFFFF0D',
      wallePressed: '#FFFFFF14',

      casablanca: '#00000014',

      schindler: '#FB989829',
      schindlerHover: '#FB98983D',
      schindlerPressed: '#FB98983D',

      oldboy: '#FFFFFF1F',

      // Social
      facebook: '#1877F2',
      instagram: '#E1306C',
      vkontakte: '#0077FF',
      odnoklassniki: '#EE8208',
      twitter: '#1DA1F2',
      google: '#EA4335',
      yandex_yellow: '#FFCC00',
      yandex_red: '#FF0000',
      mailru_blue: '#005FF9',
      mailru_orange: '#FF9E00',
      // TODO! NEW!!!!
      telegram: '#37AEE2',

      // Partners
      gosuslugi_blue: '#0065B1',
      gosuslugi_red: '#EE3F58',

      hamilton: '#0C10181F',
      hamiltonHover: '#0C1018F5',
      hamiltonPressed: '#0C1018A3',

      blackOpacity32: '#00000052',
      blackOpacity24: '#0000003D',
      blackOpacity16: '#00000029',

      terminator: '#00000000',
    },
  },
};

// Экранный помощник
export const ScreenHelper = (() => {
  const LARGE = DESIGN.BREAKPOINTS.large;
  const DESKTOP = DESIGN.BREAKPOINTS.desktop;
  const TABLET = DESIGN.BREAKPOINTS.tablet;

  const isDesktops = () => {
    return window.matchMedia(`(min-width: ${DESKTOP}px)`).matches;
  };

  const isWidest = () => {
    return window.matchMedia(`(min-width: ${LARGE}px)`).matches;
  };

  const isWide = () => {
    return window.matchMedia(
      `(min-width: ${TABLET}px) and (min-width: ${DESKTOP - 1}px)`,
    ).matches;
  };

  const isMiddle = () => {
    return window.matchMedia(
      `(min-width: ${TABLET}px) and (min-width: ${DESKTOP - 1}px)`,
    ).matches;
  };

  const isNarrow = () => {
    return window.matchMedia(`(max-width: ${TABLET}px)`).matches;
  };

  const isGadgets = () => {
    return window.matchMedia(`(max-width: ${DESKTOP - 1}px)`).matches;
  };

  return {
    isDesktops,
    isWidest,
    isWide,
    isMiddle,
    isNarrow,
    isGadgets,
  };
})();
