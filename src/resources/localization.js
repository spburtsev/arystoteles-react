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
      backups: 'Backups',
    },
    homePage: {
      welcome: 'Welcome to Arystoteles',
      whatIsKuk: {
        title: 'What is Arystoteles?',
        text: 'Arystoteles is a platform for sharing your knowledge with others.',
      },
    },
    registerPage: {
      title: 'Sign up',
    },
    notFoundPage: {
      title: '404',
      message: 'Page not found',
    },
    authPage: {
      login: 'Sign in',
      name: 'Name',
      surname: 'Surname',
      loginError: 'An error occurred while signing in',
      country: 'Country',
      city: 'City',
      youAre: 'You are',
      register: 'Sign up',
      forgotPassword: 'Forgot Password',
      resetPassword: 'Reset Password',
      email: 'Email',
      password: 'Password',
      repeatPassword: 'Repeat Password',
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
      caregiver: 'Caregiver',
      organizationAdministrator: 'Administrator',
      admin: 'Administrator',
    },
    profilePage: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      myProfile: 'My Profile',
      editProfile: 'Edit Profile',
      deleteProfile: 'Delete Profile',
      backups: 'Backups',
      newBackup: 'New Backup',
      downloadData: 'Download Data',
      newPassword: 'New Password',
      changePassword: 'Change Password',
      edit: 'Edit',
      submit: 'Submit',
      cancel: 'Cancel',
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
    backups: {
      title: 'Backups',
      noBackups: 'No backups found',
      createNew: 'Create new backup',
      restore: 'Restore',
      createdAt: 'Created at',
      createdBy: 'Created by',
      name: 'Name',
      total: 'Total',
      createdBySystem: 'Created automatically',
      details: 'Details',
      method: 'Method',
      error: 'An error occurred',
      areYouSure: 'Are you sure?',
      submit: 'Submit',
      cancel: 'Cancel',
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
      backups: 'Резервні копії',
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
      loginError: 'Увійти не вдалося!',
      register: 'Зареєструватися',
      forgotPassword: 'Забув пароль',
      resetPassword: 'Сбросити пароль',
      name: "Ім'я",
      surname: 'Прізвище',
      country: 'Країна',
      city: 'Місто',
      youAre: 'Ви є',
      email: 'Пошта',
      password: 'Пароль',
      repeatPassword: 'Повторіть пароль',
      confirmPassword: 'Підтвердити пароль',
      submit: 'Підтвердити',
      alreadyHaveAccount: 'Вже маєте акаунт?',
      createProfile: 'Створити профіль',
      sendingRequest: 'Відправляємо запит...',
      authenticationFailed: 'Аутентифікація не вдалася',
      forPublicHealthOrgnizations: 'Для організацій',
      forParents: 'Для батьків',
      yourRole: 'Ваша роль в організації',
      medic: 'Лікар',
      caregiver: 'Опікун',
      organizationAdministrator: 'Адміністратор',
      admin: 'Адміністратор',
    },
    profilePage: {
      firstName: "Ім'я",
      lastName: 'Прізвище',
      email: 'Пошта',
      myProfile: 'Мій профіль',
      editProfile: 'Редагувати профіль',
      deleteProfile: 'Видалити профіль',
      backups: 'Резервні копії',
      newBackup: 'Нова резервна копія',
      downloadData: 'Завантажити дані',
      newPassword: 'Новий пароль',
      changePassword: 'Змінити пароль',
      edit: 'Редагувати',
      submit: 'Підтвердити',
      cancel: 'Відміна',
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
    backups: {
      title: 'Резервні копії',
      noBackups: 'Немає резервних копій',
      createNew: 'Створити нову резервну копію',
      restore: 'Відновити',
      createdAt: 'Створено',
      createdBy: 'Створено користувачем',
      name: 'Назва',
      total: 'Всього',
      createdBySystem: 'Створено автоматично',
      details: 'Деталі',
      method: 'Метод',
      error: 'Помилка',
      areYouSure: 'Ви впевнені?',
      submit: 'Підтвердити',
      cancel: 'Відміна',
    },
  },
});
export default localization;
