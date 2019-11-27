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
    if (this.nota < 50) { this.reprovado = true; }
  }

  gerarNota() {
    this.nota = this.desempenho;
  }

  estudar(horas, lazer, estresse, sono, cansaco) {
    this.estudo += 1;
    if (this.desempenho === 0) { this.desempenho = 1; }

    if (this.creditos === 2) {
      this.desempenho += Math.round((4.725 * this.desempenho * horas * this.estudo + (lazer - estresse - sono - cansaco) / 4) / 20);
    } else if (this.creditos === 4) {
      this.desempenho += Math.round((3.9 * this.desempenho * horas * this.estudo + (lazer - estresse - sono - cansaco) / 4) / 20);
    } else if (this.creditos === 6) {
      this.desempenho += Math.round((2.7 * this.desempenho * horas * this.estudo + (lazer - estresse - sono - cansaco) / 4) / 20);
    } else if (this.creditos === 7) {
      this.desempenho += Math.round((1.35 * this.desempenho * horas * this.estudo + (lazer - estresse - sono - cansaco) / 4) / 20);
    }
    if (this.desempenho > 100) { this.desempenho = 100; }
    if (this.desempenho < 0) { this.desempenho = 0; }
  }
}


export default Disciplina;
