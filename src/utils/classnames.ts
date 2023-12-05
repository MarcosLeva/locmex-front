import classNamesOriginal from 'classnames';
import { overrideTailwindClasses } from 'tailwind-override';

export const classNames = (...args: any) =>
  overrideTailwindClasses(classNamesOriginal(...args));
