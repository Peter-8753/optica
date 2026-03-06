document
  .getElementById("formMarcacao")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const contacto = document.getElementById("contacto").value;
    const cidade = document.getElementById("cidade").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const mensagem = `*Nova Marcação Online*
Nome: ${nome}
Contacto: ${contacto}
Cidade: ${cidade}
Serviço: ${servico}
Data: ${data}
Hora: ${hora}

Por favor confirmar disponibilidade.`;

    const numeroEmpresa = "244927905118";

    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
