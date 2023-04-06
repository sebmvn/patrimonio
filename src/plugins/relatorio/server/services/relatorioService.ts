import { Component } from '@strapi/icons';
import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },

  async getContentTypes() {
    // const contentTypes = strapi.contentTypes
    // return Object.values(contentTypes).filter((el: any) => el.uid.includes('api::'))
    const entry = strapi.entityService.findMany(['api::computador.computador', 'api::monitor.monitor'], {
     populate: '*',
    });

    console.log(entry);
    return await entry;
  },

  async getAll(query) {
    const q = strapi.entityService.findMany('api::computador.computador');
    console.log(await q);
  }
});
