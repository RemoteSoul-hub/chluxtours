export default {
    name: 'reservation',
    title: 'Reservation',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }]
      },
      {
        name: 'car',
        title: 'Car',
        type: 'reference',
        to: [{ type: 'car' }]
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'datetime'
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'datetime'
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number'
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Approved', value: 'approved' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
          layout: 'radio'
        }
      }
    ]
  };
  