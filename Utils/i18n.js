
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        'Home': 'Home',
        'Assesment': 'Assesment',
        'Course': 'Course',
        'Setting': 'Setting',
        'Logout': 'Logout',
        'Language': 'Language',
        'Mode': 'Mode',
        'Start': 'Start',
        'Stop': 'Stop',
        'Press Start Button':'Press Start Button',
        'Listening':'Listening',
        'Difficulty':'Difficulty',
        'AI for Improving Your':'AI for Improving Your',
        'Conversation Skill':'Conversation Skill',
        'Start Conversation With One':'Start Conversation With One',
        'Grammer':'Grammer',
        'Start Conversation With Zero':'Start Conversation With Zero',
      },
    },
    fr: {
      translation: {
        'Home': 'domicile',
        'Assesment': 'Évaluation',
        'Course': 'Cours',
        'Setting': 'Paramètre',
        'Logout': 'Logout',
        'Language': 'Langue',
        'Mode': 'Mode',
        'Press Start Button':'Appuyez sur le bouton Démarrer',
        'Start': 'Commencer',
        'Stop': 'Arrêt',
        'Listening':'Écoute',
        'Difficulty':'Difficulté',
        'AI for Improving Your':'AI pour améliorer votre',
        'Conversation Skills':'Compétences de conversation',
        'Start Conversation With One':'Commencer la conversation avec One',
        'Start Conversation With Zero':'Commencer la conversation avec Zero',
        'Grammer':'Grammaire',


      },
    }
  },
});
export default i18n;