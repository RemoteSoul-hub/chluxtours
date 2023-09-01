import localeString from './LocalizedText';

export default {
    name: 'car',
    title: 'Car',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Car Model',
        type: 'string'
      },
      {
        name: 'brand',
        title: 'Brand',
        type: 'string'
      },
      {
        name: 'year',
        title: 'Year',
        type: 'number'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number'
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
    ]
  };
  