import { Router } from 'router';

const masterContainer = $('#master-container');

const router = new Router();
router
    .on('/home', () => masterContainer.html('Home page'));

$(window).on('hashchange', () => router.navigate());