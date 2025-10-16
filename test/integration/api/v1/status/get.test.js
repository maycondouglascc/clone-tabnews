// Sempre precisamos especificar o metodo em solicitacoes http
// Por isso o nome do arquivo de teste. especifica que todos os metodos aqui serao get

test("GET to /api/v1/status should retorn 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200)
});