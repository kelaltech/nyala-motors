export function nameSalaryType(category: string) {
  switch (category) {
    case 'ONE_TIME':
      return 'One Time'
    case 'HOURLY':
      return 'Hourly'
    case 'DAILY':
      return 'Daily'
    case 'WEEKLY':
      return 'Weekly'
    case 'MONTHLY':
      return 'Monthly'
    case 'YEARLY':
      return 'Yearly'
  }
}
