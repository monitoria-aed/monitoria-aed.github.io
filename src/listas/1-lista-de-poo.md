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
---
A primeira lista de AED abordava os conceitos inicias de Programação Orientada à Objetos: atributos, métodos, construtores e métodos especiais.