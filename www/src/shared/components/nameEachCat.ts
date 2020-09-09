export function nameEachCat(category: string) {
  switch (category) {
    case 'CROSSOVER':
      return 'CROSSOVER'
    case 'SPORT_UTILITY':
      return 'SPORT UTILITY'
    case 'COMMERCIAL':
      return 'COMMERCIAL'
    case 'CRONER':
      return 'CRONER'
    case 'QUESTER':
      return 'QUESTER'
    case 'PASSENGER':
      return 'PASSENGER'
    case 'NEW_QUESTER':
      return 'NEW QUESTER'
    case 'EICHER_BUS':
      return 'EICHER BUS'
    case 'EICHER_TRUCKS':
      return 'EICHER TRUCKS'
    case 'MACPOWER':
      return 'MACPOWER'
    case 'IC_ENGINE_FORKLIFT':
      return 'IC ENGINE FORKLIFT'
    case 'REACH_TRUCKS_FORKLIFT':
      return 'REACH TRUCKS FORKLIFT'
    case 'LARGE_SIZE_FORKLIFT':
      return 'LARGE SIZE FORKLIFT'
    case 'ELECTRIC_COUNTERBALANCED_FORKLIFT':
      return 'ELECTRIC COUNTERBALANCED FORKLIFT'
    default:
      return ''
  }
}
