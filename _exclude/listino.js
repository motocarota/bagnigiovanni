
const REGULAR = 0
const DAILY = 1
const data = [
  {
    titles: [ 'Stagione (1/5-15/9)' ],
    type: 0,
    prices: [
      [1200], [2350], [2350], [1850], [1750], [1850], [1550], [ 1000 ],
    ],
  },
  {
    titles: [ 'Mese', 'Bassa Stagione', 'Alta Stagione' ],
    type: 0,
    prices: [
      [220, 750],
      [320, 1100],
      [380, 1300],
      [270, 1000],
      [220, 900],
      [270, 1000],
      [170, 750],
      [180, 450],
    ],
  },
  {
    titles: [ '14 Giorni', 'Bassa Stagione', 'Alta Stagione' ],
    type: 0,
    prices: [
      [150, 450],
      [240, 650],
      [280, 750],
      [220, 550],
      [200, 500],
      [240, 580],
      [140, 400],
      [150, 200],
    ]
  },
  {
    titles: [ '7 Giorni', 'Bassa Stagione', 'Alta Stagione' ],
    type: 0,
    prices: [
      [80, 250],
      [130, 400],
      [150, 450],
      [120, 300],
      [110, 300],
      [130, 350],
      [80, 250],
      [100, 150],
    ]
  },
  {
    titles: [ 'Giornata' ],
    type: 1,
    prices: [
      [10],
      [18],
      [24],
      [30],
      [36],
      [35, 10],
      [40, 10],
      [30, 10],
      [16, 10],
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

  return `  <tr>${renderedTitles}</tr>`
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
      return `
  <tr><td>${label}</td> <td>${toPrice(p[0])}</td> <td>${toPrice(p[1])}</td></tr>`
    }
  ).join('')
}

function buildTable(table = {}) {
  return `
<table>
${buildTableHeader(table)}${buildTableRow(table)}
</table>`
}

function build() {
  return data.map(table => {
    return buildTable(table)
  }).join(' ')
}

console.log(build())
