import { test, expect } from '@playwright/test';
import * as tasks from '../screenplay/tasks'
import { Actor } from '../screenplay/actors/actors';

let actor, page


test.beforeEach('the user is on the Testing Practice Page', async ({browser, baseURL}) => {
        page = await browser.newPage();
        await page.goto(`${baseURL}`);
        expect(page.locator('a', { hasText: 'GUI Elements' })).toBeVisible
        actor = new Actor('User', page);
    })

test('as a User, I want to be able to fill the form on this page', async()=>{
        await actor.attemptTo(tasks.fillingFormName('jesstest'))
        await actor.attemptTo(tasks.fillingFormEmail('jesstest@mail.com'))
        await actor.attemptTo(tasks.fillingFormPhone('08123777'))
        await actor.attemptTo(tasks.fillingFormAddress('Test street 17'))
        await actor.attemptTo(tasks.selectGender())
        await actor.attemptTo(tasks.selectDays())
        await actor.attemptTo(tasks.selectCountry())
        await actor.attemptTo(tasks.selectColors())
        await actor.attemptTo(tasks.selectSortedList())
        await actor.attemptTo(tasks.selectDate1())
        await actor.attemptTo(tasks.selectDate2())
        await actor.attemptTo(tasks.selectDateRange('2025-07-20','2025-07-23'))
        await expect(page.locator('[id="result"]')).toContainText('You selected a range of 3 days.')
        await actor.attemptTo(tasks.uploadFile('blue.jpeg'));
        await expect(page.locator('[id="singleFileStatus"]')).toContainText('Single file selected')
})