document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    // Captura os valores dos campos
    const nome = document.querySelector('input[placeholder*="Nome"]').value;
    const telefone = document.querySelector('input[placeholder*="Telemóvel"]').value;
    const morada = document.querySelector('input[placeholder*="Morada"]').value;
    const servico = document.querySelector('select').value;
    const horario = document.querySelectorAll('select')[1].value;
    const detalhes = document.querySelector('textarea').value;

    // O número de telemóvel do teu amigo (formato internacional sem +)
    const numeroWhatsApp = "351913995876";

    // Monta a mensagem formatada para o WhatsApp
    const mensagem = `*Novo Orçamento - GW Vidros*%0A%0A` +
                     `*Nome:* ${nome}%0A` +
                     `*Telefone:* ${telefone}%0A` +
                     `*Morada:* ${morada}%0A` +
                     `*Serviço:* ${servico}%0A` +
                     `*Horário de Visita:* ${horario}%0A` +
                     `*Detalhes:* ${detalhes}`;

    // Abre o link do WhatsApp numa nova aba
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
});