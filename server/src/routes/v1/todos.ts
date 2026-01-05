import express, { type Request, type Response } from "express";
import { v4 as uuidv4 } from "uuid";
import type {
  Todo,
  CreateTodoRequest,
  UpdateTodoRequest,
  ApiSucessResponse,
  Params,
} from "../../types/types.js";
import { ApiError } from "../../utils/utils.js";

const router = express.Router();

const todos: Todo[] = [
  {
    id: uuidv4(),
    title: "Learn TypeScript",
    isCompleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: "Learn Express",
    isCompleted: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

/**
 * @swagger
 * /todos:
 *  get:
 *    summary: Retrieve a list of v1 todos
 *    tags: [Todos v1]
 *    responses:
 *      200:
 *        description: A successful response
 */
router.get("/todos", (_req, res: Response<ApiSucessResponse<Todo[]>>) => {
  return res.status(200).json({ success: true, data: todos });
});

/**
 * @swagger
 * /todos:
 *  post:
 *    summary: Create a new v1 todo
 *    tags: [Todos v1]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - title
 *            properties:
 *              title:
 *                type: string
 *                example: "Buy groceries"
 *    responses:
 *      201:
 *        description: A successful response
 */
router.post(
  "/todos",
  (req: Request<CreateTodoRequest>, res: Response<ApiSucessResponse<Todo>>) => {
    const { title } = req.body;

    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    todos.push(newTodo);

    return res.status(201).json({ success: true, data: newTodo });
  }
);

/**
 * @swagger
 * /todos/{id}:
 *  patch:
 *    summary: Update a part of a v1 todo
 *    tags: [Todos v1]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *             title:
 *                type: string
 *                example: "Buy groceries and cook dinner"
 *             isCompleted:
 *               type: boolean
 *    responses:
 *      200:
 *        description: A successful response
 *      404:
 *        description: Not found
 */
router.patch(
  "/todos/:id",
  (
    req: Request<Params, {}, UpdateTodoRequest>,
    res: Response<ApiSucessResponse<Todo>>
  ) => {
    const { id } = req.params;
    const { title, isCompleted } = req.body;

    let idx = todos.findIndex((todo) => todo.id === id);

    if (idx === -1) {
      throw new ApiError(404, "Todo is not found");
    }

    const updatedTodo = {
      ...todos[idx]!,
      title: title ?? todos[idx]!.title,
      isCompleted: isCompleted ?? todos[idx]!.isCompleted,
      updatedAt: new Date().toISOString(),
    };
    todos[idx] = updatedTodo;

    return res.status(200).json({ success: true, data: updatedTodo });
  }
);

/**
 * @swagger
 * /todos/{id}:
 *  delete:
 *    summary: Delete a v1 todo
 *    tags: [Todos v1]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      204:
 *        description: A successful response
 *      404:
 *        description: Not found
 */
router.delete("/todos/:id", (req: Request<Params>, res: Response) => {
  const { id } = req.params;

  const idx = todos.findIndex((todo: Todo) => todo.id === id);

  if (idx === -1) {
    throw new ApiError(404, "Todo is not found");
  }

  todos.splice(idx, 1);

  return res.sendStatus(204);
});

export default router;
