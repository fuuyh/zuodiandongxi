import Router from 'koa-router';
import { validateRequest } from '../middlewares/validate-request.middleware';
import MenuController from '../controllers/menu.controller';
import { MenuEntity } from '../entities/Menu.entity';

const router = new Router({ prefix: '/api/menu' });

router.post('/create', validateRequest(MenuEntity), MenuController.createMenu);
router.post('/update', validateRequest(MenuEntity), MenuController.updateMenu);

export default router;