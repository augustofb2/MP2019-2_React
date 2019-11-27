class Disciplina {
  constructor(inicial) {
    this.nome = inicial.nome;
    this.creditos = inicial.creditos;
    this.provas = inicial.provas;
    this.trabalhos = inicial.trabalhos;
    this.estudo = inicial.estudo;
    this.nota = inicial.nota;
    this.desempenho = inicial.desempenho;
    this.reprovado = inicial.reprovado;
    this.semestre = inicial.semestre;
  }

  avaliar() {
    if (this.nota < 50) { this.reprovado += 1; }
  }

  gerarNota() {
    this.nota = this.desempenho;
  }

  estudar(horas, lazer, estresse, sono, cansaco) {
    this.estudo += 1;
    if (this.desempenho === 0) { this.desempenho = 1; }

    this.desempenho += Math.round(((9.5/this.creditos) * this.desempenho * horas * this.estudo + (lazer - estresse - sono - cansaco) / 4) / 20);

    if (this.desempenho > 100) { this.desempenho = 100; }
    if (this.desempenho < 0) { this.desempenho = 0; }
  }
}


export default Disciplina;
