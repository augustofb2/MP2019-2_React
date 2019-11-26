import Aluno from '../aluno/aluno';
import Disciplina from '../disciplina/disciplina';
import Estagio from '../estagio/estagio';

class Jogo {
  constructor(inicial) {
    this.tempo = inicial.tempo;
    this.hora = inicial.hora;
    this.diaSemana = inicial.diaSemana;
    this.semana = inicial.semana;
    this.periodo = inicial.periodo;
    this.disciplinas = inicial.disciplinas.map((disciplina) => new Disciplina(disciplina));
    // this.estagios = inicial.estagios.map((estagio) => new Estagio(estagio));

    this.aluno = new Aluno(inicial.aluno);
  }

  iniciarSemestre() {
    this.periodo = 0;
    this.aluno.avancarSemestre();
    this.aluno.escolherDisciplinas(this.disciplinas);
    this.tempo = 0;
    this.hora = 7;
    this.diaSemana = 0;
  }

  verificarFimSemesre() {
    if (this.tempo > 2688) {
      this.terminarSemestre();
    }
  }

  terminarSemestre() {
    this.aluno.gerarNotas();
    this.aluno.processarDisciplinas();
    this.aluno.atualizarCreditos();
  }

  getTempoObrigacoes() {
    return Math.ceil(2 + this.aluno.getCreditos() / 5 + this.aluno.getHorasEstagio());
  }

  avancarTempo(horas) {
    this.tempo += horas;
    this.hora += horas;
    if (this.hora >= 24) {
      this.diaSemana += 1;
      this.hora -= 24;
      if (this.diaSemana >= 7) {
        this.semana += 1;
        this.diaSemana -= 7;
      }
    }
    if (this.hora === 7 && this.diaSemana < 5) {
      this.cumprirObrigacoes();
    }
    this.verificarFimSemesre();
  }

  calcularTempoDisponivel() {
    if (this.hora > 7) {
      return 24 + 7 - this.hora;
    }
    return 7 - this.hora;
  }

  cumprirObrigacoes() {
    this.hora += this.getTempoObrigacoes();
  }
}

export default Jogo;
