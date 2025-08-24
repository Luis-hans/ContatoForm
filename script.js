document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector("form");
  const caixaSucesso = document.getElementById('MensagemSucesso');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    const validarCampo = (idInput, idErro, condicao) => {
      const input = document.getElementById(idInput);
      const erro = document.getElementById(idErro);

      if (!condicao) {
        erro.style.display = "block";     // mostra a mensagem
        input.classList.add("erro-border");
        valido = false;
      } else {
        erro.style.display = "none";      // esconde a mensagem
        input.classList.remove("erro-border");
      }
    };

    // Primeiro nome
    validarCampo("PriNome", "erro-priNome", document.getElementById("PriNome").value.trim() !== "");

    // Sobrenome
    validarCampo("Sobrenome", "erro-sobrenome", document.getElementById("Sobrenome").value.trim() !== "");

    // Email
    const emailVal = document.getElementById("Email").value.trim();
    const emailOk = /^[^@]+@[^@]+\.[^@]+$/.test(emailVal);
    validarCampo("Email", "erro-email", emailOk);

    // Tipo de consulta
    const consultaOk = document.querySelector("input[name='tipoConsulta']:checked");
    document.getElementById("erro-consulta").style.display = consultaOk ? "none" : "block";
    if (!consultaOk) valido = false;

    // Consentimento
    const consentOk = document.getElementById("Consetimento").checked;
    document.getElementById("erro-consentimento").style.display = consentOk ? "none" : "block";
    if (!consentOk) valido = false;

    if (valido) {
      form.reset();

      caixaSucesso.classList.remove('oculto');
      caixaSucesso.classList.add('mostrar');

      setTimeout(() => {
        caixaSucesso.classList.remove('mostrar');
        setTimeout(() => caixaSucesso.classList.add('oculto'), 300);
      }, 3000);
    }
  });
});
