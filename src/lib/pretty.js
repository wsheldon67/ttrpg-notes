import lz from './leading_zeros'

export function time(ob, settings) {
  let p = {}
  p.year = lz(ob.year, 4) + '/'
  if (settings) {
    if (settings.one_based) {
      p.month = lz(ob.month + 1, 2) + '/'
      p.day = lz(ob.day + 1, 2) + ' '
    } else {
      p.month = lz(ob.month, 2) + '/'
      p.day = lz(ob.day, 2) + ' '
    }
    if (settings.pm_switch) {
      if (ob.hour > settings.pm_switch) {
        p.hour = lz(ob.hour - settings.pm_switch, 2) + ':'
        p.suffix = ' PM'
      } else {
        p.hour = lz(ob.hour, 2) + ':'
        p.suffix = ' AM'
      }
    } else {
      p.hour = lz(ob.hour, 2) + ':'
      p.suffix = ''
    }
  } else {
    p.month = lz(ob.month, 2) + '/'
    p.day = lz(ob.day, 2) + ' '
    p.hour = lz(ob.hour, 2) + ':'
    p.suffix = ''
  }
  p.minute = lz(ob.minute, 2) + ':'
  p.second = lz(ob.second, 2)
  return p.year+p.month+p.day+p.hour+p.minute+p.second+p.suffix
}