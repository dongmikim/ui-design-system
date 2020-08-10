import style from '~/assets/styles/style.css';

const commonStyles = {...style};

export function formatClassname(styleObject, classnames) {
  styleObject = {...styleObject, ...commonStyles};
  classnames = classnames.split(' ');
  classnames = classnames.map((cls) => {
    return styleObject[cls] || cls;
  }).join(' ');
  return classnames;
}