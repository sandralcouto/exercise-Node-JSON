const books = require("./database");
const readlineSync = require("readline-sync");
const input = readlineSync.question("Deseja buscar um livro? S/N");

if (input.toLocaleUpperCase() === "S") {
  const categorys = [
    "Literatura Inglesa",
    "/Literatura Latino-Americana",
    "/Ficção Científica",
    "/Tecnologia",
  ];
  let index = readlineSync.keyInSelect(
    categorys,
    "Digite o numero da categoria escolhida:"
  );
  if (index === -1) console.error("Programa finalizado!");
  else {
    console.log(
      "Ok, esses são os livros disponíveis na categoria " + categorys[index]
    );

    const filtro = books.filter((livro) => livro.category === categorys[index]);
    console.table(filtro);
  }
} else {
  const orderedBooks = books.sort((a, b) => a.pages - b.pages);
  console.log("Esses são todos os livros disponíveis:");
  console.table(orderedBooks);
}
