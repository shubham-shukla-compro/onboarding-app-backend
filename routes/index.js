const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

const taskController = new TaskController();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type : object
 *      required:
 *        - module
 *        - contents
 *        - duration
 *      properties:
 *        id :
 *          type : integer
 *          description : The auto-generated id of the task
 *        module :
 *          type : string
 *          description : The module name of the task
 *        contents :
 *          type : string
 *          description : The contents of the task
 *        duration :
 *          type : integer
 *          description : The duration of the task
 *        finished :
 *          type : bool
 *          description : The finished status of the task
 *      example:
 *        id: 1234
 *        module : "JavaScript"
 *        contents: "DOM, Events, Promises, Async/Await"
 *        duration : 5
 *        finished : false
 */

/**
 * @swagger
 * tags:
 *  name: Onboarding Tasks
 *  description: The Onboarding Tasks API
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary : Returns the list of all the tasks
 *    tags : [Onboarding Tasks]
 *    responses:
 *      200:
 *        description: The list of tasks
 *        content:
 *          application/json:
 *            schema:
 *             type : array
 *             items:
 *              $ref: '#/components/schemas/Task'
 */

router.get('/tasks', taskController.getAll);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create a new task
 *    tags: [Onboarding Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The task was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Something went wrong
 */

router.post('/tasks', taskController.create);

module.exports = router;
