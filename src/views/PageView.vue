<template>
  <div id="topo" class="container-fluid">
    <div class="container-fluid hero-image">
      <div class="hero-text col-xs-12 col-sm-12 col-md-8 col-lg-6">
        <h2 class="text-center">Conhecendo mais sobre o assunto</h2>
        <h3 class="text-center">Vamos entender...</h3>
      </div>
    </div>

    <div class="container col-8">
      <h3 class="text-start">
        Como conseguir gratuitamente fórmula especial para bebês com APLV
      </h3>

      <p>
        Hoje em dia é muito comum encontrar bebê com alergia a proteína do leite
        de vaca (APLV). Nesses casos é necessário que a criança faço o uso de
        fórmulas infantis especiais, que são bem caras. Algumas chegam a custar
        em torno de R$200,00 a lata, que não dura nem uma semana, dependendo da
        idade e necessidade do bebê. o governo tem um programa de distribuição
        gratuita dessas fórmulas, o que viabiliza seu uso para todos aqueles que
        delas necessitam. É importante saber que a distribuição é feita pela
        Secretaria de Saúde de cada estado – portanto, as regras para se obter o
        alimento variam de acordo com o local em que você mora. Confira abaixo o
        passo-a-passo para fazer o procedimento em São Paulo e, a seguir, o
        contato das secretarias de cada estado para se informar sobre o processo
        nesses locais.
      </p>

      <div class="about">
        <div class="row">
          <div class="col-sm-6 col-md-5">
            <ul>
              <li>01 Xerox dos exames (se houver)</li>
              <li>01 Xerox da certidão de nascimento</li>
              <li>02 Xerox da receita médica</li>
              <li>01 Xerox do comprovante de residência</li>
              <li>01 Xerox do RG e CPF dos pais</li>
              <li>
                01 Xerox do cartão nacional de Saúde (SUS) – que pode ser feito
                em qualquer posto de saúde
              </li>
            </ul>
          </div>

          <div class="col-sm-4 col-md-6">
            <img
              class="img-fluid img-thumbnail"
              src="@/assets/images/02.jpg"
              alt="100"
              height="160"
              width="140"
            />
          </div>
        </div>

        <div class="about">
          <h3 class="text-start">
            Por que é necessário que uma criança tome a fórmula especial se
            apresentar APLV?
          </h3>
          <p>
            Estima-se que 6% das crianças menores de 3 anos tenham alguma
            alergia alimentar – e entre os alimentos mais alergênicos está o
            leite de vaca. Cerca de 1 a cada 20 bebês apresentam a APLV (ou
            seja, é um problema relativamente comum!). Nesses casos, o organismo
            reage à proteína presente no leite, por isso é necessário excluí-lo
            da dieta por um tempo, assim como todos os alimentos dele derivados
            (iogurtes, queijos, manteiga) e que o contenham na composição
            (bolachas, algumas massas, pães, etc). Para que seja mantido o
            consumo de cálcio diário, extremamente necessário na primeira
            infância, assim como de outros nutrientes essenciais, em geral os
            pediatras recomendam o uso de fórmulas especiais, que têm na
            composição a proteína processada, para não causar alergia.
          </p>
        </div>

        
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutView",
  components: {},

  data() {
    return {};
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
}
ul {
  font-family: "Josefin Sans", sans-serif;
}

h3 {
  margin-top: 30px;
  margin-bottom: 30px;
}

.back {
  margin-top: 20px;
  margin-bottom: 90px;
}
</style>
