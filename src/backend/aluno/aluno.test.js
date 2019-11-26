/* eslint-disable no-undef */
import disciplinas from '../objetos/disciplinas';
import Aluno from './aluno';
import Disciplina from '../disciplina/disciplina';

const gerarAluno = () => (
  {
    nome: 'teste',
    semestre: 1,
    disciplinas: [],
    dinheiro: 0,
    sono: 0,
    lazer: 0,
    estresse: 0,
    cansaço: 0,
    estagiando: false,
    experiencia: 0,
    aprovadas: [],
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
