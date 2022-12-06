
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
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
        'Conversation Skills':'Conversation Skills',
        'Start Conversation With One':'Start Conversation With One',
        'Grammer':'Grammer',
        'Start Conversation With Zero':'Start Conversation With Zero',
        "Start Test":"Start Test"
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
        'AI for Translation':'AI pour la traduction',
        'Start Conversation With Two':'Commencer la conversation avec Deux',
        'AI for Improving Your':'AI pour améliorer votre',
        'Conversation Skills':'Compétences de conversation',
        'Start Conversation With One':'Commencer la conversation avec One',
        'Start Conversation With Three':'Commencer la conversation avec Trois',
        'Grammer':'Grammaire',
        "Start Test":"Commencer le test"
      },
    }
  },
});
export default i18n;