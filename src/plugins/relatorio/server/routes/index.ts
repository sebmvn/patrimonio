export default [
  {
    method: "GET",
    path: "/",
    handler: "relatorioController.index",
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: "GET",
    path: "/allContentTypes",
    handler: "relatorioController.getContentTypes",
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: "GET",
    path: "/all",
    handler: "relatorioController.getAll",
    config: {
      policies: [],
      auth: false
    },
  },
];
