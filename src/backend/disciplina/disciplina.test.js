import Disciplina from './disciplina';

const gerarDisciplina = () => ({
    nome: 'ALGORITMOS E PROGRAMACAO DE COMPUTADORES',
    creditos: 6,
    provas: true,
    trabalhos: true,
    estudo: 0,
    nota: 0,
    desempenho: 0,
    reprovado: 0,
    semestre: 1,
  });

  it('Construtor de disciplina', () => {
      const disciplinaTeste = gerarDisciplina();
      const disciplina = new Disciplina(disciplinaTeste);
      expect(disciplina.nome).toBe(disciplinaTeste.nome);
      expect(disciplina.creditos).toBe(disciplinaTeste.creditos);
      expect(disciplina.provas).toBe(disciplinaTeste.provas);
      expect(disciplina.trabalhos).toBe(disciplinaTeste.trabalhos);
      expect(disciplina.estudo).toBe(disciplinaTeste.estudo);
      expect(disciplina.nota).toBe(disciplinaTeste.nota);
      expect(disciplina.desempenho).toBe(disciplinaTeste.desempenho);
      expect(disciplina.reprovado).toBe(disciplinaTeste.reprovado);
      expect(disciplina.semestre).toBe(disciplinaTeste.semestre);
  });

  it('Gerar nota e avaliar disciplina', () => {
    const disciplina = new Disciplina(gerarDisciplina());
    disciplina.desempenho = 80;
    disciplina.gerarNota();
    expect(disciplina.nota).toBe(disciplina.desempenho);
    disciplina.avaliar();
    expect(disciplina.reprovado).toBe(0);
    disciplina.desempenho = 40;
    disciplina.gerarNota();
    expect(disciplina.nota).toBe(disciplina.desempenho);
    disciplina.avaliar();
    expect(disciplina.reprovado).not.toBe(0);
});

it('Estudar para disciplina', () => {
    const disciplinaTeste = gerarDisciplina();
    const disciplina = new Disciplina(disciplinaTeste);
    disciplina.estudar(5, 30, 20, 10, 0);
    expect(disciplina.desempenho).not.toBe(disciplinaTeste.desempenho);
    disciplina.estudar(2000, 30, 20, 10, 0);
    expect(disciplina.desempenho).toBe(100);
    disciplina.desempenho = -30;
    disciplina.estudar(5, 30, 20, 10, 0);
    expect(disciplina.desempenho).toBe(0);
})
