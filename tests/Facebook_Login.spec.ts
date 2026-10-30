import {test, expect} from '@playwright/test'

test('Facebook Login', async({page}) =>{
    await page.goto('https://web.facebook.com/');
    await page.waitForTimeout(5000);
})