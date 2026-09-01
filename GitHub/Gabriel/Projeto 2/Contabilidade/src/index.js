console.log("=== MÓDULO DE CONTABILIDADE ===");

const lancamentos = [
  { id: 101, conta: "Banco Conta Movimento", tipo: "Débito", valor: 15000.00, historico: "Aporte de Capital" },
  { id: 102, conta: "Capital Social", tipo: "Crédito", valor: 15000.00, historico: "Aporte de Capital" },
  { id: 103, conta: "Despesas Operacionais", tipo: "Débito", valor: 2350.00, historico: "Pagamento de Fornecedores" }
];

function exibirBalancete() {
  console.log("\nLançamentos Recentes:");
  let totalDebito = 0;
  let totalCredito = 0;

  lancamentos.forEach(l => {
    console.log(`[#${l.id}] ${l.conta.padEnd(25)} | ${l.tipo.padEnd(8)} | R$ ${l.valor.toFixed(2)} | ${l.historico}`);
    if (l.tipo === "Débito") totalDebito += l.valor;
    if (l.tipo === "Crédito") totalCredito += l.valor;
  });

  console.log("-------------------------------------------------------------------");
  console.log(`Total Débito : R$ ${totalDebito.toFixed(2)}`);
  console.log(`Total Crédito: R$ ${totalCredito.toFixed(2)}`);
  const saldoLiquido = totalCredito - totalDebito;
  console.log(`Saldo Líquido: R$ ${saldoLiquido.toFixed(2)} (${saldoLiquido >= 0 ? 'Superávit' : 'Déficit'})`);
}

exibirBalancete();

