const extractLanguage = (locale) => {
  return locale.split('_')[0];
}

const extractRegion = (region) => {
  return region.split('.')[0]
                .split('_')[1];
}
console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('ko_KR.UTG-16'));
console.log(extractRegion('en_US.UTF-8'));