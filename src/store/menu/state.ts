import { MenuLink } from 'components/models'
export interface MenuStateInterface {
  prop: boolean;
  screen: {
    current: number;
    laptop: number;
    desktop: number;
  },
  menuItem: MenuLink | null
}

function state(): MenuStateInterface {
  return {
    prop: false,
    screen: {
      current: 0,
      laptop: 1024,
      desktop: 1360
    },
    menuItem: null
  }
};

export default state;
