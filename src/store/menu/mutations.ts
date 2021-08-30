import { MutationTree } from 'vuex';
import { MenuStateInterface } from './state';
import { MenuLink } from 'components/models';
const mutation: MutationTree<MenuStateInterface> = {
  changeScreen (state: MenuStateInterface, payload: number): void {
    state.screen.current = payload
  },
  changeMenuItem (state: MenuStateInterface, payload: MenuLink): void {
    state.menuItem = payload
  },
};

export default mutation;
