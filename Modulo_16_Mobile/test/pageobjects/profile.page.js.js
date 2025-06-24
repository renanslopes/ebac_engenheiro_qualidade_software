import { $ } from '@wdio/globals'

class ProfilePage {
    async profileName(name) {
        return await $(`//android.widget.TextView[@text="${name}"]`)
    }
    async logoutProfile() {
        return await $(`//android.view.ViewGroup[@content-desc="Logout"]`).click()
    }
    async confirmLogout() {
        return await $(`//android.view.ViewGroup[@content-desc="Yes"]`).click()
    }

}

export default new ProfilePage();
