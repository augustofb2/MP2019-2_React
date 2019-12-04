/* eslint-disable no-undef */
import disciplinas from '../objetos/disciplinas';
import Aluno from './aluno';
import Disciplina from '../disciplina/disciplina';
import Estagio from '../estagio/estagio';

const gerarAluno = () => (
  {
    nome: 'teste',
    semestre: 1,
    disciplinas: [],
    dinheiro: 0,
    sono: 0,
    lazer: 0,
    estresse: 0,
    cansaco: 0,
    estagio: {},
    experiencia: 0,
    aprovadas: [],
    creditos: 0,
  }
);

const disciplinaTeste = new Disciplina({
  nome: 'ALGORITMOS E PROGRAMACAO DE COMPUTADORES',
  creditos: 6,
  provas: true,
  trabalhos: true,
  estudo: 0,
  nota: 0,
  desempenho: 0,
  reprovado: false,
  semestre: 1,
});

const estagioTeste = new Estagio({
  empresa: 'MINISTERIO DA SAUDE',
  horas: 6,
  remuneracao: 620,
  semestre: 2
});

const disciplinasTeste = disciplinas.map((item) => new Disciplina(item));

it('Construtor de aluno', () => {
  const alunoTeste = gerarAluno();
  const aluno = new Aluno(alunoTeste);
  expect(aluno.nome).toBe(alunoTeste.nome);
  expect(aluno.semestre).toBe(alunoTeste.semestre);
  expect(aluno.disciplinas).toStrictEqual(alunoTeste.disciplinas);
  expect(aluno.sono).toBe(alunoTeste.sono);
  expect(aluno.lazer).toBe(alunoTeste.lazer);
  expect(aluno.estresse).toBe(alunoTeste.estresse);
  expect(aluno.experiencia).toBe(alunoTeste.experiencia);
  expect(aluno.aprovadas).toBe(alunoTeste.aprovadas);
  expect(aluno.cansaco).toBe(alunoTeste.cansaco);
  expect(aluno.creditos).toBe(alunoTeste.creditos);
  expect(aluno.lazer).toBe(alunoTeste.lazer);
  expect(aluno.estagio).toBe(alunoTeste.estagio);
});

it('Adicionar disciplina', () => {
  const aluno = new Aluno(gerarAluno());
  aluno.adicionarDisciplina(disciplinaTeste);
  expect(aluno.disciplinas).toStrictEqual([disciplinaTeste]);
});

it('Escolher disciplinas do semestre', () => {
  const alunoTeste = gerarAluno();
  // eslint-disable-next-line max-len
  const disciplinasValidas = disciplinasTeste.filter((item) => item.semestre <= alunoTeste.semestre);
  const aluno = new Aluno(alunoTeste);
  aluno.escolherDisciplinas(disciplinas);
  expect(aluno.disciplinas).toStrictEqual(disciplinasValidas);
});

it('Processar disciplinas aprovadas e reprovadas', () => {
  // const alunoTeste = gerarAluno();
  const aluno = new Aluno(gerarAluno());
  aluno.escolherDisciplinas(disciplinas);
  const disciplinasAprovadas = aluno.disciplinas.filter((item) => !item.reprovado);
  const disciplinasReprovadas = aluno.disciplinas.filter((item) => item.reprovado);
  aluno.processarDisciplinas();
  expect(aluno.aprovadas).toStrictEqual(disciplinasAprovadas);
  expect(aluno.disciplinas).toStrictEqual(disciplinasReprovadas);
});

it('Escolher nome', () => {
  const aluno = new Aluno(gerarAluno());
  aluno.setNome('nome');
  expect(aluno.nome).toStrictEqual('nome');
});

it('Matricular estagio', () => {
  const aluno = new Aluno(gerarAluno());
  aluno.matricularEstagio(estagioTeste);
  expect(aluno.estagio).toStrictEqual(estagioTeste);
  expect(aluno.getHorasEstagio()).toBe(estagioTeste.horas);
  expect(aluno.getRenda()).toBe(estagioTeste.remuneracao * 12);
});

it('Estagio vazio', () => {
  const aluno = new Aluno(gerarAluno());
  aluno.zerarEstagio();
  expect(aluno.estagio.empresa).toStrictEqual('');
  expect(aluno.estagio.horas).toBe(0);
  expect(aluno.estagio.semestre).toBe(0);
  expect(aluno.estagio.remuneracao).toBe(0);
});

it('Ações de aluno', () => {
  const aluno = new Aluno(gerarAluno());
  aluno.escolherDisciplinas(disciplinas);
  aluno.estudar(2, aluno.disciplinas[0]);
  aluno.divertir(30);
  aluno.estudar(50, aluno.disciplinas[0]);
  aluno.estudar(100, aluno.disciplinas[0]);
  aluno.divertir(2);
  aluno.dormir(2);
  aluno.dormir(50);
  aluno.avaliarDisciplinas();
  aluno.gerarNotas();
  expect(aluno.getCreditos()).toBe(14);
  aluno.processarDisciplinas();
  aluno.avancarSemestre();
});
