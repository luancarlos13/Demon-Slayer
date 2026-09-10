const normalizar = (texto = "") =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();


const aliases = {
  "love hashira": "mitsuri kanroji",
  pedra: "gyomei himejima",
  mestre: "ubuyashiki",
  "lua 1": "kokushibo",
};

const selecoes = {
  1: { titulo: "Tanjiro Kamado", imagem: "Personagens/tanjiro-kamado-3840x2160-10054.jpg", paragraph: "Tanjiro Kamado é o protagonista principal de Demon Slayer Ele é um Caçador de Oni do Esquadrão de Caçadores que se juntou para encontrar um remédio para transformar sua irmã, Nezuko Kamado, que foi transformada em um Oni, de volta em um humano. Antes de se tornar um Caçador de Oni, sua família foi massacrada pelo Rei dos Onis, Muzan Kibutsuji, enquanto sua irmã mais nova, Nezuko, foi transformada em uma Oni." },
  2: { titulo: "Nezuko Kamado", imagem: "Personagens/20200412-nezuko-1.jpg", paragraph: "Nezuko Kamado é uma das personagens principais da série de anime e mangá Demon Slayer: Kimetsu no Yaiba e a irmã mais nova do protagonista Tanjiro." },
  3: { titulo: "Zenitsu Agatsuma", imagem: "Personagens/zenitsu-agatsuma-chega-a-novo-jogo-de-demon-slayer-kimetsu-no-yaiba.webp", paragraph: "Zenitsu Agatsuma é um dos personagens principais de Demon Slayer: Kimetsu no Yaiba . Ele é um Caçador de Demônios no Corpo de Caçadores de Demônios e companheiro de viagem e amigo de Tanjiro Kamado e Nezuko Kamado, juntamente com Inosuke Hashibira." },
  4: { titulo: "Inosuke Hashibira", imagem: "Personagens/inosuke.jpeg", paragraph: "Inosuke Hashibira é um dos personagens principais de Demon Slayer: Kimetsu no Yaiba. Ele é um Caçador de Demônios no Corpo de Caçadores de Demônios e um companheiro de viagem de Tanjiro Kamado e Nezuko Kamado , juntamente com Zenitsu Agatsuma." },
  5: { titulo: "Giyu Tomioka", imagem: "Personagens/tomioka.jpeg", paragraph: "Giyu Tomioka é um personagem coadjuvante na popular série de anime/mangá Demon Slayer: Kimetsu no Yaiba. Ele é um membro do Esquadrão de caçadores de Onis, e é o atual Hashira da água. Ele também é quem convenceu Tanjiro a se tornar um Caçador de oni." },
  6: { titulo: "Shinobu Kocho", imagem: "Personagens/shinobu-1.jpg", paragraph: "Shinobu Kocho é uma importante personagem secundária de Demon Slayer: Kimetsu no Yaiba. Ela era uma Caçadora de Demônios do Corpo de Caçadores de Demônios e a Hashira Inseto da era Taisho. Ela também era a irmã mais nova da antiga Hashira Flor, Kanae Kocho, e a irmã adotiva mais velha de Kanao Tsuyuri." },
  7: { titulo: "Kyojuro Rengoku", imagem: "Personagens/rengoku-1.jpg", paragraph: "Kyojuro Rengoku é um personagem marcante da série Kimetsu no Yaiba (Demon Slayer), criada por Koyoharu Gotouge. Como um dos Hashira (Pilares) do Corpo de Caçadores de Oni, ele ocupa a posição de Hashira da Chama, representando um dos mais altos níveis de habilidade e dedicação na luta contra os onis." },
  8: { titulo: "Tengen Uzui", imagem: "Personagens/uzui-4d8jh6uhrvjrjqaa.jpg", paragraph: "Tengen Uzui é um importante personagem secundário de Demon Slayer: Kimetsu no Yaiba e um personagem importante no Arco do Distrito de Entretenimento. Ele foi um ex-membro do Corpo de Extermínio de Demônios , sendo o Hashira do Som da era Taisho." },
  9: { titulo: "Gyomei Himejima", imagem: "Personagens/praying-hashira-gyomei-himejima-dyl85tx38akgg9f5.jpg", paragraph: "Gyomei Himejima é um personagem coadjuvante importante de Demon Slayer: Kimetsu no Yaiba. Ele é o Hashira da pedra. Também atua como mentor de Genya Shinazugawa." },
  10: { titulo: "Obanai Iguro", imagem: "Personagens/demon-slayer-obanai-iguro-snake-sword-desktop-wallpaper-cover.jpg", paragraph: "Obanai Iguro é um importante personagem coadjuvante de Demon Slayer: Kimetsu no Yaiba. Ele é um exterminador do Esquadrão de Exterminadores de Onis e o atual pilar da serpente." },
  11: { titulo: "Sanemi Shinazugawa", imagem: "Personagens/SANEMI.jpeg", paragraph: "Sanemi Shinazugawa é um personagem coadjuvante importante de Demon Slayer: Kimetsu no Yaiba. Ele é o Hashira do vento. Sanemi também é o irmão mais velho de Genya Shinazugawa , um Caçador de Demônios que lutou ao lado de Tanjiro Kamado e Nezuko Kamado ." },
  12: { titulo: "Muichiro Tokito", imagem: "Personagens/muichiro-tokito-artistic-background-mqnox55zjodt2dna.jpg", paragraph: "Muichiro Tokito é um personagem coadjuvante de Demon Slayer: Kimetsu no Yaiba, sendo um exterminador de demônios e o atual Hashira da Névoa. Ele e seu irmão mais velho Yuichiro são descendentes do Lua Superior 1, Kokushibo." },
  13: { titulo: "Mitsuri Kanroji", imagem: "Personagens/love-hashira-mitsuri-kanjori-wallpaper-1920x1080_48.jpg", paragraph: "Mitsuri Kanroji é uma personagem coadjuvante importante de Demon Slayer: Kimetsu no Yaiba. Ela é uma Exterminadora de Demônios do Esquadrão de Exterminadores de Demônios e a atual Hashira do Amor." },
  14: { titulo: "Muzan", imagem: "Personagens/kibutsuji-muzan-q80zxprtipvsbzbp.jpg", paragraph: "Muzan Kibutsuji é o principal antagonista de Demon Slayer: Kimetsu no Yaiba . Ele é o Rei Demônio, o progenitor de todos os outros demônios existentes e o líder dos Doze Kizuki , uma organização composta pelos doze demônios mais fortes sob seu comando direto." },
  15: { titulo: "Akaza", imagem: "Personagens/wallpapersden.com_demon-slayer-akaza-character_1920x1080.jpg", paragraph: "Akaza é um antagonista de considerável importância da série de Demon Slayer: Kimetsu no Yaiba. Ele é o ocupante da posição de Lua Superior Três e por consequência, afiliado aos Doze Kizuki." },
  16: { titulo: "Tamayo", imagem: "Personagens/Tamayo_lan3Fgico_da_Luz_do_Dia.webp", paragraph: "Tamayo é uma importante personagem secundária de Demon Slayer: Kimetsu no Yaiba . Ela é uma demônio , uma médica habilidosa e uma aliada próxima de Tanjiro Kamado . Durante o confronto final entre a humanidade e os demônios, Tamayo, junto com Yushiro , une forças com o Corpo de Extermínio de Demônios para desenvolver uma droga que ajudaria na derrota de Muzan Kibutsuji." },
  17: { titulo: "Yushiro", imagem: "Personagens/yuishiro-demonslayer-character.jpg", paragraph: "Yushiro é um importante personagem secundário de Demon Slayer: Kimetsu no Yaiba . Ele é o companheiro de viagem de Tamayo e um aliado próximo de Tanjiro Kamado . Yushiro foi transformado em um demônio por Tamayo quando este estava com uma doença terminal." },
  18: { titulo: "Ubuyashiki", imagem: "Personagens/Muzan-Kibutsuji-and-Kagaya-Ubuya.jpg", paragraph: "Kagaya Ubuyashiki é um personagem coadjuvante de Demon Slayer: Kimetsu no Yaiba. Ele é o 97º Lider do Esquadrão de Caçadores de Demônios. Uma doença genetica da familia Ubuyashiki, o acomete, sendo aparentemente bem fatal. Ele, sua familia, Os Hashiras e o Esquadrão de Caçadores de Onis, Lutam para acabar com Muzan Kibutsuji e seus aliados." },
  19: { titulo: "Kokushibo", imagem: "Personagens/kokushibo.jpg", paragraph: "Kokushibo é um importante antagonista secundário de Demon Slayer: Kimetsu no Yaiba . Ele é um demônio afiliado aos Doze Kizuki , ocupando a posição mais alta, Rank Superior Um." },
  20: { titulo: "Haganezuka", imagem: "Personagens/haga2.jpg", paragraph: "Hotaru Haganezuka é um personagem secundário de Demon Slayer: Kimetsu no Yaiba . Ele é um ferreiro afiliado ao Corpo de Extermínio de Demônios." },
  21: { titulo: "Enmu", imagem: "Personagens/enmu.jfif", paragraph: "Enmu é o principal antagonista no Arco do Trem Infinito de Demon Slayer: Kimetsu no Yaiba . Ele era um demônio afiliado aos Doze Kizuki , ocupando a posição de Rank Um Inferior." },
  22: { titulo: "Daki", imagem: "Personagens/daki.webp", paragraph: "Daki é uma das principais antagonistas do Arco do Distrito de Entretenimento de Demon Slayer: Kimetsu no Yaiba. Ela era uma demônio afiliada aos Doze Kizuki , sendo a segunda detentora da posição de Rank Superior Seis,uma posição que ela compartilhava com o detentor principal, seu irmão mais velho, Gyutaro." },
  23: { titulo: "Gyutaro", imagem: "Personagens/Gyutaro.jpg", paragraph: "Gyutaro é um dos principais antagonistas do Arco do Distrito de Entretenimento de Demon Slayer: Kimetsu no Yaiba. Ele era um demônio afiliado aos Doze Kizuki , ocupando a posição de Rank Superior Seis, posição que compartilhava com sua irmã mais nova, Daki." },
  24: { titulo: "Gyokko", imagem: "Personagens/gyokko.jfif", paragraph: "Gyokko juntamente com Hantengu , é um dos principais antagonistas no Arco da Vila dos Espadachins de Demon Slayer: Kimetsu no Yaiba . Ele era um demônio afiliado aos Doze Kizuki , ocupando a posição de Rank Superior Cinco." },
  25: { titulo: "Hantengu", imagem: "Personagens/Hantengu_Full_Body_Anime.webp", paragraph: "Hantengu é um antagonista maior em Demon Slayer: Kimetsu no Yaiba. Ele é apresentado como um dos Doze Kizuki, servindo como o Quarta Lua Superior. Ele é um dos dois principais antagonistas (ao lado de Gyokko) do arco Vila dos Ferreiros." },
  26: { titulo: "Kaigaku", imagem: "Personagens/kaigaku.jpg", paragraph: "Kaigaku foi um antagonista secundário no Arco do Castelo Infinito de Demon Slayer: Kimetsu no Yaiba. Ele era um demônio afiliado aos Doze Kizuki , tendo ocupado a posição de Sexto Rank Superior, substituindo Daki e Gyutaro após suas mortes." },
  27: { titulo: "Doma", imagem: "Personagens/doma.webp", paragraph: "Doma é um grande antagonista na franquia Demon Slayer: Kimetsu no Yaiba. Ele é um ôni poderoso sob o comando de Muzan Kibutsuji e a Lua Superior Dois (anteriormente Lua Superior Seis) das Doze Kizuki. Ele é o antagonista abrangente do Arco do Distrito do entretenimento e o antagonista secundário do Arco do Castelo Infinito e na adaptação do filme de 2025 com o mesmo nome." },
  28: { titulo: "Nakime", imagem: "Personagens/nakime-demon-slayer.avif", paragraph: "Nakime é uma personagem recorrente e uma antagonista secundária no Arco do Castelo Infinito de Demon Slayer: Kimetsu no Yaiba. Ela é a demônio que possui e controla o Castelo Infinito e serve diretamente a Muzan Kibutsuji." },
  29: { titulo: "Rui", imagem: "Personagens/rui.png", paragraph: "Rui é o principal antagonista do Arco do Monte Natagumo de Demon Slayer: Kimetsu no Yaiba. Ele era um demônio afiliado aos Doze Kizuki , ocupando a posição de Rank Inferior Cinco." },
  30: { titulo: "Susamaru", imagem: "Personagens/susamaru.jpg", paragraph: "Susamaru também conhecida como o Demônio Temari, é uma das duas principais antagonistas do Arco Asakusa de Demon Slayer: Kimetsu no Yaiba , juntamente com Yahaba. Ela foi enganada e levada a acreditar que era membro dos Doze Kizuki." },
  31: { titulo: "Yahaba", imagem: "Personagens/yahaba.webp", paragraph: "Yahaba também conhecido como o Demônio Flecha é um dos dois principais antagonistas do Arco Asakusa de Demon Slayer: Kimetsu no Yaiba , juntamente com Susamaru. Ele foi enganado, acreditando ser um membro dos Doze Kizuki." },
};


