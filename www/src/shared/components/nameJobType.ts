export function nameJobType(category: string) {
  switch (category) {
    case 'FULL_TIME':
      return 'Full Time'
    case 'PART_TIME':
      return 'Part Time'
    case 'CONTRACTUAL':
      return 'Contractual'
    case 'INTERNSHIP':
      return 'Internship'
    case 'SEASONAL':
      return 'Seasonal'
  }
}
