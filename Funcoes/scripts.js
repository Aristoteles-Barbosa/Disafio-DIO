const aluno = [
    {
        nome: 'João',
        nota: 5,
        turma: '18',
    },
    {
        nome: 'Maria',
        nota: 9,
        turma: '18',
    },   
    {
        nome: 'Marcos',
        nota: 6,
        turma: '2C',
    }, 
    {
        nome: 'Miguel',
        nota: 4,
        turma: '2C',
    }, 
    ];
    
    function alunosAprovados(arr, media){
        let aprovados = [];
    
        for (let i = 0; i < arr.length; i++){
    
            const {nota, nome} = arr[i];
            
            if(nota >= media){
                aprovados.push(nome);
            }
        }
        return aprovados;
    
    }
    
    console.log(alunosAprovados (aluno,5));
