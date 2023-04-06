import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('relatorio')
      .service('relatorioService')
      .getWelcomeMessage();
  },

  async getContentTypes(ctx: any) {
    try {
      ctx.body = await strapi
        .plugin('relatorio')
        .service('relatorioService')
        .getContentTypes();
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async getAll(ctx) {
    try {
      ctx.body = await strapi
        .plugin('relatorio')
        .service('relatorioService')
        .getAll(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  }
});
