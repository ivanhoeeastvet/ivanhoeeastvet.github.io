import { config } from './config.mjs';
import { utils } from './utils.mjs';

const app = {
    init(){

      utils.uptotop()

    },
    messenger(){

      if(config.tawk.enabled){

        if(typeof Tawk_API === 'undefined'){
          window.Tawk_API = {};
        }

        let Tawk_LoadStart = new Date();

        let s1=document.createElement("script");

        s1.async = true;
        s1.src = (config.tawk.basePath + config.tawk.api);
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin','*');
        document.body.append(s1);

      }

      return this;

    }
}

app.messenger().init();
