import en from './en.json'
import ru from './ru.json'
import zhCh from './zh-cn.json'

export type TranslationStatusPath = { [key in 'full' | 'part']: string }

export const languages = [
  {
    code: 'en',
    name: 'English',
    status: 'full',
    translationPath: 'translation.language.en',
  },
  {
    code: 'ru',
    name: 'Русский',
    status: 'full',
    translationPath: 'translation.language.ru',
  },
  {
    code: 'zh-cn',
    name: '简体中文',
    status: 'part',
    translationPath: 'translation.language.zh-CN',
  },
  // GENERATOR_ADD - language
]

export const messages = { en, ru }

export const locales = languages.map(({ code }) => code)

// const extractLanguageCode = (languageInISOFormat: string) => languageInISOFormat.slice(0, 2)

// const getLanguageCode = () => extractLanguageCode(window.navigator.language)

// export const DEFAULT_LANGUAGE = (window.localStorage && window.localStorage.language) || getLanguageCode() || 'en'