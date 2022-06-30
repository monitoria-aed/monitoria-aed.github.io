---
title: "Desafio #1 - Questão sobre POO"
author: Luiz Eduardo
date: 2022-06-30T19:56:08.706Z
tags:
  - listas
questions:
  - question: Classe
    code:
      code: |-
        
        class ContaCorrente{
            //Atributos
            string nome;
            int cpf;
            float saldo;
            float quantia;

            public:
            // Métodos públicos
            void cadastrarCliente();
            void depositar();
            void sacar();
            void obterSaldo(); 

            // getters
            string getNome() { return nome; }
            int getCpf(){ return cpf; }
            float getSaldo(){ return saldo; }
            float getQuantia(){ return quantia; }
            
            // setters
            void setNome( string Nome ){ nome = Nome; }
            void setCpf( int CPF ){ cpf = CPF; }
            void setSaldo( float Saldo ){ saldo = Saldo;} 
            void setQuantia( float Quantia ){ quantia = Quantia; }
        };

        void ContaCorrente::cadastrarCliente(){
            string auxNome;
            int auxCpf;

            cout << "Digite o nome: \n";
            cin >> auxNome;
            cout << "Digite o CPF: \n";
            cin >> auxCpf;

            this->setNome(auxNome);
            this->setCpf(auxCpf);
            this->setQuantia(0);
            this->setSaldo(0);
        }

        void ContaCorrente::depositar(){
            cout << "Digite a quantia para deposito: \n";
            cin >> quantia;

            //Para atualizar o saldo a cada depósito basta
            //pegar o valor atual e somar com o valor de depósito.
            this->setSaldo( this->getSaldo() + this->getQuantia() );
        }

        void ContaCorrente::sacar(){

            cout << "Digite a quantia para saque: \n";
            cin >> quantia;

            // Aplicamos a taxa para sacar sobre a quantia 
            // retirada.
            this->setSaldo(
                this->getSaldo() - (quantia * 0.05 + quantia)
            );
        }

        void ContaCorrente::obterSaldo(){
            cout << "O saldo eh: " << this->getSaldo() << endl;
        }
    text: >-
      Criamos a classe ContaCorrente, conforme pedido no enunciado do desafio e
      declaramos os atributos privados: nome, cpf, saldo e quantia (lembre-se
      que não é necessário utilizara palavra reservada `private`, pois por
      padrão o C++ reconhece que qualquer atributo que seja declarado estando
      fora do escopo de `public `ou `protected `é `private`.


      Na parte pública do código separamos em três: os métodos pedidos pela questão, os *getters* e os *setters* dos atributos privados. Os métodos requisitados foram implementados fora do esqueleto da classe, isso é: fora do bloco da ContaCorrente, tal escolha foi feita para poder trabalhar mais livremente o código, deixar a estrutura da classe mais limpa e legível, e mostra-los uma forma diferente de declarar e inicializar métodos de classes. Os outros dois, *getters* e *setters* , foram implementados de acordo com o padrão.
  - question: Função Adicional
    text: >-
      Como iremos trabalhar com um *array* de objetos, resolvi criar transformar
      o *loop* sobre esse array em uma função, uma vez que ele é utilizado em
      três das quatro opções do menu. 


      Essa função itera sobre o array de clientes, do tipo ContaCorrente, se houver mais de um cliente cadastrado, por isso a condicional no código. Na computação o valor de 0 é equivalente a **false,** e qualquer número **maior que 0** é equivalente a **true.** Portanto se o tamanho do array for de um só elemento (um indíce só) o código dentro da condicional não será executado, caso o array possua mais de um elemento, o código será executado.


      A variável cliente recebe o valor de 0 no início, pois no caso de o tamanho do array for de um só elemento retornaremos o índice do primeiro elemento, ou seja, 0.
    code:
      code: |
        
        int listarClientes(ContaCorrente arr[], int n, string opcao){
            int cliente = 0;

            if(n){
                for(int j = 0; j < n; j++){
                    cout << j << " - " << arr[j].getNome() << endl;
                }

                cout << "Para qual cliente deseja " << opcao <<"?\n";
                cin >> cliente;
            }

            return cliente;
        }
  - question: Função
    text: >-
      Por fim, a função `main` que instancia um array de 100 posições,
      `ContaCorrente clientes[100]`**,** e uma variável `i= 0 `que funcionará
      como ponteiro para o nosso array, apontando para qual posição o último
      cliente cadastrado foi armazenado no array `clientes. `Alguns dos `cases`
      possuem chaves, essas chaves são utilizadas para criar um escopo no código
      e impedir que haja conflito as três declarações da variável `cliente`. 


      Por fim, utilizamos a função `exit(0) `para finalizar o programa.


      Dúvidas? Contate o seu monitor através da plataforma Teams.


      Até mais! 👋
    code:
      code: >-
        
        int main(){
            ContaCorrente clientes[100];
            int i = 0; 

            while(true){
                int resposta;

                cout << "1 - Cadastrar cliente\n";
                cout << "2 - Depositar\n";
                cout << "3 - Sacar\n";
                cout << "4 - Obter saldo\n";
                cout << "5 - Sair\n";
                cin >> resposta;
                
                switch (resposta)
                {
                    case 1:
                        if(i < 100){
                            clientes[i].cadastrarCliente();
                            i++;
                        }
                        break;

                    case 2:{
                        int cliente = listarClientes(clientes, i, "depositar");
                        clientes[cliente].depositar();
                        break;
                    }
                        
                    case 3:{
                        int cliente = listarClientes(clientes, i, "sacar");
                        clientes[cliente].sacar();
                        break;
                    }
                    
                    case 4:{
                        int cliente = listarClientes(clientes, i, "obter o saldo");
                        clientes[cliente].obterSaldo();
                        break;
                    } 
                    
                    default:
                        exit(0);
                }

            }
        }
---
Como dito em aula os desafios são questões de provas retiradas dos semestres anteriores, valendo ponto extra. Portanto, além de uma ótima forma de você treinar, conhecer os modelos de perguntas cobradas em provas, e ainda por cima ganhar uma notinha extra, é também uma forma de você averiguar quanto tempo você levam para resolvê-lo, o que é importantíssimo, afinal vocês terão no máximo duas horas para responder três ou mais questões desse tipo.

Aqui você vai encontrar uma solução proposta por um dos monitores, com algumas explicações sobre o código. Se você não conseguiu resolver, tente copiar essa questão (ao invés de usar o Ctrl + C, Ctrl + V) e ir explicando para si mesmo o que cada linha significa, isso o ajudará a internalizar determinados conceitos.



Então, vamos lá 😉.