export function nameDealerType(category: string) {
  switch (category) {
    case 'VEHICLE_SALES':
      return 'Vehicles Sales'
    case 'PART_SALES':
      return 'Geniune Parts Sale '
    case 'SERVICE':
      return 'Services'
    default:
      return ''
  }
}
