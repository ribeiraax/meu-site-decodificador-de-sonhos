document.getElementById('dreamDecoderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const dreamText = document.querySelector('textarea').value;
    const result = `Seu sonho sobre "${dreamText}" pode refletir desejos inconscientes ou experiências recentes.`;
    document.getElementById('result').querySelector('p').textContent = result;
});
