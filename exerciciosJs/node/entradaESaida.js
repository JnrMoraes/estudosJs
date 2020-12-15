const anonimo = process.argv.indexOf("-a") !== -1; // se a flag -a conter retorna true
// console.log(anonimo)

if (anonimo) {
  process.stdin.write("Fala Anônimo!\n");
  process.exit();
} else {
  process.stdout.write("Digite seu nome: ");
  process.stdout.on("data", (data) => {
    const nome = data.toString().replace("\n", "");

    process.stdout.write(` Fala ${nome}!!\n`);
    process.exit();
  });
}
