// Funcions form Revenue
export function getRevenues(company, howMany) {
  const revenues = [];
  company.forEach((year, index) => {
    if (index >= howMany) return;
    revenues.push(Number(year.Revenue));
  });
  return revenues;
}

export function getRevenueRate(company, howMany) {
  const rates = [];
  company.forEach((year, index) => {
    if (index >= howMany) return;
    rates.push((Number(year['Revenue Growth']) * 100).toFixed(2));
  });
  return rates;
}
// --------------

// Functions for EBITDA
export function getEbitdas(company, howMany) {
  const ebitdas = [];
  company.forEach((year, index) => {
    if (index >= howMany) return;
    ebitdas.push(year.EBITDA);
  });
  return ebitdas;
}

export function getEbitdaRatios(company, howMany) {
  const ebitdaRatios = [];
  company.forEach((year, index) => {
    if (index >= howMany) return;
    ebitdaRatios.push((year['EBITDA Margin'] * 100).toFixed(2));
  });
  return ebitdaRatios;
}
// --------------

// Functions for General Balance

export function getOperatingExpenses(company, howMany) {
  const operatingExpenses = [];
  company.forEach((year, index) => {
    if (index >= howMany) return;
    operatingExpenses.push(year['Operating Expenses']);
  });
  return operatingExpenses;
}

export function getConsolidatedIncome(company, howMany) {
  const consolidatedIncome = [];
  company.forEach((year, index) => {
    if (index >= howMany) return;
    consolidatedIncome.push(year['Consolidated Income']);
  });
  return consolidatedIncome;
}
// --------------

export function getYears(company, howMany) {
  const years = [];
  company.forEach((year, index) => {
    if (index >= howMany) return;
    years.push(year.date.slice(0, 4));
  });
  return years;
}

export function defineNumberOfYears() {
  // return Math.min(company.length, 11);
  return 11;
}
