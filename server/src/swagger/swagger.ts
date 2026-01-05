import type { Application } from "express";
import swaggerJsdocs from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const v1Options: swaggerJsdocs.Options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Todos API",
      version: "1.0.0",
      description:
        "This is the server side of a todo app built with Node.js and Express.",
      contact: {
        name: "Zoltán Völcsey",
        email: "zvolcsey@gmail.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/license/mit/",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "v1 Development server",
      },
    ],
    components: {
      schemas: {
        Todo: {
          type: "object",
          required: ["title"],
          properties: {
            id: {
              type: "string",
              format: "uuid",
              readOnly: true,
              example: "550e8400-e29b-41d4-a716-446655440000",
            },
            title: { type: "string", example: "Buy groceries" },
            isCompleted: { type: "boolean", default: false, example: false },
            createdAt: {
              type: "string",
              format: "date-time",
              readOnly: true,
              example: "2023-10-01T12:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              readOnly: true,
              example: "2023-10-01T12:00:00Z",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/v1/*.ts"],
};

const v1SwaggerSpec = swaggerJsdocs(v1Options);

export const setupSwagger = (app: Application) => {
  app.use("/api-docs/v1", swaggerUi.serve, swaggerUi.setup(v1SwaggerSpec));
};
