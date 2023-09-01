// schemas/LocalizedText.js
export default {
    name: 'localeString',
    type: 'object',
    title: 'Localized string',
    fields: [
      { name: 'en', type: 'string', title: 'English' },
      { name: 'fr', type: 'string', title: 'French' }
    ]
  };
  