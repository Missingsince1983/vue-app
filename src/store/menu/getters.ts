import { MenuLink } from 'src/components/models';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { MenuStateInterface } from './state';


const getters: GetterTree<MenuStateInterface, StateInterface> = {
  getScreen (context): {
    current: number;
    laptop: number;
    desktop: number;
  } {
    return context.screen // eslint-disable-line
  },
  getMenuItem (context): MenuLink | null {
    return context.menuItem
  }
};

export default getters;
