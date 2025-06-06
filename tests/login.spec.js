import {test, expect} from '@playwright/test'
import { login } from '../pages/login'

test('login test',async({page})=>{

    const lg = new login(page)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await lg.loginMethod('Admin','admin123')
})