import { Actor } from '../actors/actors';
import path from 'path';

export const fillingFormName = (name: string) =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="name"]').click()
        await actor.page.locator('[id="name"]').fill(name)
    }
})
export const fillingFormEmail = (email: string) =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="email"]').click()
        await actor.page.locator('[id="email"]').fill(email)
    }
})

export const fillingFormPhone = (phone: string) =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="phone"]').click()
        await actor.page.locator('[id="phone"]').fill(phone)
    }
})

export const fillingFormAddress = (address: string) =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="textarea"]').click()
        await actor.page.locator('[id="textarea"]').fill(address)
    }
})

export const selectGender = () =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="female"]').click()
    }
})

export const selectDays = () =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="sunday"]').click()
        await actor.page.locator('[id="friday"]').click()
    }
})

export const selectCountry = () =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="country"]').click()
        await actor.page.locator('[id="country"]').selectOption('japan')
    }
})

export const selectColors = () =>({
    async performAs(actor: Actor){
        await actor.page.locator('option[value="blue"]').click()
    }
})

export const selectSortedList = () =>({
    async performAs(actor: Actor){
        await actor.page.locator('option[value="cheetah"]').click()
    }
})

export const selectDate1 = () =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="datepicker"]').click()
        await actor.page.locator('a[data-date="20"]').click()
    }
})

export const selectDate2 = () =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="txtDate"]').click()
        await actor.page.locator('a[data-date="17"]').click()
    }
})

export const selectDateRange = (startDate: string, endDate: string) =>({
    async performAs(actor: Actor){
        await actor.page.locator('[id="start-date"]').click()
        await actor.page.locator('[id="start-date"]').fill(startDate)
        await actor.page.locator('[id="end-date"]').click()
        await actor.page.locator('[id="end-date"]').fill(endDate)
        await actor.page.locator('button.submit-btn').click();
    }
})

export const uploadFile = (fileName: string) => ({
    async performAs(actor: Actor) {
      const filePath = path.resolve(process.cwd(), 'test-data', fileName);
      console.log(filePath)
      await actor.page.locator('[id="singleFileInput"]').setInputFiles(filePath);
      await actor.page.locator('button', { hasText: 'Upload Single File' }).click()
    },
})
