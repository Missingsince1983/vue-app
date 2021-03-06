import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';
import Axios from 'axios'
const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  loadMenu (): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        Axios.get('menudata.json', {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (response.data) {
            resolve(response.data.menu) //eslint-disable-line
          }
        }).catch((err) => console.log(err))        
      }, 1000);

    })
  },
};

export default actions;
