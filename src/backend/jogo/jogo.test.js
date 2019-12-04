import Jogo from './jogo';
import jogo from '../objetos/jogo';
import Disciplina from '../disciplina/disciplina';
import disciplinas from '../objetos/disciplinas';
import Estagio from '../estagio/estagio';
import estagios from '../objetos/estagios';
import Aluno from '../aluno/aluno';
import aluno from '../objetos/aluno';

const gerarJogo = () => jogo;

const disciplinasTeste = disciplinas.map((item) => new Disciplina(item));

const estagiosTeste = estagios.map((estagio) => new Estagio(estagio));

const alunoTeste = new Aluno(aluno);

const gerarDisciplina = (desempenho) => ({
    nome: 'ALGORITMOS E PROGRAMACAO DE COMPUTADORES',
    creditos: 6,
    provas: true,
    trabalhos: true,
    estudo: 0,
    nota: 0,
    desempenho: desempenho,
    reprovado: false,
    semestre: 1,
  });

it('Construtor de jogo', () => {
    const jogoTeste = gerarJogo();
    const jogo = new Jogo(gerarJogo());
    expect(jogo.tempo).toBe(jogoTeste.tempo);
    expect(jogo.hora).toBe(jogoTeste.hora);
    expect(jogo.diaSemana).toBe(jogoTeste.diaSemana);
    expect(jogo.semana).toBe(jogoTeste.semana);
    expect(jogo.periodo).toBe(jogoTeste.periodo);
    expect(jogo.disciplinas).toStrictEqual(disciplinasTeste);
    expect(jogo.estagios).toStrictEqual(estagiosTeste);
    expect(jogo.aluno).toStrictEqual(alunoTeste);
  });

it('Iniciar semestre', () => {
    const jogo = new Jogo(gerarJogo());
    jogo.iniciarSemestre();
    expect(jogo.tempo).toBe(0);
    expect(jogo.periodo).toBe(0);
    expect(jogo.hora).toBe(7);
    expect(jogo.diaSemana).toBe(0);
    jogo.verificarFimSemesre();
    jogo.tempo = 10000;
    jogo.verificarFimSemesre();
});

it('Estagio', () => {
    const jogo = new Jogo(gerarJogo());
    jogo.matricularEstagio(estagiosTeste[0]);
    jogo.iniciarSemestre();
    jogo.getTempoObrigacoes();
    jogo.zerarEstagio();
});

it('Ações de jogo', () => {
    const jogo = new Jogo(gerarJogo());
    jogo.iniciarSemestre();
    jogo.zerarEstagio();
    jogo.cumprirObrigacoes();
    jogo.avancarTempo(19);
    jogo.avancarTempo(8);
    jogo.avancarTempo(3);
    jogo.avancarTempo(80);
    jogo.terminarSemestre();
    jogo.getTempoObrigacoes();
    jogo.calcularTempoDisponivel();
    jogo.avancarPeriodo();
    jogo.estudar(10, disciplinasTeste[0]);
    jogo.divertir(8);
    jogo.dormir(8);
});

it('Previsões', () => {
    const jogo = new Jogo(gerarJogo());
    jogo.gerarPrevisao();
    jogo.aluno.aprovadas = [gerarDisciplina(30)];
    jogo.gerarPrevisao();
    jogo.aluno.aprovadas = [gerarDisciplina(60)];
    jogo.gerarPrevisao();
    jogo.aluno.aprovadas = [gerarDisciplina(80)];
    jogo.gerarPrevisao();
    jogo.aluno.aprovadas = [gerarDisciplina(100)];
    jogo.gerarPrevisao();
    jogo.previsaoRuim(0);
    jogo.previsaoRuim(10);
    jogo.previsaoBaixa(0);
    jogo.previsaoBaixa(10);
    jogo.previsaoMedia(0);
    jogo.previsaoMedia(10);
    jogo.previsaoBoa(0);
    jogo.previsaoBoa(10);
    jogo.previsaoOtima(0);
    jogo.previsaoOtima(10);
});
