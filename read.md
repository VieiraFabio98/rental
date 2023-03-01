# Cadastro de carro

**Requisitos funcionais** => RF
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.


**Regra de Negócio** => RN
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado com disponibilidade por padrão.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem de carros

**Requisito funcional**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro 
**Regra de Negócio**
O Usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro

**Requisito Funcional**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**Regra de Negócio**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente par ao mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastor de imagem do carro

**Requisito Funcional**
Deve ser possível cadastrar a imagem do carro

**Requisito não funcional**
Utilizar o Multer ara o upload dos arquivos

**Regra de negócio**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel

**Requisito Funcional**
Deve ser Possível cadastrar um aluguel

**Regra de Negócio**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.



