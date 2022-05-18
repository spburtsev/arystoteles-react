import LocalizedStrings from 'localized-strings';

const localization = new LocalizedStrings({
  en: {
    navigation: {
      title: 'Kuk',
      login: 'Login',
      logout: 'Logout',
      profile: 'Profile',
      organizations: 'Organizations',
    },
    homePage: {
      welcome: 'Welcome to Kuk',
      whatIsKuk: {
        title: 'What is Kuk?',
        text: 'Kuk is a platform for sharing your knowledge with others.',
      },
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
      forPublicHealthOrgnizations: 'For public health organizations',
      forParents: 'For parents',
      yourRole: 'Your role in organization',
      medic: 'Medic',
      administrator: 'Administrator',
    },
    organizationsPage: {
      country: 'Country',
      city: 'City',
      name: 'Name',
      find: 'Find',
      explore: 'Explore',
    },
    organizationDetailsPage: {
      notFound: 'Organization not found',
    },
    apiErrors: {
      loginError: 'Login failed!',
    },
  },
  uk: {
    navigation: {
      title: 'Kuk',
      login: 'Увійти',
      logout: 'Вийти',
      profile: 'Профіль',
      organizations: 'Організації',
    },
    homePage: {
      welcome: 'Ласкаво просимо на Kuk',
      whatIsKuk: {
        title: 'Що таке Kuk?',
        text: "Kuk - це проект для прийняття рішень про забезпечення здоров'я людини в області за допомогою медичних програм і програм інтернет-застосунків.",
      },
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
      alreadyHaveAccount: 'Вже маєте акаунт?',
      createProfile: 'Створити профіль',
      sendingRequest: 'Відправляємо запит...',
      authenticationFailed: 'Аутентифікація не вдалася',
      forPublicHealthOrgnizations: 'Для організацій',
      forParents: 'Для батьків',
      yourRole: 'Ваша роль в організації',
      medic: 'Медик',
      administrator: 'Адміністратор',
    },
    organizationsPage: {
      country: 'Країна',
      city: 'Місто',
      name: 'Назва',
      find: 'Знайти',
      explore: 'Більше',
    },
    organizationDetailsPage: {
      notFound: 'Організація не знайдена',
    },
    apiErrors: {
      loginError: 'Не вдалося увійти!',
    },
  },
});
export default localization;
