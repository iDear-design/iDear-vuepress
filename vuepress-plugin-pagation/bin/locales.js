const zhHans = {
  prev: '上一页',
  next: '下一页',
  go: '前往',
  jump: '跳转至'
}

const zhHant = {
  prev: '上壹頁',
  next: '下壹頁',
  go: '前往',
  jump: '跳轉至'
}

const en = {
  prev: 'Prev',
  next: 'Next',
  go: 'Go',
  jump: 'Jump To'
}

export default function pagationLocales(ctx) {
  const {$lang, $recoLocales: {pagation} = {}} = ctx
  if (pagation) {
    return pagation
  }
  if (/^zh\-(CN|SG)$/.test($lang)) {
    return zhHans
  }
  if (/^zh\-(HK|MO|TW)$/.test($lang)) {
    return zhHant
  }
  return en
}
