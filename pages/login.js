exports.login=class login{

   constructor(page)
   {
      this.page = page
      this.txt_username = page.locator('//input[@name="username"]')
      this.txt_password = page.locator('//input[@name="password"]')
      this.btn_login = page.locator('//button[@type="submit"]')
   }

   async loginMethod(username, password)
   {
      await this.txt_username.fill(username)
      await this.txt_password.fill(password)
      await this.btn_login.click()
   }


}