//* Imports

import initREPL from "./plugins/repl/initREPL";

async function main () {
    await Promise.all([
        //* Main
    ]);

    await initREPL({
        name: "anfri"
    });
    //* Post Main
}

main();

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);