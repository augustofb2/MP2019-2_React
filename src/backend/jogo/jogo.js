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
    this.estagios = inicial.estagios.map((estagio) => new Estagio(estagio));
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
    this.aluno.dinheiro += this.aluno.estagio.remuneracao * 6;
    this.iniciarSemestre();
  }

  getTempoObrigacoes() {
    return Math.ceil(2 + this.aluno.getCreditos() / 5) + this.aluno.getHorasEstagio();
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
    const horas = this.getTempoObrigacoes();
    this.avancarTempo(horas);
    this.aluno.estresse += horas * 3;
    if (this.aluno.estresse > 100) { this.aluno.estresse = 100; }
    this.aluno.cansaco += horas * 3;
    if (this.aluno.cansaco > 100) { this.aluno.cansaco = 100; }
    this.aluno.sono += horas * 6;
    if (this.aluno.sono > 100) { this.aluno.sono = 100; }
    this.aluno.lazer -= horas * 3;
    if (this.aluno.lazer < 0) { this.aluno.lazer = 0; }
    
  }

  avancarPeriodo() {
    this.periodo += 1;
  }

  estudar(horas, disciplina) {
    this.aluno.estudar(horas, disciplina);
    this.avancarTempo(horas);
  }

  divertir(horas) {
    this.aluno.divertir(horas);
    this.avancarTempo(horas);
  }

  dormir(horas) {
    this.aluno.dormir(horas);
    this.avancarTempo(horas);
  }

  gerarPrevisao() {
    let mediaNotas = 0;
    if(this.aluno.aprovadas.length > 0) { 
      mediaNotas = this.aluno.aprovadas.map((item) => item.nota).reduce((total, num) => total + num) / this.aluno.aprovadas.length;
    }

    const tempoGraduacao = Math.round((182 - this.aluno.creditos) / 40);

    if(mediaNotas <= 25) { return this.previsaoRuim(tempoGraduacao); }
    else if(mediaNotas <= 50) { return this.previsaoBaixa(tempoGraduacao); }
    else if(mediaNotas <= 75) { return this.previsaoMedia(tempoGraduacao); }
    else if(mediaNotas < 90) { return this.previsaoBoa(tempoGraduacao); }
    return this.previsaoOtima(tempoGraduacao);
  }

  previsaoRuim(tempo){
    let i;
    const renda = [];
    const rendaAcumulada = [];
    for(i = 0; i < tempo; i++){
      renda.push(this.aluno.estagio.remuneracao);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for(i = tempo; i < tempo + 5; i++){
      renda.push(2500);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for( i = tempo + 5; i < 10; i++){
      renda.push(4100);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    return(renda.map((item, index) => ({
      name: `Ano ${index+1}`,
      Renda: item,
      Acumulado: rendaAcumulada[index],
    })));
  }

  previsaoBaixa(tempo){
    let i;
    const renda = [];
    const rendaAcumulada = [];
    for(i = 0; i < tempo; i++){
      renda.push(this.aluno.estagio.remuneracao);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for(i = tempo; i < tempo + 2; i++){
      renda.push(2500);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for( i = tempo + 2; i < tempo + 7 && i < 10; i++){
      renda.push(4100);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for( i = tempo + 7; i < 10; i++){
      renda.push(7000);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    return(renda.map((item, index) => ({
      name: `Ano ${index+1}`,
      Renda: item,
      Acumulado: rendaAcumulada[index],
    })));
  }

  previsaoMedia(tempo){
    let i;
    const renda = [];
    const rendaAcumulada = [];
    for(i = 0; i < tempo; i++){
      renda.push(this.aluno.estagio.remuneracao);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for(i = tempo; i < tempo + 2; i++){
      renda.push(4100);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for( i = tempo + 2; i < 10; i++){
      renda.push(7000);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    return(renda.map((item, index) => ({
      name: `Ano ${index+1}`,
      Renda: item,
      Acumulado: rendaAcumulada[index],
    })));
  }

  previsaoBoa(tempo){
    let i;
    const renda = [];
    const rendaAcumulada = [];
    for(i = 0; i < tempo; i++){
      renda.push(this.aluno.estagio.remuneracao);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for(i = tempo; i < tempo + 1; i++){
      renda.push(4100);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for( i = tempo + 1; i < 10; i++){
      renda.push(7000);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    return(renda.map((item, index) => ({
      name: `Ano ${index+1}`,
      Renda: item,
      Acumulado: rendaAcumulada[index],
    })));
  }

  previsaoOtima(tempo){
    let i;
    const renda = [];
    const rendaAcumulada = [];
    for(i = 0; i < tempo; i++){
      renda.push(this.aluno.estagio.remuneracao);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    for(i = tempo; i < 10; i++){
      renda.push(7000);
      rendaAcumulada.push(renda.reduce((total, num) => total + num * 13 + this.aluno.getRenda()));
    }
    return(renda.map((item, index) => ({
      name: `Ano ${index+1}`,
      Renda: item,
      Acumulado: rendaAcumulada[index],
    })));
  }

  matricularEstagio(estagio){
    this.aluno.matricularEstagio(estagio);
  }

  zerarEstagio(){
    this.aluno.zerarEstagio();
  }

}

export default Jogo;
