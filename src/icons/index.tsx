import {
  ComponentPropsWithoutRef,
  ComponentType,
  FunctionComponent,
} from 'react';

import { ReactComponent as _Cart } from './assets/icon-cart.svg';
import { ReactComponent as _Close } from './assets/icon-close.svg';
import { ReactComponent as _Delete } from './assets/icon-delete.svg';
import { ReactComponent as _Menu } from './assets/icon-menu.svg';
import { ReactComponent as _Minus } from './assets/icon-minus.svg';
import { ReactComponent as _Next } from './assets/icon-next.svg';
import { ReactComponent as _Plus } from './assets/icon-plus.svg';
import { ReactComponent as _Previous } from './assets/icon-previous.svg';
import { ReactComponent as _Logo } from './assets/logo.svg';

type IconProps = {
  className?: string;
};

const withIcon = (Svg: ComponentType<ComponentPropsWithoutRef<'svg'>>) => {
  const IconComponent: FunctionComponent<IconProps> = ({ className }) => {
    return <Svg className={className} />;
  };

  return IconComponent;
};

const IconCart = withIcon(_Cart);
const IconClose = withIcon(_Close);
const IconDelete = withIcon(_Delete);
const IconMenu = withIcon(_Menu);
const IconMinus = withIcon(_Minus);
const IconNext = withIcon(_Next);
const IconPlus = withIcon(_Plus);
const IconPrevious = withIcon(_Previous);
const IconLogo = withIcon(_Logo);

export {
  IconCart,
  IconClose,
  IconDelete,
  IconMenu,
  IconMinus,
  IconNext,
  IconPlus,
  IconPrevious,
  IconLogo,
};
