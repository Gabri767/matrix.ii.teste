console.log("=== MÓDULO DE RELATÓRIOS E ANÁLISES ===");

const relatorioMensal = {
  mesReferencia: "Agosto/2026",
  totalEmpresasAtivas: 3,
  faturamentoBruto: 185400.00,
  despesasTotais: 72150.00,
  resultadoOperacional: 113250.00,
  geradoEm: new Date().toISOString()
};

function gerarRelatorioExecutivo() {
  console.log("\n--- Relatório Executivo Consolidado ---");
  console.log(`Período: ${relatorioMensal.mesReferencia}`);
  console.log(`Empresas Ativas: ${relatorioMensal.totalEmpresasAtivas}`);
  console.log(`Faturamento Bruto: R$ ${relatorioMensal.faturamentoBruto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
  console.log(`Despesas Totais  : R$ ${relatorioMensal.despesasTotais.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
  console.log(`Resultado Líquido: R$ ${relatorioMensal.resultadoOperacional.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
  console.log(`Data de Emissão  : ${relatorioMensal.geradoEm}`);
  console.log("---------------------------------------");
}

function exportarRelatorioJSON() {
  const jsonOutput = JSON.stringify(relatorioMensal, null, 2);
  console.log("\n--- Exportação JSON ---");
  console.log(jsonOutput);
}

gerarRelatorioExecutivo();
exportarRelatorioJSON();

