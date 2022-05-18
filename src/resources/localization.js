import LocalizedStrings from 'localized-strings';

const localization = new LocalizedStrings({
  en: {
    navigation: {
      title: 'Kuk',
      login: 'Login',
      logout: 'Logout',
      profile: 'Profile',
    },
    homePage: {
      welcome: 'Welcome to Kuk',
      whatIsKuk: 'What is Kuk?',
    },
    notFoundPage: {
      title: '404',
      message: 'Page not found',
    },
    authPage: {
      login: 'Login',
      register: 'Register',
      forgotPassword: 'Forgot Password',
      resetPassword: 'Reset Password',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      submit: 'Submit',
      alreadyHaveAccount: 'Already have an account?',
      createProfile: 'Create Profile',
      sendingRequest: 'Sending request...',
      authenticationFailed: 'Authentication failed!',
      forPublicHealthOrgnizations: 'For public health orgnizations',
      forParents: 'For parents',
    },
  },
  uk: {
    navigation: {
      title: 'Kuk',
      login: 'Увійти',
      logout: 'Вийти',
      profile: 'Профіль',
    },
    homePage: {
      welcome: 'Ласкаво просимо на Kuk',
      whatIsKuk: 'Що таке Kuk?',
    },
    notFoundPage: {
      title: '404',
      message: 'Сторінка не знайдена',
    },
    authPage: {
      login: 'Увійти',
      register: 'Зареєструватися',
      forgotPassword: 'Забув пароль',
      resetPassword: 'Сбросити пароль',
      email: 'Пошта',
      password: 'Пароль',
      confirmPassword: 'Підтвердити пароль',
      submit: 'Підтвердити',
      alreadyHaveAccount: 'Вже маєш акаунт?',
      createProfile: 'Створити профіль',
      sendingRequest: 'Відправляємо запит...',
      authenticationFailed: 'Аутентифікація не вдалася',
      forPublicHealthOrgnizations: 'Для громадських організацій',
      forParents: 'Для батьків',
    },
  },
});
export default localization;
