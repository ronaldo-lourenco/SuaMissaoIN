const caixaPrincipal    = document.querySelector(".caixa-principal") ;
const caixaPerguntas    = document.querySelector(".caixa-perguntas") ;
const caixaAlternativas = document.querySelector(".caixa-alternativas") ;
const caixaResultado    = document.querySelector(".caixa-resultado") ;
const textoResultado    = document.querySelector(".texto-resultado") ;

const perguntas = [
    {
        enunciado: "A disseminação de fake news pode ter graves consequências para a sociedade,  propagação de boatos, aumento da polarização política e o enfraquecimento da confiança nas instituições e na mídia. Você tem ciência dessas consequências ao compartilhar informações?",
        alternativas: [
            "Não me preocupo com isso",
            "Sim, com toda a certeza!"
        ]
    },
    {
        enunciado: "Como a desigualdade social afeta o acesso  a educação de qualidade?",
        alternativas: [
            "Faz com que pessoas com maior poder aquisitivo tenha uma educação de maior qualidade.",
            "Ela não afeta a educação,  pois todos têm acesso aos mesmos recursos."
        ]
    },
    {
        enunciado: "Quais as causas das desigualdades sociais? A educação pode conscientizar sobre Fake News e Desigualdade Social?",
        alternativas: [
            "Distribuição de renda e baixa qualificação profissional. A educação pode ser a ferramenta para conscientizar a sociedade.",
            "Falta de acessibilidade e utilização adequada da tecnologia para a qualificação profissional. A educação não interfere na conscientização da sociedade."
        ]
    }
] ;

