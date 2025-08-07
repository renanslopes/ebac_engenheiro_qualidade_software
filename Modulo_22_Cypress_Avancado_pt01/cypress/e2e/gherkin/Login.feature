Feature: Autenticação

  Scenario Outline: Login de usuario
    Given que estou na página inicial
    When faço login
    Then o nome do usuário deve aparecer na página de perfil
