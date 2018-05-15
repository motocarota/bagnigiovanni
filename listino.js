
const REGULAR = 0
const DAILY = 1
const data = [
  {
    titles: [ 'Stagione (1/5-15/9)' ],
    type: 0,
    prices: [
      [1200], [2000], [2400], [1600], [1500], [1600], [1300], [ 750 ],
    ],
  },
  {
    titles: [ 'Mese', 'Bassa Stagione', 'Alta Stagione' ],
    type: 0,
    prices: [
      [220, 650], [320, 950], [380, 1150], [270, 850], [220, 650], [270, 800],  [170, 550], [100, 280],
    ],
  },
  {
    titles: [ '14 Giorni', 'Bassa Stagione', 'Alta Stagione' ],
    type: 0,
    prices: [
      [140, 380], [200, 540], [240, 620], [190, 450], [170, 380], [200, 480], [120, 350], [75, 140],
    ]
  },
  {
    titles: [ '7 Giorni', 'Bassa Stagione', 'Alta Stagione' ],
    type: 0,
    prices: [
      [65, 220], [110, 300], [130, 350], [100, 240], [95, 200], [110, 250], [65, 160], [45, 70],
    ]
  },
  {
    titles: [ 'Giornata' ],
    type: 1,
    prices: [
      [7], [18], [24], [30], [36], [30, 10], [35, 10], [25, 10], [13, 10],
    ]
  }
]

const types = [
  [
    'Cabina (max 4 persone)',
    'Cabina, lettino, sdraio e ombrellone',
    'Cabina, 2 lettini e ombrellone',
    'Cabina, 2 sdraio e ombrellone',
    'lettino, sdraio e ombrellone',
    '2 lettini e ombrellone',
    '2 sdraio e ombrellone',
    'lettino',
  ],
  [
    'Ingresso ospiti',
    'Cabina per 1 persona',
    'Cabina per 2 persone',
    'Cabina per 3 persone',
    'Cabina per 4 persone',
    'Lettino, sdraio e ombrellone',
    '2 lettini e ombrellone',
    '2 sdraio e ombrellone',
    'Lettino',
  ]
]

function buildTableHeader(table = {}) {
  const { titles = [] } = table
  const renderedTitles = titles.map(
    t => `<th class='title'>${t}</th>`
  )

  return `<tr>${renderedTitles}</tr>`
}

function toPrice (num) {
  if (num === undefined || num === null) {
    return ''
  }
  return num.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })
}

function buildTableRow(table = {}) {
  const { type = 0, prices = [] } = table
  const t = types[ type ]
  
  return t.map(
    (label, index) => {
      const p = prices[index] || []
      return `<tr><td>${label}</td> <td>${toPrice(p[0])}</td> <td>${toPrice(p[1])}</td></tr>`
    }
  ).join('')
}

function buildTable(table = {}) {
  return `<table>${buildTableHeader(table)}${buildTableRow(table)}</table>`
}

function build() {
  return data.map(table => {
    return buildTable(table)
  }).join(' ')
}

console.log('result = ', build())
