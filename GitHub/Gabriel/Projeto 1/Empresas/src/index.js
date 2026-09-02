console.log("=== MÓDULO DE GESTÃO DE EMPRESAS ===");

const empresas = [
  { id: 1, razaoSocial: "Matrix Tech Ltda", cnpj: "12.345.678/0001-90", status: "Ativa" },
  { id: 2, razaoSocial: "Inovação & Sistemas S.A.", cnpj: "98.765.432/0001-10", status: "Ativa" }
];

function listarEmpresas() {
  console.log("\nLista de Empresas Cadastradas:");
  empresas.forEach(emp => {
    console.log(`- [ID: ${emp.id}] ${emp.razaoSocial} | CNPJ: ${emp.cnpj} | Status: ${emp.status}`);
  });
}

function adicionarEmpresa(razaoSocial, cnpj) {
  const novaEmpresa = {
    id: empresas.length + 1,
    razaoSocial,
    cnpj,
    status: "Ativa"
  };
  empresas.push(novaEmpresa);
  console.log(`\n[+] Empresa adicionada com sucesso: ${razaoSocial}`);
}

function desativarEmpresa(id) {
  const emp = empresas.find(e => e.id === id);
  if (emp) {
    emp.status = "Inativa";
    console.log(`\n[-] Empresa ID ${id} (${emp.razaoSocial}) desativada.`);
  }
}

listarEmpresas();
adicionarEmpresa("Alpha Consultoria Digital", "55.444.333/0001-22");
listarEmpresas();
desativarEmpresa(1);
listarEmpresas();