const selecoesPorSlug = Object.entries(selecoes).reduce((accumulator, [id, selecao]) => {
  accumulator[normalizar(selecao.titulo)] = { id, ...selecao };
  return accumulator;
}, {});


function encontrarSelecaoPorTexto(texto = "") {
  const slug = aliases[normalizar(texto)] || normalizar(texto);

  if (selecoesPorSlug[slug]) {
    return selecoesPorSlug[slug];
  }

  return Object.values(selecoesPorSlug).find((selecao) => {
    const tituloSlug = normalizar(selecao.titulo);
    return tituloSlug.includes(slug) || slug.includes(tituloSlug);
  });
}

function preencherDetalhesDaSelecao() {
  const params = new URLSearchParams(window.location.search);
  const pais = params.get("pais");
  const selecao = pais
    ? Object.values(selecoesPorSlug).find((item) => normalizar(item.titulo) === pais)
    : null;

  const titulo = document.getElementById("detalhes-titulo");
  const imagem = document.getElementById("detalhes-imagem");
  const descricao = document.getElementById("detalhes-descricao");

  if (titulo && imagem && descricao && selecao) {
    titulo.textContent = selecao.titulo;
    imagem.src = selecao.imagem;
    imagem.alt = selecao.titulo;
    descricao.textContent = selecao.paragraph;

    const painel = document.querySelector("main");
    if (painel) {
      painel.style.background = "#000000";
    }
  }
}

function adicionarCliqueNasBandeiras() {
  const cards = document.querySelectorAll(".container-cards .cards");

  cards.forEach((card) => {
    const imagem = card.querySelector("img");
    imagem.style.cursor = "pointer";
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");

    const abrirDetalhes = () => {
      const selecao = encontrarSelecaoPorTexto(imagem.alt || "");

      if (!selecao) {
        return;
      }

      const url = `index2.html?pais=${encodeURIComponent(normalizar(selecao.titulo))}`;
      window.location.href = url;
    };

    card.addEventListener("click", abrirDetalhes);
    card.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        abrirDetalhes();
      }
    });
  });
}

function configurarMenuResponsivo() {
  const menu = document.querySelector(".menu");
  const botao = document.querySelector(".menu-toggle");

  if (!menu || !botao) {
    return;
  }

  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("menu-aberto");
    botao.setAttribute("aria-expanded", String(aberto));
  });

  menu.querySelectorAll(".detalhes a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("menu-aberto");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  configurarMenuResponsivo();

  if (document.querySelector(".container-cards")) {
    adicionarCliqueNasBandeiras();
  }

  if (document.getElementById("detalhes-selecao")) {
    preencherDetalhesDaSelecao();
  }
});
