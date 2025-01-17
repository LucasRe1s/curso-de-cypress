const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
    },
    CONTAS: {
        INPUT_NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
    },
    MESSAGE: '.toast-message',
}

export default locators;