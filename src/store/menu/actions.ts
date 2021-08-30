import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { MenuStateInterface } from './state';
import { MenuLink } from 'components/models';
import Axios from 'axios'
const actions: ActionTree<MenuStateInterface, StateInterface> = {
  loadMenu (): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        Axios.get('menudata.json', {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (response.data.result === 1) { //eslint-disable-line
            resolve(response.data.menu) //eslint-disable-line
          }
        }).catch((err) => console.log(err))        
      }, 1000);

    })
  },
  updateScreen (context, payload: number) {
    context.commit('changeScreen', payload)
  },
  setMenuItem (context, payload: MenuLink) {
    context.commit('changeMenuItem', payload)
  }
};

export default actions;
