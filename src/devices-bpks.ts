// Default
// xs: '0px',
// sm: '576px',
// md: '768px',
// lg: '992px',
// xl: '1200px'

const size = {
    mobileXS: '250px',
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export default {
    mobileXS: `(min-width:  ${ size.mobileXS })`,
    mobileS:  `(min-width:  ${ size.mobileS })`,
    mobileM:  `(min-width:  ${ size.mobileM })`,
    mobileL:  `(min-width:  ${ size.mobileL })`,
    tablet:   `(min-width:  ${ size.tablet  })`,
    laptop:   `(min-width:  ${ size.laptop  })`,
    laptopL:  `(min-width:  ${ size.laptopL })`,
    desktop:  `(min-width:  ${ size.desktop })`,
    desktopL: `(min-width:  ${ size.desktop })`
};