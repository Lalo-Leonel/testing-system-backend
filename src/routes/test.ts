import { Router } from 'express';
import { createTest, listTest, showTest } from '../controllers/test';

const routerTest = Router();

routerTest.post('/test', createTest);
routerTest.get('/test', listTest);
routerTest.get('/test/:id', showTest);

export default routerTest;
