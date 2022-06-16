import LocalizedStrings from 'localized-strings';
import AppLocale from '../lib/enums/AppLocale';

const localization = new LocalizedStrings({
  [AppLocale.English]: {
    navigation: {
      title: 'Arystoteles',
      login: 'Sign in',
      logout: 'Sign out',
      register: 'Sign up',
      home: 'Home',
      profile: 'Profile',
      organizations: 'Organizations',
    },
    homePage: {
      welcome: 'Welcome to Arystoteles',
      whatIsKuk: {
        title: 'What is Arystoteles?',
        text: 'Arystoteles is a platform for sharing your knowledge with others.',
      },
    },
    registerPage: {
      title: 'Register',
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
    profilePage: {
      myProfile: 'My Profile',
      editProfile: 'Edit Profile',
      deleteProfile: 'Delete Profile',
      backups: 'Backups',
      newBackup: 'New Backup',
      downloadData: 'Download Data',
      newPassword: 'New Password',
      changePassword: 'Change Password',
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
      noInfo: 'No information provided',
    },
    apiErrors: {
      loginError: 'Login failed!',
    },
  },
  [AppLocale.Ukrainian]: {
    navigation: {
      title: 'Arystoteles',
      login: 'Увійти',
      register: 'Зареєструватися',
      home: 'Головна',
      logout: 'Вийти',
      profile: 'Профіль',
      organizations: 'Організації',
    },
    homePage: {
      welcome: 'Ласкаво просимо на Arystoteles',
      whatIsKuk: {
        title: 'Що таке Arystoteles?',
        text: "Arystoteles - це проект для прийняття рішень про забезпечення здоров'я людини в області за допомогою медичних програм і програм інтернет-застосунків.",
      },
    },
    registerPage: {
      title: 'Реєстрація',
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
    profilePage: {
      myProfile: 'Мій профіль',
      editProfile: 'Редагувати профіль',
      deleteProfile: 'Видалити профіль',
      backups: 'Резервні копії',
      newBackup: 'Нова резервна копія',
      downloadData: 'Завантажити дані',
      newPassword: 'Новий пароль',
      changePassword: 'Змінити пароль',
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
      noInfo: 'Немає інформації',
    },
    apiErrors: {
      loginError: 'Не вдалося увійти!',
    },
  },
});
export default localization;
