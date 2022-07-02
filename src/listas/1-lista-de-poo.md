---
title: "#1 - Lista de POO"
author: Luiz Eduardo, Vinícius Baião e Vinícius Giovani
date: 2022-06-19T18:39:41.211Z
tags:
  - listas
questions:
  - question: "1"
    code:
      code: |-
        
        class Agenda{
            private:
            // Atributos
            string nome;
            long long int telefone;

            public:
            // Getters
            string getNome(){ return nome; }
            long long int getTelefone(){ return telefone; }
            // Setters
            void setNome(string n){ nome = n; }
            void setTelefone(long int t){ telefone = t; }

            void displayData(){
                cout << "Nome: " << nome << endl;
                cout << "Telefone: " << telefone << endl;
            }

        };
    text: "A primeira questão abordava os conceitos básicos de POO: declaração de
      atributos privados e definição de métodos especiais."
  - question: "2"
    text: A segunda questão trazia a ideia de implementação de um algoritmo de
      cadastro. A implementação também é simples e não há nenhum algoritmo ou
      bloco de código que exigisse muito tempo. O exemplo de solução abaixo
      declara os métodos dentro da classe e os desenvolve fora. Uma outra forma
      de implementar um classse onde há uma separação da interface de
      implementação. Você poderia, por exemplo, colocar a classe em um arquivo.h
      e os métodos em um arquivo.cpp, ambos de mesmo nome.
    code:
      code: |
        

        class CadastroDeAlunos{
            string nome;
            string curso;
            long long int matricula;
            
            public:
            CadastroDeAlunos(){}
            CadastroDeAlunos(string n, string c, long long int m){
                nome = n;
                curso = c;
                matricula = m;
            }

            // Getters
            string getNome();
            string getCurso();
            long long int getMatricula();

            // Setters
            void setNome(string n);
            void setCurso(string c);
            void setMatricula(long long int m);

            // Mostrar
            void mostrarAluno();

        };

        // Getters
        string CadastroDeAlunos::getNome(){
            return CadastroDeAlunos::nome;
        }

        string CadastroDeAlunos::getCurso(){
            return CadastroDeAlunos::curso;
        }

        long long int CadastroDeAlunos::getMatricula(){
            return CadastroDeAlunos::matricula;
        }

        // Setters
        void CadastroDeAlunos::setNome(string n){
            CadastroDeAlunos::nome = n;
        }

        void CadastroDeAlunos::setCurso(string c){
            CadastroDeAlunos::curso = c;
        }

        void CadastroDeAlunos::setMatricula(long long int m){
            CadastroDeAlunos::matricula = m;
        }

        void CadastroDeAlunos::mostrarAluno(){
            cout << CadastroDeAlunos::nome << endl;
            cout << CadastroDeAlunos::curso << endl;
            cout << CadastroDeAlunos::matricula << endl;
        }
  - question: "3"
    text: A terceira questão pede para adicionar novos atributos, e por consequência
      novos métodos, na classe implementada na questão anterior. Apesar de
      herança não ter sido apresentada durante as primeiras semanas de aula,
      aqui, trazemos uma solução que usa a herança.
    code:
      code: >
        
        class Cadastro : public CadastroDeAlunos{
            
            private:
            float nota;
            int faltas;

            public:
            Cadastro(){}
            Cadastro(string n, string c, long long int m, float nt, int f):CadastroDeAlunos(n, c, m){
                nota = nt;
                faltas = f;
            }

            // Getters
            int getFaltas() { return faltas; }
            float getNota() { return nota; }

            // Setters
            void setFaltas( float f ){ faltas = f; }
            void setNota (float n ){ nota = n; }

            void mostrarAluno(){
                cout << this->getNome() << endl;
                cout << this->getCurso() << endl;
                cout << this->getMatricula() << endl;
                cout << this->getFaltas() << endl;
                cout << this->getNota() << endl;
            }

        };
  - code:
      code: |
        
        class Estacionamento{

            string nome;
            string marca;
            string placa;
            string cor;
            long long int telefone;

            public:

            // Getters
            string getNome(){ return nome; }
            string getPlaca(){ return placa; }
            string getCor(){ return cor; }
            string getMarca(){ return marca; }
            long long int getTelefone(){ return telefone; }

            // Setters
            void setNome( string n ){ nome = n; }
            void setPlaca( string p ){ placa = p; }
            void setCor( string c ){ cor = c; }
            void setMarca( string m ){ marca = m; }
            void setTelefone( long long int t){ telefone = t;};

            // Mostra
            void mostrarProprietario(){
                cout << this->nome << endl;
                cout << this->placa << endl;
                cout << this->cor << endl;
                cout << this->marca << endl;
                cout << this->telefone << endl;
            }
        };   
    question: "4"
    text: "Novamente, um programa básico que utiliza os elementos básicos da POO:
      atributos e métodos."
---
A primeira lista de AED abordava os conceitos inicias de Programação Orientada à Objetos: atributos, métodos, construtores e métodos especiais.