import { $ } from '@wdio/globals'

class HomePage {
    async openMenu() {
        await $('//android.view.View[@content-desc=", Profile"]').click()
    }
}

export default new HomePage();
