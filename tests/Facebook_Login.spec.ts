import {test, expect} from '@playwright/test'

test('Facebook Login', async({page}) =>{
    await page.goto('https://web.facebook.com/');
    await page.waitForTimeout(5000);

    await page.getByLabel('Email or mobile number').isVisible();
    await page.getByLabel('Email or mobile number').click();
    await page.getByLabel('Email or mobile number').fill('Kaposh09')

    await page.getByLabel('Password').isVisible();
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('08241987')
    await page.waitForTimeout(3000);

    await page.getByLabel('Log In').click();
    await page.waitForTimeout(3000);
})