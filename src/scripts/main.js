document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(event){
        event.preventDefault();
        let qtdeNumerosGerados = document.getElementById('quantidade').value;
        qtdeNumerosGerados = parseInt(qtdeNumerosGerados);
        
        function gerarNumeroNaoContido(min, max, array) {
            const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
            return array.includes(aleatorio)
                ? gerarNumeroNaoContido(min, max, array)
                : aleatorio;
        }
    
        function gerarNumeros(qtdeNumerosGerados) {
            const numeros = Array(qtdeNumerosGerados)
                .fill(0)
                .reduce((nums) => {
                    const novoNumero = gerarNumeroNaoContido(1, 60, nums);
                    return [...nums, novoNumero];
                }, [])
                .sort((n1, n2) => n1 - n2);
    
            return numeros.join(' ');
        }
        console.log(gerarNumeros(7))
        document.getElementById('resultado-valor').innerHTML = gerarNumeros(qtdeNumerosGerados);
        document.querySelector('.resultado').computedStyleMap.display = 'block';
    })
})