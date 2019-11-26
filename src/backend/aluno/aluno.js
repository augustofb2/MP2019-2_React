import Disciplina from '../disciplina/disciplina';

class Aluno {
  constructor(inicial) {
    this.nome = inicial.nome;
    this.semestre = inicial.semestre;
    this.disciplinas = inicial.disciplinas.map((item) => new Disciplina(item));
    this.dinheiro = inicial.dinheiro;
    this.sono = inicial.sono;
    this.lazer = inicial.lazer;
    this.estresse = inicial.estresse;
    this.cansaco = inicial.cansaco;
    this.estagio = inicial.estagio;
    this.experiencia = inicial.experiencia;
    this.aprovadas = inicial.aprovadas;
    this.creditos = inicial.creditos;
  }

  setNome(nome) {
    this.nome = nome;
  }

  escolherDisciplinas(disciplinas) {
    const aprovadas = this.aprovadas.map((a) => a.nome);
    const reprovadas = this.disciplinas.map((a) => a.nome);

    disciplinas.forEach((disciplina) => {
      if (this.semestre >= disciplina.semestre
         && !aprovadas.includes(disciplina.nome)
         && !reprovadas.includes(disciplina.nome)) {
        this.adicionarDisciplina(disciplina);
      }
    });
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(new Disciplina(disciplina));
  }

  processarDisciplinas() {
    const reprovadas = [];
    const aprovadas = [];

    this.disciplinas.forEach((item) => {
      if (item.reprovado) {
        reprovadas.push(item);
      } else {
        aprovadas.push(item);
      }
    });
    this.disciplinas = reprovadas;
    this.aprovadas = aprovadas;
  }

  dormir(horas) {
    if (horas >= 8) {
      this.sono = 0;
      this.cansaco = 0;
    } else {
      this.sono = this.sono - (horas * horas * 1.6);
      this.cansaco = this.cansaco - (horas * horas * 1.6);
    }
    if (this.sono < 0) { this.sono = 0; }
    if (this.cansaco < 0) { this.cansaco = 0; }
  }

  lazer(horas) {
    this.estresse = this.estresse - (horas * 10);
    if (this.estresse < 0) { this.estresse = 0; }
    this.cansaco = this.cansaco - (horas * 5);
    if (this.cansaco < 0) { this.cansaco = 0; }
  }

  estudar(nome, horas) {
    this.disciplinas.forEach((item) => {
      if (item.nome === nome) { item.estudar(horas, this.lazer); }
    });
    this.estresse += horas * 3;
    if (this.estresse > 100) { this.estresse = 100; }
    this.cansaco += horas * 3;
    if (this.cansaco < 100) { this.cansaco = 100; }
    this.lazer -= horas * 3;
    if (this.lazer < 0) { this.lazer = 0; }
  }

  gerarNotas() {
    this.disciplinas.forEach((item) => {
      item.gerarNota();
    });
  }

  avaliarDisciplinas() {
    this.disciplinas.forEach((item) => {
      item.avaliar();
    });
  }

  getCreditos() {
    return this.disciplinas.map((item) => item.creditos).reduce((total, num) => total + num);
  }

  getHorasEstagio() {
    return this.estagio.horas;
  }

  atualizarCreditos() {
    this.creditos = this.aprovadas.map((item) => item.creditos).reduce((total, num) => total + num);
  }

  avancarSemestre() {
    this.semestre += 1;
  }
}

export default Aluno;
