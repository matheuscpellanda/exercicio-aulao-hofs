
# Boas-vindas ao Exercício do Aulão de HoFs!
	
Para realizar o exercício, atente-se a cada passo descrito a seguir! #vqv 🚀

# Termos e acordos
	
Esse exercício foi elaborado por estudantes da Trybe. Sua reutilização fora do contexto da instituição fere diretamente as diretrizes do Código de Conduta e do Manual da Pessoa Estudante Trybe.

---

# ⚠️ Requisitos Obrigatórios ⚠️

## 1. Implemente a função `getOccupation`.

<details>
  <summary>
  Implemente a função <code>getOccupation</code> para buscar as profissões existentes nessa empresa. 
  </summary> <br />

- A função `getOccupation` deve retornar um array com todas as profissões existentes, sem repetições;

- O array retornado deve estar organizado em ordem alfabética.

</details>

---

## 2. Implemente a função `getEmployeeByOccupation`.

<details>
  <summary>
  Implemente a função <code>getEmployeeByOccupation</code> que deve receber uma profissão como parâmetro, e então retornar os empregados que exercem essa função (estagiários não incluídos).
  </summary> <br />

- A função <code>getEmployeeByOccupation</code> deve conferir se a profissão passada existe e é válida. Caso não exista, deve retornar undefined;

- Caso receba um parâmetro diferente de uma String, deve retornar <code>undefined</code>;

- O array retornado deve estar organizado em ordem crescente de idade.


</details>

---

## 3. Implemente a função `getEmployeeByName`.

<details>
  <summary>
    Implemente a função <code>getEmployeeByName</code> que deve buscar por pessoas colaboradoras através de seu nome (Estagiários incluídos). Deverá ser possível passar um ou mais nomes para realizar a busca.
  </summary> <br />

- A função deve retornar <code>undefined</code> caso não receba parâmetros ou receba parâmetros inválidos;

- A função deve retornar um array vazio caso não encontre nenhum funcionário com o nome informado;

- O array retornado deve estar organizado em ordem crescente de idade.
	
</details>

---

## 4. Implemente a função `getEmployeeByCpf`.

<details>
  <summary>
    Implemente a função <code>getEmployeeByCpf</code> para retornar as pessoas colaboradoras por CPF (estagiários inclusos).
  </summary> <br />

- O CPF deve ser passado como `string`;

- Deve ser possível passar mais de um CPF por vez;

- A função deve retornar os funcionários detentores dos CPFs informados em `ordem alfabética`;

- A função deve retornar <code>undefined</code> caso não receba um parâmetro ou receba um parâmetro inválido;

- A função deve retornar um array em branco caso não encontre o funcionário pesquisado.

</details>

---

## 5. Implemente a função `getEmployeeQuantity`.

<details>
  <summary>
    Implemente a função <code>getEmployeeQuantity</code> que deverá contabilizar o número de funcionários na empresa.
  </summary> <br />

- A função `getEmployeeQuantity` deverá retornar o número de funcionários da empresa, incluindo os estagiários.
  

</details>

---

## 6. Implemente a função `getEstagiarioByAge`.

<details>
  <summary>
    Implemente a função <code>getEstagiarioByAge</code> que deverá retornar os estagiários que possuem determinada idade.
  </summary> <br />

- A idade deverá ser passada no formato `number`;

- A função deve retornar <code>undefined</code> caso não receba um parâmetro ou receba um parâmetro inválido;

- A função deve retornar um array vazio caso não encontre nenhum resultado;

</details>

---

## 7. Implemente a função `getEstagiarioByChefe`.

<details>
  <summary>
    Implemente a função <code>getEstagiarioByChefe</code> que deverá retornar os estagiários conforme seus orientadores.
  </summary> <br />

Essa função receberá, como parâmetro, um Funcionário efetivado e retornará seus respectivos estagiários.

- A função deve retornar <code>undefined</code> caso não receba um parâmetro ou receba um parâmetro inválido;

- A função deve retornar <code>undefined</code> caso receba um funcionário não existente;

- A função deve retornar um array vazio caso não encontre nenhum resultado;

- O array retornado deve estar em ordem alfabética (nomes dos estagiários).

</details>